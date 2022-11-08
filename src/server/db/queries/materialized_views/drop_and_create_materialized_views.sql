-- View: public.popular_user
DROP MATERIALIZED VIEW IF EXISTS public.popular_user;

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

-- View: public.trending_user_1d
DROP MATERIALIZED VIEW IF EXISTS public.trending_user_1d;

CREATE MATERIALIZED VIEW IF NOT EXISTS public.trending_user_1d TABLESPACE pg_default AS
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

CREATE INDEX trending_user_1d_account_created_at ON public.trending_user_1d USING btree (account_created_at) TABLESPACE pg_default;

CREATE INDEX trending_user_1d_followers_count ON public.trending_user_1d USING btree (followers_count) TABLESPACE pg_default;

CREATE INDEX trending_user_1d_following_count ON public.trending_user_1d USING btree (following_count) TABLESPACE pg_default;

CREATE UNIQUE INDEX trending_user_1d_id ON public.trending_user_1d USING btree (id COLLATE pg_catalog."default") TABLESPACE pg_default;

CREATE INDEX trending_user_1d_listed_count ON public.trending_user_1d USING btree (listed_count) TABLESPACE pg_default;

CREATE INDEX trending_user_1d_marked_followers ON public.trending_user_1d USING btree (marked_followers) TABLESPACE pg_default;

CREATE INDEX trending_user_1d_marked_followers_ratio ON public.trending_user_1d USING btree (marked_followers_ratio) TABLESPACE pg_default;

CREATE INDEX trending_user_1d_tweet_count ON public.trending_user_1d USING btree (tweet_count) TABLESPACE pg_default;

CREATE INDEX trending_user_1d_weighted_marked_followers ON public.trending_user_1d USING btree (weighted_marked_followers) TABLESPACE pg_default;

-- View: public.trending_user_3d
DROP MATERIALIZED VIEW IF EXISTS public.trending_user_3d;

CREATE MATERIALIZED VIEW IF NOT EXISTS public.trending_user_3d TABLESPACE pg_default AS
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
                  _inner."createdAt" <= (now() - '3 day' :: interval)
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

CREATE INDEX trending_user_3d_account_created_at ON public.trending_user_3d USING btree (account_created_at) TABLESPACE pg_default;

CREATE INDEX trending_user_3d_followers_count ON public.trending_user_3d USING btree (followers_count) TABLESPACE pg_default;

CREATE INDEX trending_user_3d_following_count ON public.trending_user_3d USING btree (following_count) TABLESPACE pg_default;

CREATE UNIQUE INDEX trending_user_3d_id ON public.trending_user_3d USING btree (id COLLATE pg_catalog."default") TABLESPACE pg_default;

CREATE INDEX trending_user_3d_listed_count ON public.trending_user_3d USING btree (listed_count) TABLESPACE pg_default;

CREATE INDEX trending_user_3d_marked_followers ON public.trending_user_3d USING btree (marked_followers) TABLESPACE pg_default;

CREATE INDEX trending_user_3d_marked_followers_ratio ON public.trending_user_3d USING btree (marked_followers_ratio) TABLESPACE pg_default;

CREATE INDEX trending_user_3d_tweet_count ON public.trending_user_3d USING btree (tweet_count) TABLESPACE pg_default;

CREATE INDEX trending_user_3d_weighted_marked_followers ON public.trending_user_3d USING btree (weighted_marked_followers) TABLESPACE pg_default;

-- View: public.trending_user_7d
DROP MATERIALIZED VIEW IF EXISTS public.trending_user_7d;

CREATE MATERIALIZED VIEW IF NOT EXISTS public.trending_user_7d TABLESPACE pg_default AS
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
                  _inner."createdAt" <= (now() - '7 day' :: interval)
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

CREATE INDEX trending_user_7d_account_created_at ON public.trending_user_7d USING btree (account_created_at) TABLESPACE pg_default;

CREATE INDEX trending_user_7d_followers_count ON public.trending_user_7d USING btree (followers_count) TABLESPACE pg_default;

CREATE INDEX trending_user_7d_following_count ON public.trending_user_7d USING btree (following_count) TABLESPACE pg_default;

CREATE UNIQUE INDEX trending_user_7d_id ON public.trending_user_7d USING btree (id COLLATE pg_catalog."default") TABLESPACE pg_default;

CREATE INDEX trending_user_7d_listed_count ON public.trending_user_7d USING btree (listed_count) TABLESPACE pg_default;

CREATE INDEX trending_user_7d_marked_followers ON public.trending_user_7d USING btree (marked_followers) TABLESPACE pg_default;

CREATE INDEX trending_user_7d_marked_followers_ratio ON public.trending_user_7d USING btree (marked_followers_ratio) TABLESPACE pg_default;

CREATE INDEX trending_user_7d_tweet_count ON public.trending_user_7d USING btree (tweet_count) TABLESPACE pg_default;

CREATE INDEX trending_user_7d_weighted_marked_followers ON public.trending_user_7d USING btree (weighted_marked_followers) TABLESPACE pg_default;

-- View: public.trending_user_30d
DROP MATERIALIZED VIEW IF EXISTS public.trending_user_30d;

CREATE MATERIALIZED VIEW IF NOT EXISTS public.trending_user_30d TABLESPACE pg_default AS
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
                  _inner."createdAt" <= (now() - '30 day' :: interval)
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

CREATE INDEX trending_user_30d_account_created_at ON public.trending_user_30d USING btree (account_created_at) TABLESPACE pg_default;

