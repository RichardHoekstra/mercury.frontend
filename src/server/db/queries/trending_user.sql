/* @name GetAllTrendingUser1d */
SELECT
  marked_followers_ratio,
  difference,
  weighted_difference,
  id,
  account_created_at,
  marked_followers,
  weighted_marked_followers,
  followers_count,
  following_count,
  tweet_count,
  listed_count
FROM
  public.trending_user_1d OFFSET :offset ! :: INTEGER
LIMIT
  :limit ! :: INTEGER;

/* @name RefreshTrendingUser1dView */
REFRESH MATERIALIZED VIEW public.trending_user_1d;

/* @name RefreshTrendingUser3dView */
REFRESH MATERIALIZED VIEW public.trending_user_3d;

/* @name RefreshTrendingUser7dView */
REFRESH MATERIALIZED VIEW public.trending_user_7d;

/* @name RefreshTrendingUser30dView */
REFRESH MATERIALIZED VIEW public.trending_user_30d;

/* @name RefreshTrendingUser90dView */
REFRESH MATERIALIZED VIEW public.trending_user_90d;

/* @name RefreshTrendingUser180dView */
REFRESH MATERIALIZED VIEW public.trending_user_180d;

/* @name RefreshTrendingUser365dView */
REFRESH MATERIALIZED VIEW public.trending_user_365d;

/* @name GetAllTrendingUser1dDynamic */
SELECT
  marked_followers_ratio,
  difference,
  weighted_difference,
  tu.id,
  u.username,
  account_created_at,
  marked_followers,
  weighted_marked_followers,
  followers_count,
  following_count,
  tweet_count,
  listed_count,
  count(*) OVER() AS max_results
FROM
  public.trending_user_1d tu
  LEFT JOIN public."TUser" u ON tu.id = u.id
WHERE
  (
    :weighted_difference_min :: INTEGER IS NULL
    OR weighted_difference >= :weighted_difference_min
  )
  AND (
    :weighted_difference_max :: INTEGER IS NULL
    OR weighted_difference <= :weighted_difference_max
  )
  AND (
    :difference_min :: INTEGER IS NULL
    OR difference >= :difference_min
  )
  AND (
    :difference_max :: INTEGER IS NULL
    OR difference <= :difference_max
  )
  AND (
    :marked_followers_ratio_min :: INTEGER IS NULL
    OR marked_followers_ratio >= :marked_followers_ratio_min
  )
  AND (
    :marked_followers_ratio_max :: INTEGER IS NULL
    OR marked_followers_ratio <= :marked_followers_ratio_max
  )
  AND (
    :marked_followers_min :: INTEGER IS NULL
    OR marked_followers >= :marked_followers_min
  )
  AND (
    :marked_followers_max :: INTEGER IS NULL
    OR marked_followers <= :marked_followers_max
  )
  AND (
    :weighted_marked_followers_min :: INTEGER IS NULL
    OR weighted_marked_followers >= :weighted_marked_followers_min
  )
  AND (
    :weighted_marked_followers_max :: INTEGER IS NULL
    OR weighted_marked_followers <= :weighted_marked_followers_max
  )
  AND (
    :account_created_at_min :: timestamp without time zone IS NULL
    OR account_created_at >= :account_created_at_min
  )
  AND (
    :account_created_at_max :: timestamp without time zone IS NULL
    OR account_created_at <= :account_created_at_max
  )
  AND (
    :followers_count_min :: INTEGER IS NULL
    OR followers_count >= :followers_count_min
  )
  AND (
    :followers_count_max :: INTEGER IS NULL
    OR followers_count <= :followers_count_max
  )
  AND (
    :following_count_min :: INTEGER IS NULL
    OR following_count >= :following_count_min
  )
  AND (
    :following_count_max :: INTEGER IS NULL
    OR following_count <= :following_count_max
  )
  AND (
    :tweet_count_min :: INTEGER IS NULL
    OR tweet_count >= :tweet_count_min
  )
  AND (
    :tweet_count_max :: INTEGER IS NULL
    OR tweet_count <= :tweet_count_max
  )
  AND (
    :listed_count_min :: INTEGER IS NULL
    OR listed_count >= :listed_count_min
  )
  AND (
    :listed_count_max :: INTEGER IS NULL
    OR listed_count <= :listed_count_max
  )
