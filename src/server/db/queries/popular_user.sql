/* @name GetAllPopularUser */
SELECT
  marked_followers_ratio,
  marked_followers,
  weighted_marked_followers,
  pu.id,
  u.username,
  account_created_at,
  followers_count,
  following_count,
  tweet_count,
  listed_count
FROM
  public.popular_user pu
  LEFT JOIN public."TUser" u ON pu.id = u.id OFFSET :offset ! :: INTEGER
LIMIT
  :limit ! :: INTEGER;

/* @name RefreshPopularUserView */
REFRESH MATERIALIZED VIEW public.popular_user;

/* @name GetAllPopularUserDynamic */
SELECT
  marked_followers_ratio,
  marked_followers,
  weighted_marked_followers,
  pu.id,
  u.username,
  account_created_at,
  followers_count,
  following_count,
  tweet_count,
  listed_count,
  count(*) OVER() AS max_results
FROM
  public.popular_user pu
  LEFT JOIN public."TUser" u ON pu.id = u.id
WHERE
  (
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