CREATE INDEX trending_user_30d_followers_count ON public.trending_user_30d USING btree (followers_count) TABLESPACE pg_default;

CREATE INDEX trending_user_30d_following_count ON public.trending_user_30d USING btree (following_count) TABLESPACE pg_default;

CREATE UNIQUE INDEX trending_user_30d_id ON public.trending_user_30d USING btree (id COLLATE pg_catalog."default") TABLESPACE pg_default;

CREATE INDEX trending_user_30d_listed_count ON public.trending_user_30d USING btree (listed_count) TABLESPACE pg_default;

CREATE INDEX trending_user_30d_marked_followers ON public.trending_user_30d USING btree (marked_followers) TABLESPACE pg_default;

CREATE INDEX trending_user_30d_marked_followers_ratio ON public.trending_user_30d USING btree (marked_followers_ratio) TABLESPACE pg_default;

CREATE INDEX trending_user_30d_tweet_count ON public.trending_user_30d USING btree (tweet_count) TABLESPACE pg_default;

CREATE INDEX trending_user_30d_weighted_marked_followers ON public.trending_user_30d USING btree (weighted_marked_followers) TABLESPACE pg_default;

-- View: public.trending_user_90d
DROP MATERIALIZED VIEW IF EXISTS public.trending_user_90d;

CREATE MATERIALIZED VIEW IF NOT EXISTS public.trending_user_90d TABLESPACE pg_default AS
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
                  _inner."createdAt" <= (now() - '90 day' :: interval)
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

CREATE INDEX trending_user_90d_account_created_at ON public.trending_user_90d USING btree (account_created_at) TABLESPACE pg_default;

CREATE INDEX trending_user_90d_followers_count ON public.trending_user_90d USING btree (followers_count) TABLESPACE pg_default;

CREATE INDEX trending_user_90d_following_count ON public.trending_user_90d USING btree (following_count) TABLESPACE pg_default;

CREATE UNIQUE INDEX trending_user_90d_id ON public.trending_user_90d USING btree (id COLLATE pg_catalog."default") TABLESPACE pg_default;

CREATE INDEX trending_user_90d_listed_count ON public.trending_user_90d USING btree (listed_count) TABLESPACE pg_default;

CREATE INDEX trending_user_90d_marked_followers ON public.trending_user_90d USING btree (marked_followers) TABLESPACE pg_default;

CREATE INDEX trending_user_90d_marked_followers_ratio ON public.trending_user_90d USING btree (marked_followers_ratio) TABLESPACE pg_default;

CREATE INDEX trending_user_90d_tweet_count ON public.trending_user_90d USING btree (tweet_count) TABLESPACE pg_default;

CREATE INDEX trending_user_90d_weighted_marked_followers ON public.trending_user_90d USING btree (weighted_marked_followers) TABLESPACE pg_default;

-- View: public.trending_user_180d
DROP MATERIALIZED VIEW IF EXISTS public.trending_user_180d;

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
                  _inner."createdAt" <= (now() - '180 day' :: interval)
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

CREATE UNIQUE INDEX trending_user_180d_id ON public.trending_user_180d USING btree (id COLLATE pg_catalog."default") TABLESPACE pg_default;

CREATE INDEX trending_user_180d_listed_count ON public.trending_user_180d USING btree (listed_count) TABLESPACE pg_default;

CREATE INDEX trending_user_180d_marked_followers ON public.trending_user_180d USING btree (marked_followers) TABLESPACE pg_default;

CREATE INDEX trending_user_180d_marked_followers_ratio ON public.trending_user_180d USING btree (marked_followers_ratio) TABLESPACE pg_default;

CREATE INDEX trending_user_180d_tweet_count ON public.trending_user_180d USING btree (tweet_count) TABLESPACE pg_default;

CREATE INDEX trending_user_180d_weighted_marked_followers ON public.trending_user_180d USING btree (weighted_marked_followers) TABLESPACE pg_default;

-- View: public.trending_user_365d
DROP MATERIALIZED VIEW IF EXISTS public.trending_user_365d;

CREATE MATERIALIZED VIEW IF NOT EXISTS public.trending_user_365d TABLESPACE pg_default AS
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
                  _inner."createdAt" <= (now() - '365 day' :: interval)
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

CREATE INDEX trending_user_365d_account_created_at ON public.trending_user_365d USING btree (account_created_at) TABLESPACE pg_default;

CREATE INDEX trending_user_365d_followers_count ON public.trending_user_365d USING btree (followers_count) TABLESPACE pg_default;

CREATE INDEX trending_user_365d_following_count ON public.trending_user_365d USING btree (following_count) TABLESPACE pg_default;

CREATE UNIQUE INDEX trending_user_365d_id ON public.trending_user_365d USING btree (id COLLATE pg_catalog."default") TABLESPACE pg_default;

CREATE INDEX trending_user_365d_listed_count ON public.trending_user_365d USING btree (listed_count) TABLESPACE pg_default;

CREATE INDEX trending_user_365d_marked_followers ON public.trending_user_365d USING btree (marked_followers) TABLESPACE pg_default;

CREATE INDEX trending_user_365d_marked_followers_ratio ON public.trending_user_365d USING btree (marked_followers_ratio) TABLESPACE pg_default;

CREATE INDEX trending_user_365d_tweet_count ON public.trending_user_365d USING btree (tweet_count) TABLESPACE pg_default;

CREATE INDEX trending_user_365d_weighted_marked_followers ON public.trending_user_365d USING btree (weighted_marked_followers) TABLESPACE pg_default;