ORDER BY
  (
    case
      when :sort_column = 'weighted_difference'
      and :desc = false then weighted_difference
    end
  ) asc,
  (
    case
      when :sort_column = 'weighted_difference'
      and :desc = true then weighted_difference
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'difference'
      and :desc = false then difference
    end
  ) asc,
  (
    case
      when :sort_column = 'difference'
      and :desc = true then difference
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'marked_followers_ratio'
      and :desc = false then marked_followers_ratio
    end
  ) asc,
  (
    case
      when :sort_column = 'marked_followers_ratio'
      and :desc = true then marked_followers_ratio
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'marked_followers'
      and :desc = false then marked_followers
    end
  ) asc,
  (
    case
      when :sort_column = 'marked_followers'
      and :desc = true then marked_followers
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'weighted_marked_followers'
      and :desc = false then weighted_marked_followers
    end
  ) asc,
  (
    case
      when :sort_column = 'weighted_marked_followers'
      and :desc = true then weighted_marked_followers
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'account_created_at'
      and :desc = false then account_created_at
    end
  ) asc,
  (
    case
      when :sort_column = 'account_created_at'
      and :desc = true then account_created_at
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'followers_count'
      and :desc = false then followers_count
    end
  ) asc,
  (
    case
      when :sort_column = 'followers_count'
      and :desc = true then followers_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'following_count'
      and :desc = false then following_count
    end
  ) asc,
  (
    case
      when :sort_column = 'following_count'
      and :desc = true then following_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'tweet_count'
      and :desc = false then tweet_count
    end
  ) asc,
  (
    case
      when :sort_column = 'tweet_count'
      and :desc = true then tweet_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'listed_count'
      and :desc = false then listed_count
    end
  ) asc,
  (
    case
      when :sort_column = 'listed_count'
      and :desc = true then listed_count
    end
  ) desc NULLS LAST OFFSET :offset ! :: INTEGER
LIMIT
  :limit ! :: INTEGER;

/* @name GetAllTrendingUser3d */
SELECT
  marked_followers_ratio,
  difference,
  weighted_difference,
  id,
  account_created_at,
  marked_followers,
  weighted_marked_followers,
  followers_count,
  following_count,
  tweet_count,
  listed_count
FROM
  public.trending_user_3d OFFSET :offset ! :: INTEGER
LIMIT
  :limit ! :: INTEGER;

/* @name GetAllTrendingUser3dDynamic */
SELECT
  marked_followers_ratio,
  difference,
  weighted_difference,
  tu.id,
  u.username,
  account_created_at,
  marked_followers,
  weighted_marked_followers,
  followers_count,
  following_count,
  tweet_count,
  listed_count,
  count(*) OVER() AS max_results
FROM
  public.trending_user_3d tu
  LEFT JOIN public."TUser" u ON tu.id = u.id
WHERE
  (
    :weighted_difference_min :: INTEGER IS NULL
    OR weighted_difference >= :weighted_difference_min
  )
  AND (
    :weighted_difference_max :: INTEGER IS NULL
    OR weighted_difference <= :weighted_difference_max
  )
  AND (
    :difference_min :: INTEGER IS NULL
    OR difference >= :difference_min
  )
  AND (
    :difference_max :: INTEGER IS NULL
    OR difference <= :difference_max
  )
  AND (
    :marked_followers_ratio_min :: INTEGER IS NULL
    OR marked_followers_ratio >= :marked_followers_ratio_min
  )
  AND (
    :marked_followers_ratio_max :: INTEGER IS NULL
    OR marked_followers_ratio <= :marked_followers_ratio_max
  )
  AND (
    :marked_followers_min :: INTEGER IS NULL
    OR marked_followers >= :marked_followers_min
  )
  AND (
    :marked_followers_max :: INTEGER IS NULL
    OR marked_followers <= :marked_followers_max
  )
  AND (
    :weighted_marked_followers_min :: INTEGER IS NULL
    OR weighted_marked_followers >= :weighted_marked_followers_min
  )
  AND (
    :weighted_marked_followers_max :: INTEGER IS NULL
    OR weighted_marked_followers <= :weighted_marked_followers_max
  )
  AND (
    :account_created_at_min :: timestamp without time zone IS NULL
    OR account_created_at >= :account_created_at_min
  )
  AND (
    :account_created_at_max :: timestamp without time zone IS NULL
    OR account_created_at <= :account_created_at_max
  )
  AND (
    :followers_count_min :: INTEGER IS NULL
    OR followers_count >= :followers_count_min
  )
  AND (
    :followers_count_max :: INTEGER IS NULL
    OR followers_count <= :followers_count_max
  )
  AND (
    :following_count_min :: INTEGER IS NULL
    OR following_count >= :following_count_min
  )
  AND (
    :following_count_max :: INTEGER IS NULL
    OR following_count <= :following_count_max
  )
  AND (
    :tweet_count_min :: INTEGER IS NULL
    OR tweet_count >= :tweet_count_min
  )
  AND (
    :tweet_count_max :: INTEGER IS NULL
    OR tweet_count <= :tweet_count_max
  )
  AND (
    :listed_count_min :: INTEGER IS NULL
    OR listed_count >= :listed_count_min
  )
  AND (
    :listed_count_max :: INTEGER IS NULL
    OR listed_count <= :listed_count_max
  )
