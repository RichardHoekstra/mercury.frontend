-- View: public.popular_user
-- DROP MATERIALIZED VIEW IF EXISTS public.popular_user;
CREATE MATERIALIZED VIEW IF NOT EXISTS public.popular_user TABLESPACE pg_default AS
SELECT
    u.marked_followers :: numeric / NULLIF(pm.followers_count :: numeric, 0.0) * 100.0 AS marked_followers_ratio,
    u.marked_followers,
    u.weighted_marked_followers,
    u.id,
    u."accountCreatedAt" AS account_created_at,
    pm.followers_count,
    pm.following_count,
    pm.tweet_count,
    pm.listed_count
FROM
    (
        SELECT
            count(conn."toId") AS marked_followers,
            sum(markeduser."markedWeight") AS weighted_marked_followers,
            u_1.id,
            u_1."accountCreatedAt"
        FROM
            "TUser" u_1
            LEFT JOIN (
                SELECT
                    conn_1."fromId",
                    conn_1."toId",
                    conn_1.status,
                    conn_1.version,
                    conn_1."createdAt"
                FROM
                    (
                        SELECT
                            DISTINCT ON (_inner."fromId", _inner."toId") _inner."fromId",
                            _inner."toId",
                            _inner.status,
                            _inner.version,
                            _inner."createdAt"
                        FROM
                            "TConnection" _inner
                        ORDER BY
                            _inner."fromId",
                            _inner."toId",
                            _inner.version DESC
                    ) conn_1
                WHERE
                    conn_1.status = 'CONNECTED' :: "ConnectionStatus"
            ) conn ON u_1.id = conn."toId"
            LEFT JOIN (
                SELECT
                    "TUser".id AS markedid,
                    "TUser"."markedWeight"
                FROM
                    "TUser"
            ) markeduser ON conn."fromId" = markeduser.markedid
        GROUP BY
            u_1.id
    ) u
    LEFT JOIN "TUserPublicMetrics" pm ON u.id = pm."tUserId" WITH DATA;

CREATE INDEX popular_user_account_created_at ON public.popular_user USING btree (account_created_at) TABLESPACE pg_default;

CREATE INDEX popular_user_followers_count ON public.popular_user USING btree (followers_count) TABLESPACE pg_default;

CREATE INDEX popular_user_following_count ON public.popular_user USING btree (following_count) TABLESPACE pg_default;

CREATE INDEX popular_user_id ON public.popular_user USING btree (id COLLATE pg_catalog."default") TABLESPACE pg_default;

CREATE INDEX popular_user_listed_count ON public.popular_user USING btree (listed_count) TABLESPACE pg_default;

CREATE INDEX popular_user_marked_followers ON public.popular_user USING btree (marked_followers) TABLESPACE pg_default;

CREATE INDEX popular_user_marked_followers_ratio ON public.popular_user USING btree (marked_followers_ratio) TABLESPACE pg_default;

CREATE INDEX popular_user_tweet_count ON public.popular_user USING btree (tweet_count) TABLESPACE pg_default;

CREATE INDEX popular_user_weighted_marked_followers ON public.popular_user USING btree (weighted_marked_followers) TABLESPACE pg_default;