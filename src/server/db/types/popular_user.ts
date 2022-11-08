/** Types generated for queries found in "queries/popular_user.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'GetAllPopularUser' parameters type */
export interface IGetAllPopularUserParams {
  limit: number;
  offset: number;
}

/** 'GetAllPopularUser' return type */
export interface IGetAllPopularUserResult {
  account_created_at: Date | null;
  followers_count: number | null;
  following_count: number | null;
  id: string | null;
  listed_count: number | null;
  marked_followers: string | null;
  marked_followers_ratio: string | null;
  tweet_count: number | null;
  username: string;
  weighted_marked_followers: string | null;
}

/** 'GetAllPopularUser' query type */
export interface IGetAllPopularUserQuery {
  params: IGetAllPopularUserParams;
  result: IGetAllPopularUserResult;
}

const getAllPopularUserIR: any = {"usedParamSet":{"offset":true,"limit":true},"params":[{"name":"offset","required":true,"transform":{"type":"scalar"},"locs":[{"a":277,"b":285}]},{"name":"limit","required":true,"transform":{"type":"scalar"},"locs":[{"a":306,"b":313}]}],"statement":"SELECT\n  marked_followers_ratio,\n  marked_followers,\n  weighted_marked_followers,\n  pu.id,\n  u.username,\n  account_created_at,\n  followers_count,\n  following_count,\n  tweet_count,\n  listed_count\nFROM\n  public.popular_user pu\n  LEFT JOIN public.\"TUser\" u ON pu.id = u.id OFFSET :offset ! :: INTEGER\nLIMIT\n  :limit ! :: INTEGER"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   marked_followers_ratio,
 *   marked_followers,
 *   weighted_marked_followers,
 *   pu.id,
 *   u.username,
 *   account_created_at,
 *   followers_count,
 *   following_count,
 *   tweet_count,
 *   listed_count
 * FROM
 *   public.popular_user pu
 *   LEFT JOIN public."TUser" u ON pu.id = u.id OFFSET :offset ! :: INTEGER
 * LIMIT
 *   :limit ! :: INTEGER
 * ```
 */
export const getAllPopularUser = new PreparedQuery<IGetAllPopularUserParams,IGetAllPopularUserResult>(getAllPopularUserIR);


/** 'RefreshPopularUserView' parameters type */
export type IRefreshPopularUserViewParams = void;

/** 'RefreshPopularUserView' return type */
export type IRefreshPopularUserViewResult = void;

/** 'RefreshPopularUserView' query type */
export interface IRefreshPopularUserViewQuery {
  params: IRefreshPopularUserViewParams;
  result: IRefreshPopularUserViewResult;
}

const refreshPopularUserViewIR: any = {"usedParamSet":{},"params":[],"statement":"REFRESH MATERIALIZED VIEW public.popular_user"};

/**
 * Query generated from SQL:
 * ```
 * REFRESH MATERIALIZED VIEW public.popular_user
 * ```
 */
export const refreshPopularUserView = new PreparedQuery<IRefreshPopularUserViewParams,IRefreshPopularUserViewResult>(refreshPopularUserViewIR);


/** 'GetAllPopularUserDynamic' parameters type */
export interface IGetAllPopularUserDynamicParams {
  account_created_at_max: Date | null | void;
  account_created_at_min: Date | null | void;
  desc: boolean | null | void;
  followers_count_max: number | null | void;
  followers_count_min: number | null | void;
  following_count_max: number | null | void;
  following_count_min: number | null | void;
  limit: number;
  listed_count_max: number | null | void;
  listed_count_min: number | null | void;
  marked_followers_max: number | null | void;
  marked_followers_min: number | null | void;
  marked_followers_ratio_max: number | null | void;
  marked_followers_ratio_min: number | null | void;
  offset: number;
  sort_column: string | null | void;
  tweet_count_max: number | null | void;
  tweet_count_min: number | null | void;
  weighted_marked_followers_max: number | null | void;
  weighted_marked_followers_min: number | null | void;
}

/** 'GetAllPopularUserDynamic' return type */
export interface IGetAllPopularUserDynamicResult {
  account_created_at: Date | null;
  followers_count: number | null;
  following_count: number | null;
  id: string | null;
  listed_count: number | null;
  marked_followers: string | null;
  marked_followers_ratio: string | null;
  max_results: string | null;
  tweet_count: number | null;
  username: string;
  weighted_marked_followers: string | null;
}

/** 'GetAllPopularUserDynamic' query type */
export interface IGetAllPopularUserDynamicQuery {
  params: IGetAllPopularUserDynamicParams;
  result: IGetAllPopularUserDynamicResult;
}

const getAllPopularUserDynamicIR: any = {"usedParamSet":{"marked_followers_ratio_min":true,"marked_followers_ratio_max":true,"marked_followers_min":true,"marked_followers_max":true,"weighted_marked_followers_min":true,"weighted_marked_followers_max":true,"account_created_at_min":true,"account_created_at_max":true,"followers_count_min":true,"followers_count_max":true,"following_count_min":true,"following_count_max":true,"tweet_count_min":true,"tweet_count_max":true,"listed_count_min":true,"listed_count_max":true,"sort_column":true,"desc":true,"offset":true,"limit":true},"params":[{"name":"marked_followers_ratio_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":318,"b":344},{"a":398,"b":424}]},{"name":"marked_followers_ratio_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":442,"b":468},{"a":522,"b":548}]},{"name":"marked_followers_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":566,"b":586},{"a":634,"b":654}]},{"name":"marked_followers_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":672,"b":692},{"a":740,"b":760}]},{"name":"weighted_marked_followers_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":778,"b":807},{"a":864,"b":893}]},{"name":"weighted_marked_followers_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":911,"b":940},{"a":997,"b":1026}]},{"name":"account_created_at_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1044,"b":1066},{"a":1136,"b":1158}]},{"name":"account_created_at_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1176,"b":1198},{"a":1268,"b":1290}]},{"name":"followers_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1308,"b":1327},{"a":1374,"b":1393}]},{"name":"followers_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1411,"b":1430},{"a":1477,"b":1496}]},{"name":"following_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1514,"b":1533},{"a":1580,"b":1599}]},{"name":"following_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1617,"b":1636},{"a":1683,"b":1702}]},{"name":"tweet_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1720,"b":1735},{"a":1778,"b":1793}]},{"name":"tweet_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1811,"b":1826},{"a":1869,"b":1884}]},{"name":"listed_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1902,"b":1918},{"a":1962,"b":1978}]},{"name":"listed_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1996,"b":2012},{"a":2056,"b":2072}]},{"name":"sort_column","required":false,"transform":{"type":"scalar"},"locs":[{"a":2111,"b":2122},{"a":2244,"b":2255},{"a":2388,"b":2399},{"a":2509,"b":2520},{"a":2641,"b":2652},{"a":2780,"b":2791},{"a":2930,"b":2941},{"a":3055,"b":3066},{"a":3191,"b":3202},{"a":3310,"b":3321},{"a":3440,"b":3451},{"a":3559,"b":3570},{"a":3689,"b":3700},{"a":3800,"b":3811},{"a":3922,"b":3933},{"a":4035,"b":4046}]},{"name":"desc","required":false,"transform":{"type":"scalar"},"locs":[{"a":2161,"b":2165},{"a":2294,"b":2298},{"a":2432,"b":2436},{"a":2553,"b":2557},{"a":2694,"b":2698},{"a":2833,"b":2837},{"a":2976,"b":2980},{"a":3101,"b":3105},{"a":3234,"b":3238},{"a":3353,"b":3357},{"a":3483,"b":3487},{"a":3602,"b":3606},{"a":3728,"b":3732},{"a":3839,"b":3843},{"a":3962,"b":3966},{"a":4075,"b":4079}]},{"name":"offset","required":true,"transform":{"type":"scalar"},"locs":[{"a":4141,"b":4149}]},{"name":"limit","required":true,"transform":{"type":"scalar"},"locs":[{"a":4170,"b":4177}]}],"statement":"SELECT\n  marked_followers_ratio,\n  marked_followers,\n  weighted_marked_followers,\n  pu.id,\n  u.username,\n  account_created_at,\n  followers_count,\n  following_count,\n  tweet_count,\n  listed_count,\n  count(*) OVER() AS max_results\nFROM\n  public.popular_user pu\n  LEFT JOIN public.\"TUser\" u ON pu.id = u.id\nWHERE\n  (\n    :marked_followers_ratio_min :: INTEGER IS NULL\n    OR marked_followers_ratio >= :marked_followers_ratio_min\n  )\n  AND (\n    :marked_followers_ratio_max :: INTEGER IS NULL\n    OR marked_followers_ratio <= :marked_followers_ratio_max\n  )\n  AND (\n    :marked_followers_min :: INTEGER IS NULL\n    OR marked_followers >= :marked_followers_min\n  )\n  AND (\n    :marked_followers_max :: INTEGER IS NULL\n    OR marked_followers <= :marked_followers_max\n  )\n  AND (\n    :weighted_marked_followers_min :: INTEGER IS NULL\n    OR weighted_marked_followers >= :weighted_marked_followers_min\n  )\n  AND (\n    :weighted_marked_followers_max :: INTEGER IS NULL\n    OR weighted_marked_followers <= :weighted_marked_followers_max\n  )\n  AND (\n    :account_created_at_min :: timestamp without time zone IS NULL\n    OR account_created_at >= :account_created_at_min\n  )\n  AND (\n    :account_created_at_max :: timestamp without time zone IS NULL\n    OR account_created_at <= :account_created_at_max\n  )\n  AND (\n    :followers_count_min :: INTEGER IS NULL\n    OR followers_count >= :followers_count_min\n  )\n  AND (\n    :followers_count_max :: INTEGER IS NULL\n    OR followers_count <= :followers_count_max\n  )\n  AND (\n    :following_count_min :: INTEGER IS NULL\n    OR following_count >= :following_count_min\n  )\n  AND (\n    :following_count_max :: INTEGER IS NULL\n    OR following_count <= :following_count_max\n  )\n  AND (\n    :tweet_count_min :: INTEGER IS NULL\n    OR tweet_count >= :tweet_count_min\n  )\n  AND (\n    :tweet_count_max :: INTEGER IS NULL\n    OR tweet_count <= :tweet_count_max\n  )\n  AND (\n    :listed_count_min :: INTEGER IS NULL\n    OR listed_count >= :listed_count_min\n  )\n  AND (\n    :listed_count_max :: INTEGER IS NULL\n    OR listed_count <= :listed_count_max\n  )\nORDER BY\n  (\n    case\n      when :sort_column = 'marked_followers_ratio'\n      and :desc = false then marked_followers_ratio\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'marked_followers_ratio'\n      and :desc = true then marked_followers_ratio\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'marked_followers'\n      and :desc = false then marked_followers\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'marked_followers'\n      and :desc = true then marked_followers\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'weighted_marked_followers'\n      and :desc = false then weighted_marked_followers\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'weighted_marked_followers'\n      and :desc = true then weighted_marked_followers\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'account_created_at'\n      and :desc = false then account_created_at\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'account_created_at'\n      and :desc = true then account_created_at\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'followers_count'\n      and :desc = false then followers_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'followers_count'\n      and :desc = true then followers_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'following_count'\n      and :desc = false then following_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'following_count'\n      and :desc = true then following_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'tweet_count'\n      and :desc = false then tweet_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'tweet_count'\n      and :desc = true then tweet_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'listed_count'\n      and :desc = false then listed_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'listed_count'\n      and :desc = true then listed_count\n    end\n  ) desc NULLS LAST OFFSET :offset ! :: INTEGER\nLIMIT\n  :limit ! :: INTEGER"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   marked_followers_ratio,
 *   marked_followers,
 *   weighted_marked_followers,
 *   pu.id,
 *   u.username,
 *   account_created_at,
 *   followers_count,
 *   following_count,
 *   tweet_count,
 *   listed_count,
 *   count(*) OVER() AS max_results
 * FROM
 *   public.popular_user pu
 *   LEFT JOIN public."TUser" u ON pu.id = u.id
 * WHERE
 *   (
 *     :marked_followers_ratio_min :: INTEGER IS NULL
 *     OR marked_followers_ratio >= :marked_followers_ratio_min
 *   )
 *   AND (
 *     :marked_followers_ratio_max :: INTEGER IS NULL
 *     OR marked_followers_ratio <= :marked_followers_ratio_max
 *   )
 *   AND (
 *     :marked_followers_min :: INTEGER IS NULL
 *     OR marked_followers >= :marked_followers_min
 *   )
 *   AND (
 *     :marked_followers_max :: INTEGER IS NULL
 *     OR marked_followers <= :marked_followers_max
 *   )
 *   AND (
 *     :weighted_marked_followers_min :: INTEGER IS NULL
 *     OR weighted_marked_followers >= :weighted_marked_followers_min
 *   )
 *   AND (
 *     :weighted_marked_followers_max :: INTEGER IS NULL
 *     OR weighted_marked_followers <= :weighted_marked_followers_max
 *   )
 *   AND (
 *     :account_created_at_min :: timestamp without time zone IS NULL
 *     OR account_created_at >= :account_created_at_min
 *   )
 *   AND (
 *     :account_created_at_max :: timestamp without time zone IS NULL
 *     OR account_created_at <= :account_created_at_max
 *   )
 *   AND (
 *     :followers_count_min :: INTEGER IS NULL
 *     OR followers_count >= :followers_count_min
 *   )
 *   AND (
 *     :followers_count_max :: INTEGER IS NULL
 *     OR followers_count <= :followers_count_max
 *   )
 *   AND (
 *     :following_count_min :: INTEGER IS NULL
 *     OR following_count >= :following_count_min
 *   )
 *   AND (
 *     :following_count_max :: INTEGER IS NULL
 *     OR following_count <= :following_count_max
 *   )
 *   AND (
 *     :tweet_count_min :: INTEGER IS NULL
 *     OR tweet_count >= :tweet_count_min
 *   )
 *   AND (
 *     :tweet_count_max :: INTEGER IS NULL
 *     OR tweet_count <= :tweet_count_max
 *   )
 *   AND (
 *     :listed_count_min :: INTEGER IS NULL
 *     OR listed_count >= :listed_count_min
 *   )
 *   AND (
 *     :listed_count_max :: INTEGER IS NULL
 *     OR listed_count <= :listed_count_max
 *   )
 * ORDER BY
 *   (
 *     case
 *       when :sort_column = 'marked_followers_ratio'
 *       and :desc = false then marked_followers_ratio
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'marked_followers_ratio'
 *       and :desc = true then marked_followers_ratio
 *     end
 *   ) desc NULLS LAST,
 *   (
 *     case
 *       when :sort_column = 'marked_followers'
 *       and :desc = false then marked_followers
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'marked_followers'
 *       and :desc = true then marked_followers
 *     end
 *   ) desc NULLS LAST,
 *   (
 *     case
 *       when :sort_column = 'weighted_marked_followers'
 *       and :desc = false then weighted_marked_followers
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'weighted_marked_followers'
 *       and :desc = true then weighted_marked_followers
 *     end
 *   ) desc NULLS LAST,
 *   (
 *     case
 *       when :sort_column = 'account_created_at'
 *       and :desc = false then account_created_at
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'account_created_at'
 *       and :desc = true then account_created_at
 *     end
 *   ) desc NULLS LAST,
 *   (
 *     case
 *       when :sort_column = 'followers_count'
 *       and :desc = false then followers_count
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'followers_count'
 *       and :desc = true then followers_count
 *     end
 *   ) desc NULLS LAST,
 *   (
 *     case
 *       when :sort_column = 'following_count'
 *       and :desc = false then following_count
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'following_count'
 *       and :desc = true then following_count
 *     end
 *   ) desc NULLS LAST,
 *   (
 *     case
 *       when :sort_column = 'tweet_count'
 *       and :desc = false then tweet_count
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'tweet_count'
 *       and :desc = true then tweet_count
 *     end
 *   ) desc NULLS LAST,
 *   (
 *     case
 *       when :sort_column = 'listed_count'
 *       and :desc = false then listed_count
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'listed_count'
 *       and :desc = true then listed_count
 *     end
 *   ) desc NULLS LAST OFFSET :offset ! :: INTEGER
 * LIMIT
 *   :limit ! :: INTEGER
 * ```
 */
export const getAllPopularUserDynamic = new PreparedQuery<IGetAllPopularUserDynamicParams,IGetAllPopularUserDynamicResult>(getAllPopularUserDynamicIR);