ORDER BY
  (
    case
      when :sort_column = 'weighted_difference'
      and :desc = false then weighted_difference
    end
  ) asc,
  (
    case
      when :sort_column = 'weighted_difference'
      and :desc = true then weighted_difference
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'difference'
      and :desc = false then difference
    end
  ) asc,
  (
    case
      when :sort_column = 'difference'
      and :desc = true then difference
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'marked_followers_ratio'
      and :desc = false then marked_followers_ratio
    end
  ) asc,
  (
    case
      when :sort_column = 'marked_followers_ratio'
      and :desc = true then marked_followers_ratio
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'marked_followers'
      and :desc = false then marked_followers
    end
  ) asc,
  (
    case
      when :sort_column = 'marked_followers'
      and :desc = true then marked_followers
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'weighted_marked_followers'
      and :desc = false then weighted_marked_followers
    end
  ) asc,
  (
    case
      when :sort_column = 'weighted_marked_followers'
      and :desc = true then weighted_marked_followers
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'account_created_at'
      and :desc = false then account_created_at
    end
  ) asc,
  (
    case
      when :sort_column = 'account_created_at'
      and :desc = true then account_created_at
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'followers_count'
      and :desc = false then followers_count
    end
  ) asc,
  (
    case
      when :sort_column = 'followers_count'
      and :desc = true then followers_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'following_count'
      and :desc = false then following_count
    end
  ) asc,
  (
    case
      when :sort_column = 'following_count'
      and :desc = true then following_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'tweet_count'
      and :desc = false then tweet_count
    end
  ) asc,
  (
    case
      when :sort_column = 'tweet_count'
      and :desc = true then tweet_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'listed_count'
      and :desc = false then listed_count
    end
  ) asc,
  (
    case
      when :sort_column = 'listed_count'
      and :desc = true then listed_count
    end
  ) desc NULLS LAST OFFSET :offset ! :: INTEGER
LIMIT
  :limit ! :: INTEGER;

/* @name GetAllTrendingUser7d */
SELECT
  marked_followers_ratio,
  difference,
  weighted_difference,
  id,
  account_created_at,
  marked_followers,
  weighted_marked_followers,
  followers_count,
  following_count,
  tweet_count,
  listed_count
FROM
  public.trending_user_7d;

/* @name GetAllTrendingUser7dDynamic */
SELECT
  marked_followers_ratio,
  difference,
  weighted_difference,
  tu.id,
  u.username,
  account_created_at,
  marked_followers,
  weighted_marked_followers,
  followers_count,
  following_count,
  tweet_count,
  listed_count,
  count(*) OVER() AS max_results
FROM
  public.trending_user_7d tu
  LEFT JOIN public."TUser" u ON tu.id = u.id
WHERE
  (
    :weighted_difference_min :: INTEGER IS NULL
    OR weighted_difference >= :weighted_difference_min
  )
  AND (
    :weighted_difference_max :: INTEGER IS NULL
    OR weighted_difference <= :weighted_difference_max
  )
  AND (
    :difference_min :: INTEGER IS NULL
    OR difference >= :difference_min
  )
  AND (
    :difference_max :: INTEGER IS NULL
    OR difference <= :difference_max
  )
  AND (
    :marked_followers_ratio_min :: INTEGER IS NULL
    OR marked_followers_ratio >= :marked_followers_ratio_min
  )
  AND (
    :marked_followers_ratio_max :: INTEGER IS NULL
    OR marked_followers_ratio <= :marked_followers_ratio_max
  )
  AND (
    :marked_followers_min :: INTEGER IS NULL
    OR marked_followers >= :marked_followers_min
  )
  AND (
    :marked_followers_max :: INTEGER IS NULL
    OR marked_followers <= :marked_followers_max
  )
  AND (
    :weighted_marked_followers_min :: INTEGER IS NULL
    OR weighted_marked_followers >= :weighted_marked_followers_min
  )
  AND (
    :weighted_marked_followers_max :: INTEGER IS NULL
    OR weighted_marked_followers <= :weighted_marked_followers_max
  )
  AND (
    :account_created_at_min :: timestamp without time zone IS NULL
    OR account_created_at >= :account_created_at_min
  )
  AND (
    :account_created_at_max :: timestamp without time zone IS NULL
    OR account_created_at <= :account_created_at_max
  )
  AND (
    :followers_count_min :: INTEGER IS NULL
    OR followers_count >= :followers_count_min
  )
  AND (
    :followers_count_max :: INTEGER IS NULL
    OR followers_count <= :followers_count_max
  )
  AND (
    :following_count_min :: INTEGER IS NULL
    OR following_count >= :following_count_min
  )
  AND (
    :following_count_max :: INTEGER IS NULL
    OR following_count <= :following_count_max
  )
  AND (
    :tweet_count_min :: INTEGER IS NULL
    OR tweet_count >= :tweet_count_min
  )
  AND (
    :tweet_count_max :: INTEGER IS NULL
    OR tweet_count <= :tweet_count_max
  )
  AND (
    :listed_count_min :: INTEGER IS NULL
    OR listed_count >= :listed_count_min
  )
  AND (
    :listed_count_max :: INTEGER IS NULL
    OR listed_count <= :listed_count_max
  )
