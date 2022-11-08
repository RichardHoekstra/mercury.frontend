-- View: public.trending_user_180d
-- DROP MATERIALIZED VIEW IF EXISTS public.trending_user_180d;
CREATE MATERIALIZED VIEW IF NOT EXISTS public.trending_user_180d TABLESPACE pg_default AS
SELECT
    v.marked_followers_ratio,
    v.difference,
    v.weighted_difference,
    v.id,
    v.account_created_at,
    v.marked_followers,
    v.weighted_marked_followers,
    v.followers_count,
    v.following_count,
    v.tweet_count,
    v.listed_count
FROM
    (
        SELECT
            t1.marked_followers :: numeric / NULLIF(pm.followers_count :: numeric, 0.0) * 100.0 AS marked_followers_ratio,
            COALESCE(t1.marked_followers, 0 :: bigint) - COALESCE(t2.marked_followers, 0 :: bigint) AS difference,
            COALESCE(t1.weighted_marked_followers, 0 :: bigint) - COALESCE(t2.weighted_marked_followers, 0 :: bigint) AS weighted_difference,
            t1.id,
            t1.marked_followers,
            t1.weighted_marked_followers,
            t1."accountCreatedAt" AS account_created_at,
            pm.followers_count,
            pm.following_count,
            pm.tweet_count,
            pm.listed_count
        FROM
            (
                SELECT
                    u.id,
                    u."accountCreatedAt",
                    count(conn."toId") AS marked_followers,
                    sum(markeduser."markedWeight") AS weighted_marked_followers
                FROM
                    "TUser" u
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
                    ) conn ON u.id = conn."toId"
                    LEFT JOIN (
                        SELECT
                            "TUser".id AS markedid,
                            "TUser"."markedWeight"
                        FROM
                            "TUser"
                    ) markeduser ON conn."fromId" = markeduser.markedid
                GROUP BY
                    u.id
            ) t1 FULL
            JOIN (
                SELECT
                    u.id,
                    count(conn."toId") AS marked_followers,
                    sum(markeduser."markedWeight") AS weighted_marked_followers
                FROM
                    "TUser" u
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
                                WHERE
                                    _inner."createdAt" <= (now() - '1 day' :: interval)
                                ORDER BY
                                    _inner."fromId",
                                    _inner."toId",
                                    _inner.version DESC
                            ) conn_1
                        WHERE
                            conn_1.status = 'CONNECTED' :: "ConnectionStatus"
                    ) conn ON u.id = conn."toId"
                    LEFT JOIN (
                        SELECT
                            "TUser".id AS markedid,
                            "TUser"."markedWeight"
                        FROM
                            "TUser"
                    ) markeduser ON conn."fromId" = markeduser.markedid
                GROUP BY
                    u.id
            ) t2 USING (id)
            LEFT JOIN "TUserPublicMetrics" pm ON t1.id = pm."tUserId"
    ) v
WHERE
    v.difference <> 0 WITH DATA;

CREATE INDEX trending_user_180d_account_created_at ON public.trending_user_180d USING btree (account_created_at) TABLESPACE pg_default;

CREATE INDEX trending_user_180d_followers_count ON public.trending_user_180d USING btree (followers_count) TABLESPACE pg_default;

CREATE INDEX trending_user_180d_following_count ON public.trending_user_180d USING btree (following_count) TABLESPACE pg_default;

CREATE INDEX trending_user_180d_id ON public.trending_user_180d USING btree (id COLLATE pg_catalog."default") TABLESPACE pg_default;

CREATE INDEX trending_user_180d_listed_count ON public.trending_user_180d USING btree (listed_count) TABLESPACE pg_default;

CREATE INDEX trending_user_180d_marked_followers ON public.trending_user_180d USING btree (marked_followers) TABLESPACE pg_default;

CREATE INDEX trending_user_180d_marked_followers_ratio ON public.trending_user_180d USING btree (marked_followers_ratio) TABLESPACE pg_default;

CREATE INDEX trending_user_180d_tweet_count ON public.trending_user_180d USING btree (tweet_count) TABLESPACE pg_default;

CREATE INDEX trending_user_180d_weighted_marked_followers ON public.trending_user_180d USING btree (weighted_marked_followers) TABLESPACE pg_default;