ORDER BY
  (
    case
      when :sort_column = 'weighted_difference'
      and :desc = false then weighted_difference
    end
  ) asc,
  (
    case
      when :sort_column = 'weighted_difference'
      and :desc = true then weighted_difference
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'difference'
      and :desc = false then difference
    end
  ) asc,
  (
    case
      when :sort_column = 'difference'
      and :desc = true then difference
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'marked_followers_ratio'
      and :desc = false then marked_followers_ratio
    end
  ) asc,
  (
    case
      when :sort_column = 'marked_followers_ratio'
      and :desc = true then marked_followers_ratio
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'marked_followers'
      and :desc = false then marked_followers
    end
  ) asc,
  (
    case
      when :sort_column = 'marked_followers'
      and :desc = true then marked_followers
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'weighted_marked_followers'
      and :desc = false then weighted_marked_followers
    end
  ) asc,
  (
    case
      when :sort_column = 'weighted_marked_followers'
      and :desc = true then weighted_marked_followers
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'account_created_at'
      and :desc = false then account_created_at
    end
  ) asc,
  (
    case
      when :sort_column = 'account_created_at'
      and :desc = true then account_created_at
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'followers_count'
      and :desc = false then followers_count
    end
  ) asc,
  (
    case
      when :sort_column = 'followers_count'
      and :desc = true then followers_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'following_count'
      and :desc = false then following_count
    end
  ) asc,
  (
    case
      when :sort_column = 'following_count'
      and :desc = true then following_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'tweet_count'
      and :desc = false then tweet_count
    end
  ) asc,
  (
    case
      when :sort_column = 'tweet_count'
      and :desc = true then tweet_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'listed_count'
      and :desc = false then listed_count
    end
  ) asc,
  (
    case
      when :sort_column = 'listed_count'
      and :desc = true then listed_count
    end
  ) desc NULLS LAST OFFSET :offset ! :: INTEGER
LIMIT
  :limit ! :: INTEGER;

/* @name GetAllTrendingUser30d */
SELECT
  marked_followers_ratio,
  difference,
  weighted_difference,
  id,
  account_created_at,
  marked_followers,
  weighted_marked_followers,
  followers_count,
  following_count,
  tweet_count,
  listed_count
FROM
  public.trending_user_30d OFFSET :offset ! :: INTEGER
LIMIT
  :limit ! :: INTEGER;

/* @name GetAllTrendingUser30dDynamic */
SELECT
  marked_followers_ratio,
  difference,
  weighted_difference,
  tu.id,
  u.username,
  account_created_at,
  marked_followers,
  weighted_marked_followers,
  followers_count,
  following_count,
  tweet_count,
  listed_count,
  count(*) OVER() AS max_results
FROM
  public.trending_user_30d tu
  LEFT JOIN public."TUser" u ON tu.id = u.id
WHERE
  (
    :weighted_difference_min :: INTEGER IS NULL
    OR weighted_difference >= :weighted_difference_min
  )
  AND (
    :weighted_difference_max :: INTEGER IS NULL
    OR weighted_difference <= :weighted_difference_max
  )
  AND (
    :difference_min :: INTEGER IS NULL
    OR difference >= :difference_min
  )
  AND (
    :difference_max :: INTEGER IS NULL
    OR difference <= :difference_max
  )
  AND (
    :marked_followers_ratio_min :: INTEGER IS NULL
    OR marked_followers_ratio >= :marked_followers_ratio_min
  )
  AND (
    :marked_followers_ratio_max :: INTEGER IS NULL
    OR marked_followers_ratio <= :marked_followers_ratio_max
  )
  AND (
    :marked_followers_min :: INTEGER IS NULL
    OR marked_followers >= :marked_followers_min
  )
  AND (
    :marked_followers_max :: INTEGER IS NULL
    OR marked_followers <= :marked_followers_max
  )
  AND (
    :weighted_marked_followers_min :: INTEGER IS NULL
    OR weighted_marked_followers >= :weighted_marked_followers_min
  )
  AND (
    :weighted_marked_followers_max :: INTEGER IS NULL
    OR weighted_marked_followers <= :weighted_marked_followers_max
  )
  AND (
    :account_created_at_min :: timestamp without time zone IS NULL
    OR account_created_at >= :account_created_at_min
  )
  AND (
    :account_created_at_max :: timestamp without time zone IS NULL
    OR account_created_at <= :account_created_at_max
  )
  AND (
    :followers_count_min :: INTEGER IS NULL
    OR followers_count >= :followers_count_min
  )
  AND (
    :followers_count_max :: INTEGER IS NULL
    OR followers_count <= :followers_count_max
  )
  AND (
    :following_count_min :: INTEGER IS NULL
    OR following_count >= :following_count_min
  )
  AND (
    :following_count_max :: INTEGER IS NULL
    OR following_count <= :following_count_max
  )
  AND (
    :tweet_count_min :: INTEGER IS NULL
    OR tweet_count >= :tweet_count_min
  )
  AND (
    :tweet_count_max :: INTEGER IS NULL
    OR tweet_count <= :tweet_count_max
  )
  AND (
    :listed_count_min :: INTEGER IS NULL
    OR listed_count >= :listed_count_min
  )
  AND (
    :listed_count_max :: INTEGER IS NULL
    OR listed_count <= :listed_count_max
  )
ORDER BY
  (
    case
      when :sort_column = 'weighted_difference'
      and :desc = false then weighted_difference
    end
  ) asc,
  (
    case
      when :sort_column = 'weighted_difference'
      and :desc = true then weighted_difference
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'difference'
      and :desc = false then difference
    end
  ) asc,
  (
    case
      when :sort_column = 'difference'
      and :desc = true then difference
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'marked_followers_ratio'
      and :desc = false then marked_followers_ratio
    end
  ) asc,
  (
    case
      when :sort_column = 'marked_followers_ratio'
      and :desc = true then marked_followers_ratio
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'marked_followers'
      and :desc = false then marked_followers
    end
  ) asc,
  (
    case
      when :sort_column = 'marked_followers'
      and :desc = true then marked_followers
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'weighted_marked_followers'
      and :desc = false then weighted_marked_followers
    end
  ) asc,
  (
    case
      when :sort_column = 'weighted_marked_followers'
      and :desc = true then weighted_marked_followers
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'account_created_at'
      and :desc = false then account_created_at
    end
  ) asc,
  (
    case
      when :sort_column = 'account_created_at'
      and :desc = true then account_created_at
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'followers_count'
      and :desc = false then followers_count
    end
  ) asc,
  (
    case
      when :sort_column = 'followers_count'
      and :desc = true then followers_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'following_count'
      and :desc = false then following_count
    end
  ) asc,
  (
    case
      when :sort_column = 'following_count'
      and :desc = true then following_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'tweet_count'
      and :desc = false then tweet_count
    end
  ) asc,
  (
    case
      when :sort_column = 'tweet_count'
      and :desc = true then tweet_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'listed_count'
      and :desc = false then listed_count
    end
  ) asc,
  (
    case
      when :sort_column = 'listed_count'
      and :desc = true then listed_count
    end
  ) desc NULLS LAST OFFSET :offset ! :: INTEGER
LIMIT
  :limit ! :: INTEGER;

/* @name GetAllTrendingUser90d */
SELECT
  marked_followers_ratio,
  difference,
  weighted_difference,
  id,
  account_created_at,
  marked_followers,
  weighted_marked_followers,
  followers_count,
  following_count,
  tweet_count,
  listed_count
FROM
  public.trending_user_90d;

/* @name GetAllTrendingUser90dDynamic */
SELECT
  marked_followers_ratio,
  difference,
  weighted_difference,
  tu.id,
  u.username,
  account_created_at,
  marked_followers,
  weighted_marked_followers,
  followers_count,
  following_count,
  tweet_count,
  listed_count,
  count(*) OVER() AS max_results
FROM
  public.trending_user_90d tu
  LEFT JOIN public."TUser" u ON tu.id = u.id
WHERE
  (
    :weighted_difference_min :: INTEGER IS NULL
    OR weighted_difference >= :weighted_difference_min
  )
  AND (
    :weighted_difference_max :: INTEGER IS NULL
    OR weighted_difference <= :weighted_difference_max
  )
  AND (
    :difference_min :: INTEGER IS NULL
    OR difference >= :difference_min
  )
  AND (
    :difference_max :: INTEGER IS NULL
    OR difference <= :difference_max
  )
  AND (
    :marked_followers_ratio_min :: INTEGER IS NULL
    OR marked_followers_ratio >= :marked_followers_ratio_min
  )
  AND (
    :marked_followers_ratio_max :: INTEGER IS NULL
    OR marked_followers_ratio <= :marked_followers_ratio_max
  )
  AND (
    :marked_followers_min :: INTEGER IS NULL
    OR marked_followers >= :marked_followers_min
  )
  AND (
    :marked_followers_max :: INTEGER IS NULL
    OR marked_followers <= :marked_followers_max
  )
  AND (
    :weighted_marked_followers_min :: INTEGER IS NULL
    OR weighted_marked_followers >= :weighted_marked_followers_min
  )
  AND (
    :weighted_marked_followers_max :: INTEGER IS NULL
    OR weighted_marked_followers <= :weighted_marked_followers_max
  )
  AND (
    :account_created_at_min :: timestamp without time zone IS NULL
    OR account_created_at >= :account_created_at_min
  )
  AND (
    :account_created_at_max :: timestamp without time zone IS NULL
    OR account_created_at <= :account_created_at_max
  )
  AND (
    :followers_count_min :: INTEGER IS NULL
    OR followers_count >= :followers_count_min
  )
  AND (
    :followers_count_max :: INTEGER IS NULL
    OR followers_count <= :followers_count_max
  )
  AND (
    :following_count_min :: INTEGER IS NULL
    OR following_count >= :following_count_min
  )
  AND (
    :following_count_max :: INTEGER IS NULL
    OR following_count <= :following_count_max
  )
  AND (
    :tweet_count_min :: INTEGER IS NULL
    OR tweet_count >= :tweet_count_min
  )
  AND (
    :tweet_count_max :: INTEGER IS NULL
    OR tweet_count <= :tweet_count_max
  )
  AND (
    :listed_count_min :: INTEGER IS NULL
    OR listed_count >= :listed_count_min
  )
  AND (
    :listed_count_max :: INTEGER IS NULL
    OR listed_count <= :listed_count_max
  )
ORDER BY
  (
    case
      when :sort_column = 'weighted_difference'
      and :desc = false then weighted_difference
    end
  ) asc,
  (
    case
      when :sort_column = 'weighted_difference'
      and :desc = true then weighted_difference
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'difference'
      and :desc = false then difference
    end
  ) asc,
  (
    case
      when :sort_column = 'difference'
      and :desc = true then difference
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'marked_followers_ratio'
      and :desc = false then marked_followers_ratio
    end
  ) asc,
  (
    case
      when :sort_column = 'marked_followers_ratio'
      and :desc = true then marked_followers_ratio
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'marked_followers'
      and :desc = false then marked_followers
    end
  ) asc,
  (
    case
      when :sort_column = 'marked_followers'
      and :desc = true then marked_followers
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'weighted_marked_followers'
      and :desc = false then weighted_marked_followers
    end
  ) asc,
  (
    case
      when :sort_column = 'weighted_marked_followers'
      and :desc = true then weighted_marked_followers
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'account_created_at'
      and :desc = false then account_created_at
    end
  ) asc,
  (
    case
      when :sort_column = 'account_created_at'
      and :desc = true then account_created_at
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'followers_count'
      and :desc = false then followers_count
    end
  ) asc,
  (
    case
      when :sort_column = 'followers_count'
      and :desc = true then followers_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'following_count'
      and :desc = false then following_count
    end
  ) asc,
  (
    case
      when :sort_column = 'following_count'
      and :desc = true then following_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'tweet_count'
      and :desc = false then tweet_count
    end
  ) asc,
  (
    case
      when :sort_column = 'tweet_count'
      and :desc = true then tweet_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'listed_count'
      and :desc = false then listed_count
    end
  ) asc,
  (
    case
      when :sort_column = 'listed_count'
      and :desc = true then listed_count
    end
  ) desc NULLS LAST OFFSET :offset ! :: INTEGER
LIMIT
  :limit ! :: INTEGER;

/* @name GetAllTrendingUser180d */
SELECT
  marked_followers_ratio,
  difference,
  weighted_difference,
  id,
  account_created_at,
  marked_followers,
  weighted_marked_followers,
  followers_count,
  following_count,
  tweet_count,
  listed_count
FROM
  public.trending_user_180d OFFSET :offset ! :: INTEGER
LIMIT
  :limit ! :: INTEGER;

/* @name GetAllTrendingUser180dDynamic */
SELECT
  marked_followers_ratio,
  difference,
  weighted_difference,
  tu.id,
  u.username,
  account_created_at,
  marked_followers,
  weighted_marked_followers,
  followers_count,
  following_count,
  tweet_count,
  listed_count,
  count(*) OVER() AS max_results
FROM
  public.trending_user_180d tu
  LEFT JOIN public."TUser" u ON tu.id = u.id
WHERE
  (
    :weighted_difference_min :: INTEGER IS NULL
    OR weighted_difference >= :weighted_difference_min
  )
  AND (
    :weighted_difference_max :: INTEGER IS NULL
    OR weighted_difference <= :weighted_difference_max
  )
  AND (
    :difference_min :: INTEGER IS NULL
    OR difference >= :difference_min
  )
  AND (
    :difference_max :: INTEGER IS NULL
    OR difference <= :difference_max
  )
  AND (
    :marked_followers_ratio_min :: INTEGER IS NULL
    OR marked_followers_ratio >= :marked_followers_ratio_min
  )
  AND (
    :marked_followers_ratio_max :: INTEGER IS NULL
    OR marked_followers_ratio <= :marked_followers_ratio_max
  )
  AND (
    :marked_followers_min :: INTEGER IS NULL
    OR marked_followers >= :marked_followers_min
  )
  AND (
    :marked_followers_max :: INTEGER IS NULL
    OR marked_followers <= :marked_followers_max
  )
  AND (
    :weighted_marked_followers_min :: INTEGER IS NULL
    OR weighted_marked_followers >= :weighted_marked_followers_min
  )
  AND (
    :weighted_marked_followers_max :: INTEGER IS NULL
    OR weighted_marked_followers <= :weighted_marked_followers_max
  )
  AND (
    :account_created_at_min :: timestamp without time zone IS NULL
    OR account_created_at >= :account_created_at_min
  )
  AND (
    :account_created_at_max :: timestamp without time zone IS NULL
    OR account_created_at <= :account_created_at_max
  )
  AND (
    :followers_count_min :: INTEGER IS NULL
    OR followers_count >= :followers_count_min
  )
  AND (
    :followers_count_max :: INTEGER IS NULL
    OR followers_count <= :followers_count_max
  )
  AND (
    :following_count_min :: INTEGER IS NULL
    OR following_count >= :following_count_min
  )
  AND (
    :following_count_max :: INTEGER IS NULL
    OR following_count <= :following_count_max
  )
  AND (
    :tweet_count_min :: INTEGER IS NULL
    OR tweet_count >= :tweet_count_min
  )
  AND (
    :tweet_count_max :: INTEGER IS NULL
    OR tweet_count <= :tweet_count_max
  )
  AND (
    :listed_count_min :: INTEGER IS NULL
    OR listed_count >= :listed_count_min
  )
  AND (
    :listed_count_max :: INTEGER IS NULL
    OR listed_count <= :listed_count_max
  )
ORDER BY
  (
    case
      when :sort_column = 'weighted_difference'
      and :desc = false then weighted_difference
    end
  ) asc,
  (
    case
      when :sort_column = 'weighted_difference'
      and :desc = true then weighted_difference
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'difference'
      and :desc = false then difference
    end
  ) asc,
  (
    case
      when :sort_column = 'difference'
      and :desc = true then difference
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'marked_followers_ratio'
      and :desc = false then marked_followers_ratio
    end
  ) asc,
  (
    case
      when :sort_column = 'marked_followers_ratio'
      and :desc = true then marked_followers_ratio
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'marked_followers'
      and :desc = false then marked_followers
    end
  ) asc,
  (
    case
      when :sort_column = 'marked_followers'
      and :desc = true then marked_followers
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'weighted_marked_followers'
      and :desc = false then weighted_marked_followers
    end
  ) asc,
  (
    case
      when :sort_column = 'weighted_marked_followers'
      and :desc = true then weighted_marked_followers
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'account_created_at'
      and :desc = false then account_created_at
    end
  ) asc,
  (
    case
      when :sort_column = 'account_created_at'
      and :desc = true then account_created_at
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'followers_count'
      and :desc = false then followers_count
    end
  ) asc,
  (
    case
      when :sort_column = 'followers_count'
      and :desc = true then followers_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'following_count'
      and :desc = false then following_count
    end
  ) asc,
  (
    case
      when :sort_column = 'following_count'
      and :desc = true then following_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'tweet_count'
      and :desc = false then tweet_count
    end
  ) asc,
  (
    case
      when :sort_column = 'tweet_count'
      and :desc = true then tweet_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'listed_count'
      and :desc = false then listed_count
    end
  ) asc,
  (
    case
      when :sort_column = 'listed_count'
      and :desc = true then listed_count
    end
  ) desc NULLS LAST OFFSET :offset ! :: INTEGER
LIMIT
  :limit ! :: INTEGER;

/* @name GetAllTrendingUser365d */
SELECT
  marked_followers_ratio,
  difference,
  weighted_difference,
  id,
  account_created_at,
  marked_followers,
  weighted_marked_followers,
  followers_count,
  following_count,
  tweet_count,
  listed_count
FROM
  public.trending_user_365d OFFSET :offset ! :: INTEGER
LIMIT
  :limit ! :: INTEGER;

/* @name GetAllTrendingUser365dDynamic */
SELECT
  marked_followers_ratio,
  difference,
  weighted_difference,
  tu.id,
  u.username,
  account_created_at,
  marked_followers,
  weighted_marked_followers,
  followers_count,
  following_count,
  tweet_count,
  listed_count,
  count(*) OVER() AS max_results
FROM
  public.trending_user_365d tu
  LEFT JOIN public."TUser" u ON tu.id = u.id
WHERE
  (
    :weighted_difference_min :: INTEGER IS NULL
    OR weighted_difference >= :weighted_difference_min
  )
  AND (
    :weighted_difference_max :: INTEGER IS NULL
    OR weighted_difference <= :weighted_difference_max
  )
  AND (
    :difference_min :: INTEGER IS NULL
    OR difference >= :difference_min
  )
  AND (
    :difference_max :: INTEGER IS NULL
    OR difference <= :difference_max
  )
  AND (
    :marked_followers_ratio_min :: INTEGER IS NULL
    OR marked_followers_ratio >= :marked_followers_ratio_min
  )
  AND (
    :marked_followers_ratio_max :: INTEGER IS NULL
    OR marked_followers_ratio <= :marked_followers_ratio_max
  )
  AND (
    :marked_followers_min :: INTEGER IS NULL
    OR marked_followers >= :marked_followers_min
  )
  AND (
    :marked_followers_max :: INTEGER IS NULL
    OR marked_followers <= :marked_followers_max
  )
  AND (
    :weighted_marked_followers_min :: INTEGER IS NULL
    OR weighted_marked_followers >= :weighted_marked_followers_min
  )
  AND (
    :weighted_marked_followers_max :: INTEGER IS NULL
    OR weighted_marked_followers <= :weighted_marked_followers_max
  )
  AND (
    :account_created_at_min :: timestamp without time zone IS NULL
    OR account_created_at >= :account_created_at_min
  )
  AND (
    :account_created_at_max :: timestamp without time zone IS NULL
    OR account_created_at <= :account_created_at_max
  )
  AND (
    :followers_count_min :: INTEGER IS NULL
    OR followers_count >= :followers_count_min
  )
  AND (
    :followers_count_max :: INTEGER IS NULL
    OR followers_count <= :followers_count_max
  )
  AND (
    :following_count_min :: INTEGER IS NULL
    OR following_count >= :following_count_min
  )
  AND (
    :following_count_max :: INTEGER IS NULL
    OR following_count <= :following_count_max
  )
  AND (
    :tweet_count_min :: INTEGER IS NULL
    OR tweet_count >= :tweet_count_min
  )
  AND (
    :tweet_count_max :: INTEGER IS NULL
    OR tweet_count <= :tweet_count_max
  )
  AND (
    :listed_count_min :: INTEGER IS NULL
    OR listed_count >= :listed_count_min
  )
  AND (
    :listed_count_max :: INTEGER IS NULL
    OR listed_count <= :listed_count_max
  )
ORDER BY
  (
    case
      when :sort_column = 'weighted_difference'
      and :desc = false then weighted_difference
    end
  ) asc,
  (
    case
      when :sort_column = 'weighted_difference'
      and :desc = true then weighted_difference
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'difference'
      and :desc = false then difference
    end
  ) asc,
  (
    case
      when :sort_column = 'difference'
      and :desc = true then difference
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'marked_followers_ratio'
      and :desc = false then marked_followers_ratio
    end
  ) asc,
  (
    case
      when :sort_column = 'marked_followers_ratio'
      and :desc = true then marked_followers_ratio
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'marked_followers'
      and :desc = false then marked_followers
    end
  ) asc,
  (
    case
      when :sort_column = 'marked_followers'
      and :desc = true then marked_followers
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'weighted_marked_followers'
      and :desc = false then weighted_marked_followers
    end
  ) asc,
  (
    case
      when :sort_column = 'weighted_marked_followers'
      and :desc = true then weighted_marked_followers
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'account_created_at'
      and :desc = false then account_created_at
    end
  ) asc,
  (
    case
      when :sort_column = 'account_created_at'
      and :desc = true then account_created_at
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'followers_count'
      and :desc = false then followers_count
    end
  ) asc,
  (
    case
      when :sort_column = 'followers_count'
      and :desc = true then followers_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'following_count'
      and :desc = false then following_count
    end
  ) asc,
  (
    case
      when :sort_column = 'following_count'
      and :desc = true then following_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'tweet_count'
      and :desc = false then tweet_count
    end
  ) asc,
  (
    case
      when :sort_column = 'tweet_count'
      and :desc = true then tweet_count
    end
  ) desc NULLS LAST,
  (
    case
      when :sort_column = 'listed_count'
      and :desc = false then listed_count
    end
  ) asc,
  (
    case
      when :sort_column = 'listed_count'
      and :desc = true then listed_count
    end
  ) desc NULLS LAST OFFSET :offset ! :: INTEGER
LIMIT
  :limit ! :: INTEGER;