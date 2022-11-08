/** Types generated for queries found in "queries/trending_user.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'GetAllTrendingUser1d' parameters type */
export interface IGetAllTrendingUser1dParams {
  limit: number;
  offset: number;
}

/** 'GetAllTrendingUser1d' return type */
export interface IGetAllTrendingUser1dResult {
  account_created_at: Date | null;
  difference: string | null;
  followers_count: number | null;
  following_count: number | null;
  id: string | null;
  listed_count: number | null;
  marked_followers: string | null;
  marked_followers_ratio: string | null;
  tweet_count: number | null;
  weighted_difference: string | null;
  weighted_marked_followers: string | null;
}

/** 'GetAllTrendingUser1d' query type */
export interface IGetAllTrendingUser1dQuery {
  params: IGetAllTrendingUser1dParams;
  result: IGetAllTrendingUser1dResult;
}

const getAllTrendingUser1dIR: any = {"usedParamSet":{"offset":true,"limit":true},"params":[{"name":"offset","required":true,"transform":{"type":"scalar"},"locs":[{"a":253,"b":261}]},{"name":"limit","required":true,"transform":{"type":"scalar"},"locs":[{"a":282,"b":289}]}],"statement":"SELECT\n  marked_followers_ratio,\n  difference,\n  weighted_difference,\n  id,\n  account_created_at,\n  marked_followers,\n  weighted_marked_followers,\n  followers_count,\n  following_count,\n  tweet_count,\n  listed_count\nFROM\n  public.trending_user_1d OFFSET :offset ! :: INTEGER\nLIMIT\n  :limit ! :: INTEGER"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   marked_followers_ratio,
 *   difference,
 *   weighted_difference,
 *   id,
 *   account_created_at,
 *   marked_followers,
 *   weighted_marked_followers,
 *   followers_count,
 *   following_count,
 *   tweet_count,
 *   listed_count
 * FROM
 *   public.trending_user_1d OFFSET :offset ! :: INTEGER
 * LIMIT
 *   :limit ! :: INTEGER
 * ```
 */
export const getAllTrendingUser1d = new PreparedQuery<IGetAllTrendingUser1dParams,IGetAllTrendingUser1dResult>(getAllTrendingUser1dIR);


/** 'RefreshTrendingUser1dView' parameters type */
export type IRefreshTrendingUser1dViewParams = void;

/** 'RefreshTrendingUser1dView' return type */
export type IRefreshTrendingUser1dViewResult = void;

/** 'RefreshTrendingUser1dView' query type */
export interface IRefreshTrendingUser1dViewQuery {
  params: IRefreshTrendingUser1dViewParams;
  result: IRefreshTrendingUser1dViewResult;
}

const refreshTrendingUser1dViewIR: any = {"usedParamSet":{},"params":[],"statement":"REFRESH MATERIALIZED VIEW public.trending_user_1d"};

/**
 * Query generated from SQL:
 * ```
 * REFRESH MATERIALIZED VIEW public.trending_user_1d
 * ```
 */
export const refreshTrendingUser1dView = new PreparedQuery<IRefreshTrendingUser1dViewParams,IRefreshTrendingUser1dViewResult>(refreshTrendingUser1dViewIR);


/** 'RefreshTrendingUser3dView' parameters type */
export type IRefreshTrendingUser3dViewParams = void;

/** 'RefreshTrendingUser3dView' return type */
export type IRefreshTrendingUser3dViewResult = void;

/** 'RefreshTrendingUser3dView' query type */
export interface IRefreshTrendingUser3dViewQuery {
  params: IRefreshTrendingUser3dViewParams;
  result: IRefreshTrendingUser3dViewResult;
}

const refreshTrendingUser3dViewIR: any = {"usedParamSet":{},"params":[],"statement":"REFRESH MATERIALIZED VIEW public.trending_user_3d"};

/**
 * Query generated from SQL:
 * ```
 * REFRESH MATERIALIZED VIEW public.trending_user_3d
 * ```
 */
export const refreshTrendingUser3dView = new PreparedQuery<IRefreshTrendingUser3dViewParams,IRefreshTrendingUser3dViewResult>(refreshTrendingUser3dViewIR);


/** 'RefreshTrendingUser7dView' parameters type */
export type IRefreshTrendingUser7dViewParams = void;

/** 'RefreshTrendingUser7dView' return type */
export type IRefreshTrendingUser7dViewResult = void;

/** 'RefreshTrendingUser7dView' query type */
export interface IRefreshTrendingUser7dViewQuery {
  params: IRefreshTrendingUser7dViewParams;
  result: IRefreshTrendingUser7dViewResult;
}

const refreshTrendingUser7dViewIR: any = {"usedParamSet":{},"params":[],"statement":"REFRESH MATERIALIZED VIEW public.trending_user_7d"};

/**
 * Query generated from SQL:
 * ```
 * REFRESH MATERIALIZED VIEW public.trending_user_7d
 * ```
 */
export const refreshTrendingUser7dView = new PreparedQuery<IRefreshTrendingUser7dViewParams,IRefreshTrendingUser7dViewResult>(refreshTrendingUser7dViewIR);


/** 'RefreshTrendingUser30dView' parameters type */
export type IRefreshTrendingUser30dViewParams = void;

/** 'RefreshTrendingUser30dView' return type */
export type IRefreshTrendingUser30dViewResult = void;

/** 'RefreshTrendingUser30dView' query type */
export interface IRefreshTrendingUser30dViewQuery {
  params: IRefreshTrendingUser30dViewParams;
  result: IRefreshTrendingUser30dViewResult;
}

const refreshTrendingUser30dViewIR: any = {"usedParamSet":{},"params":[],"statement":"REFRESH MATERIALIZED VIEW public.trending_user_30d"};

/**
 * Query generated from SQL:
 * ```
 * REFRESH MATERIALIZED VIEW public.trending_user_30d
 * ```
 */
export const refreshTrendingUser30dView = new PreparedQuery<IRefreshTrendingUser30dViewParams,IRefreshTrendingUser30dViewResult>(refreshTrendingUser30dViewIR);


/** 'RefreshTrendingUser90dView' parameters type */
export type IRefreshTrendingUser90dViewParams = void;

/** 'RefreshTrendingUser90dView' return type */
export type IRefreshTrendingUser90dViewResult = void;

/** 'RefreshTrendingUser90dView' query type */
export interface IRefreshTrendingUser90dViewQuery {
  params: IRefreshTrendingUser90dViewParams;
  result: IRefreshTrendingUser90dViewResult;
}

const refreshTrendingUser90dViewIR: any = {"usedParamSet":{},"params":[],"statement":"REFRESH MATERIALIZED VIEW public.trending_user_90d"};

/**
 * Query generated from SQL:
 * ```
 * REFRESH MATERIALIZED VIEW public.trending_user_90d
 * ```
 */
export const refreshTrendingUser90dView = new PreparedQuery<IRefreshTrendingUser90dViewParams,IRefreshTrendingUser90dViewResult>(refreshTrendingUser90dViewIR);


/** 'RefreshTrendingUser180dView' parameters type */
export type IRefreshTrendingUser180dViewParams = void;

/** 'RefreshTrendingUser180dView' return type */
export type IRefreshTrendingUser180dViewResult = void;

/** 'RefreshTrendingUser180dView' query type */
export interface IRefreshTrendingUser180dViewQuery {
  params: IRefreshTrendingUser180dViewParams;
  result: IRefreshTrendingUser180dViewResult;
}

const refreshTrendingUser180dViewIR: any = {"usedParamSet":{},"params":[],"statement":"REFRESH MATERIALIZED VIEW public.trending_user_180d"};

/**
 * Query generated from SQL:
 * ```
 * REFRESH MATERIALIZED VIEW public.trending_user_180d
 * ```
 */
export const refreshTrendingUser180dView = new PreparedQuery<IRefreshTrendingUser180dViewParams,IRefreshTrendingUser180dViewResult>(refreshTrendingUser180dViewIR);


/** 'RefreshTrendingUser365dView' parameters type */
export type IRefreshTrendingUser365dViewParams = void;

/** 'RefreshTrendingUser365dView' return type */
export type IRefreshTrendingUser365dViewResult = void;

/** 'RefreshTrendingUser365dView' query type */
export interface IRefreshTrendingUser365dViewQuery {
  params: IRefreshTrendingUser365dViewParams;
  result: IRefreshTrendingUser365dViewResult;
}

const refreshTrendingUser365dViewIR: any = {"usedParamSet":{},"params":[],"statement":"REFRESH MATERIALIZED VIEW public.trending_user_365d"};

/**
 * Query generated from SQL:
 * ```
 * REFRESH MATERIALIZED VIEW public.trending_user_365d
 * ```
 */
export const refreshTrendingUser365dView = new PreparedQuery<IRefreshTrendingUser365dViewParams,IRefreshTrendingUser365dViewResult>(refreshTrendingUser365dViewIR);


/** 'GetAllTrendingUser1dDynamic' parameters type */
export interface IGetAllTrendingUser1dDynamicParams {
  account_created_at_max: Date | null | void;
  account_created_at_min: Date | null | void;
  desc: boolean | null | void;
  difference_max: number | null | void;
  difference_min: number | null | void;
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
  weighted_difference_max: number | null | void;
  weighted_difference_min: number | null | void;
  weighted_marked_followers_max: number | null | void;
  weighted_marked_followers_min: number | null | void;
}

/** 'GetAllTrendingUser1dDynamic' return type */
export interface IGetAllTrendingUser1dDynamicResult {
  account_created_at: Date | null;
  difference: string | null;
  followers_count: number | null;
  following_count: number | null;
  id: string | null;
  listed_count: number | null;
  marked_followers: string | null;
  marked_followers_ratio: string | null;
  max_results: string | null;
  tweet_count: number | null;
  username: string;
  weighted_difference: string | null;
  weighted_marked_followers: string | null;
}

/** 'GetAllTrendingUser1dDynamic' query type */
export interface IGetAllTrendingUser1dDynamicQuery {
  params: IGetAllTrendingUser1dDynamicParams;
  result: IGetAllTrendingUser1dDynamicResult;
}

const getAllTrendingUser1dDynamicIR: any = {"usedParamSet":{"weighted_difference_min":true,"weighted_difference_max":true,"difference_min":true,"difference_max":true,"marked_followers_ratio_min":true,"marked_followers_ratio_max":true,"marked_followers_min":true,"marked_followers_max":true,"weighted_marked_followers_min":true,"weighted_marked_followers_max":true,"account_created_at_min":true,"account_created_at_max":true,"followers_count_min":true,"followers_count_max":true,"following_count_min":true,"following_count_max":true,"tweet_count_min":true,"tweet_count_max":true,"listed_count_min":true,"listed_count_max":true,"sort_column":true,"desc":true,"offset":true,"limit":true},"params":[{"name":"weighted_difference_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":359,"b":382},{"a":433,"b":456}]},{"name":"weighted_difference_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":474,"b":497},{"a":548,"b":571}]},{"name":"difference_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":589,"b":603},{"a":645,"b":659}]},{"name":"difference_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":677,"b":691},{"a":733,"b":747}]},{"name":"marked_followers_ratio_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":765,"b":791},{"a":845,"b":871}]},{"name":"marked_followers_ratio_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":889,"b":915},{"a":969,"b":995}]},{"name":"marked_followers_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1013,"b":1033},{"a":1081,"b":1101}]},{"name":"marked_followers_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1119,"b":1139},{"a":1187,"b":1207}]},{"name":"weighted_marked_followers_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1225,"b":1254},{"a":1311,"b":1340}]},{"name":"weighted_marked_followers_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1358,"b":1387},{"a":1444,"b":1473}]},{"name":"account_created_at_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1491,"b":1513},{"a":1583,"b":1605}]},{"name":"account_created_at_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1623,"b":1645},{"a":1715,"b":1737}]},{"name":"followers_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1755,"b":1774},{"a":1821,"b":1840}]},{"name":"followers_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1858,"b":1877},{"a":1924,"b":1943}]},{"name":"following_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1961,"b":1980},{"a":2027,"b":2046}]},{"name":"following_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2064,"b":2083},{"a":2130,"b":2149}]},{"name":"tweet_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":2167,"b":2182},{"a":2225,"b":2240}]},{"name":"tweet_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2258,"b":2273},{"a":2316,"b":2331}]},{"name":"listed_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":2349,"b":2365},{"a":2409,"b":2425}]},{"name":"listed_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2443,"b":2459},{"a":2503,"b":2519}]},{"name":"sort_column","required":false,"transform":{"type":"scalar"},"locs":[{"a":2558,"b":2569},{"a":2685,"b":2696},{"a":2823,"b":2834},{"a":2932,"b":2943},{"a":3052,"b":3063},{"a":3185,"b":3196},{"a":3329,"b":3340},{"a":3450,"b":3461},{"a":3582,"b":3593},{"a":3721,"b":3732},{"a":3871,"b":3882},{"a":3996,"b":4007},{"a":4132,"b":4143},{"a":4251,"b":4262},{"a":4381,"b":4392},{"a":4500,"b":4511},{"a":4630,"b":4641},{"a":4741,"b":4752},{"a":4863,"b":4874},{"a":4976,"b":4987}]},{"name":"desc","required":false,"transform":{"type":"scalar"},"locs":[{"a":2605,"b":2609},{"a":2732,"b":2736},{"a":2861,"b":2865},{"a":2970,"b":2974},{"a":3102,"b":3106},{"a":3235,"b":3239},{"a":3373,"b":3377},{"a":3494,"b":3498},{"a":3635,"b":3639},{"a":3774,"b":3778},{"a":3917,"b":3921},{"a":4042,"b":4046},{"a":4175,"b":4179},{"a":4294,"b":4298},{"a":4424,"b":4428},{"a":4543,"b":4547},{"a":4669,"b":4673},{"a":4780,"b":4784},{"a":4903,"b":4907},{"a":5016,"b":5020}]},{"name":"offset","required":true,"transform":{"type":"scalar"},"locs":[{"a":5082,"b":5090}]},{"name":"limit","required":true,"transform":{"type":"scalar"},"locs":[{"a":5111,"b":5118}]}],"statement":"SELECT\n  marked_followers_ratio,\n  difference,\n  weighted_difference,\n  tu.id,\n  u.username,\n  account_created_at,\n  marked_followers,\n  weighted_marked_followers,\n  followers_count,\n  following_count,\n  tweet_count,\n  listed_count,\n  count(*) OVER() AS max_results\nFROM\n  public.trending_user_1d tu\n  LEFT JOIN public.\"TUser\" u ON tu.id = u.id\nWHERE\n  (\n    :weighted_difference_min :: INTEGER IS NULL\n    OR weighted_difference >= :weighted_difference_min\n  )\n  AND (\n    :weighted_difference_max :: INTEGER IS NULL\n    OR weighted_difference <= :weighted_difference_max\n  )\n  AND (\n    :difference_min :: INTEGER IS NULL\n    OR difference >= :difference_min\n  )\n  AND (\n    :difference_max :: INTEGER IS NULL\n    OR difference <= :difference_max\n  )\n  AND (\n    :marked_followers_ratio_min :: INTEGER IS NULL\n    OR marked_followers_ratio >= :marked_followers_ratio_min\n  )\n  AND (\n    :marked_followers_ratio_max :: INTEGER IS NULL\n    OR marked_followers_ratio <= :marked_followers_ratio_max\n  )\n  AND (\n    :marked_followers_min :: INTEGER IS NULL\n    OR marked_followers >= :marked_followers_min\n  )\n  AND (\n    :marked_followers_max :: INTEGER IS NULL\n    OR marked_followers <= :marked_followers_max\n  )\n  AND (\n    :weighted_marked_followers_min :: INTEGER IS NULL\n    OR weighted_marked_followers >= :weighted_marked_followers_min\n  )\n  AND (\n    :weighted_marked_followers_max :: INTEGER IS NULL\n    OR weighted_marked_followers <= :weighted_marked_followers_max\n  )\n  AND (\n    :account_created_at_min :: timestamp without time zone IS NULL\n    OR account_created_at >= :account_created_at_min\n  )\n  AND (\n    :account_created_at_max :: timestamp without time zone IS NULL\n    OR account_created_at <= :account_created_at_max\n  )\n  AND (\n    :followers_count_min :: INTEGER IS NULL\n    OR followers_count >= :followers_count_min\n  )\n  AND (\n    :followers_count_max :: INTEGER IS NULL\n    OR followers_count <= :followers_count_max\n  )\n  AND (\n    :following_count_min :: INTEGER IS NULL\n    OR following_count >= :following_count_min\n  )\n  AND (\n    :following_count_max :: INTEGER IS NULL\n    OR following_count <= :following_count_max\n  )\n  AND (\n    :tweet_count_min :: INTEGER IS NULL\n    OR tweet_count >= :tweet_count_min\n  )\n  AND (\n    :tweet_count_max :: INTEGER IS NULL\n    OR tweet_count <= :tweet_count_max\n  )\n  AND (\n    :listed_count_min :: INTEGER IS NULL\n    OR listed_count >= :listed_count_min\n  )\n  AND (\n    :listed_count_max :: INTEGER IS NULL\n    OR listed_count <= :listed_count_max\n  )\nORDER BY\n  (\n    case\n      when :sort_column = 'weighted_difference'\n      and :desc = false then weighted_difference\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'weighted_difference'\n      and :desc = true then weighted_difference\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'difference'\n      and :desc = false then difference\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'difference'\n      and :desc = true then difference\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'marked_followers_ratio'\n      and :desc = false then marked_followers_ratio\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'marked_followers_ratio'\n      and :desc = true then marked_followers_ratio\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'marked_followers'\n      and :desc = false then marked_followers\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'marked_followers'\n      and :desc = true then marked_followers\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'weighted_marked_followers'\n      and :desc = false then weighted_marked_followers\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'weighted_marked_followers'\n      and :desc = true then weighted_marked_followers\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'account_created_at'\n      and :desc = false then account_created_at\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'account_created_at'\n      and :desc = true then account_created_at\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'followers_count'\n      and :desc = false then followers_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'followers_count'\n      and :desc = true then followers_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'following_count'\n      and :desc = false then following_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'following_count'\n      and :desc = true then following_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'tweet_count'\n      and :desc = false then tweet_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'tweet_count'\n      and :desc = true then tweet_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'listed_count'\n      and :desc = false then listed_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'listed_count'\n      and :desc = true then listed_count\n    end\n  ) desc NULLS LAST OFFSET :offset ! :: INTEGER\nLIMIT\n  :limit ! :: INTEGER"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   marked_followers_ratio,
 *   difference,
 *   weighted_difference,
 *   tu.id,
 *   u.username,
 *   account_created_at,
 *   marked_followers,
 *   weighted_marked_followers,
 *   followers_count,
 *   following_count,
 *   tweet_count,
 *   listed_count,
 *   count(*) OVER() AS max_results
 * FROM
 *   public.trending_user_1d tu
 *   LEFT JOIN public."TUser" u ON tu.id = u.id
 * WHERE
 *   (
 *     :weighted_difference_min :: INTEGER IS NULL
 *     OR weighted_difference >= :weighted_difference_min
 *   )
 *   AND (
 *     :weighted_difference_max :: INTEGER IS NULL
 *     OR weighted_difference <= :weighted_difference_max
 *   )
 *   AND (
 *     :difference_min :: INTEGER IS NULL
 *     OR difference >= :difference_min
 *   )
 *   AND (
 *     :difference_max :: INTEGER IS NULL
 *     OR difference <= :difference_max
 *   )
 *   AND (
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
 *       when :sort_column = 'weighted_difference'
 *       and :desc = false then weighted_difference
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'weighted_difference'
 *       and :desc = true then weighted_difference
 *     end
 *   ) desc NULLS LAST,
 *   (
 *     case
 *       when :sort_column = 'difference'
 *       and :desc = false then difference
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'difference'
 *       and :desc = true then difference
 *     end
 *   ) desc NULLS LAST,
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
export const getAllTrendingUser1dDynamic = new PreparedQuery<IGetAllTrendingUser1dDynamicParams,IGetAllTrendingUser1dDynamicResult>(getAllTrendingUser1dDynamicIR);


/** 'GetAllTrendingUser3d' parameters type */
export interface IGetAllTrendingUser3dParams {
  limit: number;
  offset: number;
}

/** 'GetAllTrendingUser3d' return type */
export interface IGetAllTrendingUser3dResult {
  account_created_at: Date | null;
  difference: string | null;
  followers_count: number | null;
  following_count: number | null;
  id: string | null;
  listed_count: number | null;
  marked_followers: string | null;
  marked_followers_ratio: string | null;
  tweet_count: number | null;
  weighted_difference: string | null;
  weighted_marked_followers: string | null;
}

/** 'GetAllTrendingUser3d' query type */
export interface IGetAllTrendingUser3dQuery {
  params: IGetAllTrendingUser3dParams;
  result: IGetAllTrendingUser3dResult;
}

const getAllTrendingUser3dIR: any = {"usedParamSet":{"offset":true,"limit":true},"params":[{"name":"offset","required":true,"transform":{"type":"scalar"},"locs":[{"a":253,"b":261}]},{"name":"limit","required":true,"transform":{"type":"scalar"},"locs":[{"a":282,"b":289}]}],"statement":"SELECT\n  marked_followers_ratio,\n  difference,\n  weighted_difference,\n  id,\n  account_created_at,\n  marked_followers,\n  weighted_marked_followers,\n  followers_count,\n  following_count,\n  tweet_count,\n  listed_count\nFROM\n  public.trending_user_3d OFFSET :offset ! :: INTEGER\nLIMIT\n  :limit ! :: INTEGER"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   marked_followers_ratio,
 *   difference,
 *   weighted_difference,
 *   id,
 *   account_created_at,
 *   marked_followers,
 *   weighted_marked_followers,
 *   followers_count,
 *   following_count,
 *   tweet_count,
 *   listed_count
 * FROM
 *   public.trending_user_3d OFFSET :offset ! :: INTEGER
 * LIMIT
 *   :limit ! :: INTEGER
 * ```
 */
export const getAllTrendingUser3d = new PreparedQuery<IGetAllTrendingUser3dParams,IGetAllTrendingUser3dResult>(getAllTrendingUser3dIR);


/** 'GetAllTrendingUser3dDynamic' parameters type */
export interface IGetAllTrendingUser3dDynamicParams {
  account_created_at_max: Date | null | void;
  account_created_at_min: Date | null | void;
  desc: boolean | null | void;
  difference_max: number | null | void;
  difference_min: number | null | void;
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
  weighted_difference_max: number | null | void;
  weighted_difference_min: number | null | void;
  weighted_marked_followers_max: number | null | void;
  weighted_marked_followers_min: number | null | void;
}

/** 'GetAllTrendingUser3dDynamic' return type */
export interface IGetAllTrendingUser3dDynamicResult {
  account_created_at: Date | null;
  difference: string | null;
  followers_count: number | null;
  following_count: number | null;
  id: string | null;
  listed_count: number | null;
  marked_followers: string | null;
  marked_followers_ratio: string | null;
  max_results: string | null;
  tweet_count: number | null;
  username: string;
  weighted_difference: string | null;
  weighted_marked_followers: string | null;
}

/** 'GetAllTrendingUser3dDynamic' query type */
export interface IGetAllTrendingUser3dDynamicQuery {
  params: IGetAllTrendingUser3dDynamicParams;
  result: IGetAllTrendingUser3dDynamicResult;
}

const getAllTrendingUser3dDynamicIR: any = {"usedParamSet":{"weighted_difference_min":true,"weighted_difference_max":true,"difference_min":true,"difference_max":true,"marked_followers_ratio_min":true,"marked_followers_ratio_max":true,"marked_followers_min":true,"marked_followers_max":true,"weighted_marked_followers_min":true,"weighted_marked_followers_max":true,"account_created_at_min":true,"account_created_at_max":true,"followers_count_min":true,"followers_count_max":true,"following_count_min":true,"following_count_max":true,"tweet_count_min":true,"tweet_count_max":true,"listed_count_min":true,"listed_count_max":true,"sort_column":true,"desc":true,"offset":true,"limit":true},"params":[{"name":"weighted_difference_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":359,"b":382},{"a":433,"b":456}]},{"name":"weighted_difference_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":474,"b":497},{"a":548,"b":571}]},{"name":"difference_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":589,"b":603},{"a":645,"b":659}]},{"name":"difference_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":677,"b":691},{"a":733,"b":747}]},{"name":"marked_followers_ratio_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":765,"b":791},{"a":845,"b":871}]},{"name":"marked_followers_ratio_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":889,"b":915},{"a":969,"b":995}]},{"name":"marked_followers_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1013,"b":1033},{"a":1081,"b":1101}]},{"name":"marked_followers_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1119,"b":1139},{"a":1187,"b":1207}]},{"name":"weighted_marked_followers_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1225,"b":1254},{"a":1311,"b":1340}]},{"name":"weighted_marked_followers_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1358,"b":1387},{"a":1444,"b":1473}]},{"name":"account_created_at_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1491,"b":1513},{"a":1583,"b":1605}]},{"name":"account_created_at_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1623,"b":1645},{"a":1715,"b":1737}]},{"name":"followers_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1755,"b":1774},{"a":1821,"b":1840}]},{"name":"followers_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1858,"b":1877},{"a":1924,"b":1943}]},{"name":"following_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1961,"b":1980},{"a":2027,"b":2046}]},{"name":"following_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2064,"b":2083},{"a":2130,"b":2149}]},{"name":"tweet_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":2167,"b":2182},{"a":2225,"b":2240}]},{"name":"tweet_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2258,"b":2273},{"a":2316,"b":2331}]},{"name":"listed_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":2349,"b":2365},{"a":2409,"b":2425}]},{"name":"listed_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2443,"b":2459},{"a":2503,"b":2519}]},{"name":"sort_column","required":false,"transform":{"type":"scalar"},"locs":[{"a":2558,"b":2569},{"a":2685,"b":2696},{"a":2823,"b":2834},{"a":2932,"b":2943},{"a":3052,"b":3063},{"a":3185,"b":3196},{"a":3329,"b":3340},{"a":3450,"b":3461},{"a":3582,"b":3593},{"a":3721,"b":3732},{"a":3871,"b":3882},{"a":3996,"b":4007},{"a":4132,"b":4143},{"a":4251,"b":4262},{"a":4381,"b":4392},{"a":4500,"b":4511},{"a":4630,"b":4641},{"a":4741,"b":4752},{"a":4863,"b":4874},{"a":4976,"b":4987}]},{"name":"desc","required":false,"transform":{"type":"scalar"},"locs":[{"a":2605,"b":2609},{"a":2732,"b":2736},{"a":2861,"b":2865},{"a":2970,"b":2974},{"a":3102,"b":3106},{"a":3235,"b":3239},{"a":3373,"b":3377},{"a":3494,"b":3498},{"a":3635,"b":3639},{"a":3774,"b":3778},{"a":3917,"b":3921},{"a":4042,"b":4046},{"a":4175,"b":4179},{"a":4294,"b":4298},{"a":4424,"b":4428},{"a":4543,"b":4547},{"a":4669,"b":4673},{"a":4780,"b":4784},{"a":4903,"b":4907},{"a":5016,"b":5020}]},{"name":"offset","required":true,"transform":{"type":"scalar"},"locs":[{"a":5082,"b":5090}]},{"name":"limit","required":true,"transform":{"type":"scalar"},"locs":[{"a":5111,"b":5118}]}],"statement":"SELECT\n  marked_followers_ratio,\n  difference,\n  weighted_difference,\n  tu.id,\n  u.username,\n  account_created_at,\n  marked_followers,\n  weighted_marked_followers,\n  followers_count,\n  following_count,\n  tweet_count,\n  listed_count,\n  count(*) OVER() AS max_results\nFROM\n  public.trending_user_3d tu\n  LEFT JOIN public.\"TUser\" u ON tu.id = u.id\nWHERE\n  (\n    :weighted_difference_min :: INTEGER IS NULL\n    OR weighted_difference >= :weighted_difference_min\n  )\n  AND (\n    :weighted_difference_max :: INTEGER IS NULL\n    OR weighted_difference <= :weighted_difference_max\n  )\n  AND (\n    :difference_min :: INTEGER IS NULL\n    OR difference >= :difference_min\n  )\n  AND (\n    :difference_max :: INTEGER IS NULL\n    OR difference <= :difference_max\n  )\n  AND (\n    :marked_followers_ratio_min :: INTEGER IS NULL\n    OR marked_followers_ratio >= :marked_followers_ratio_min\n  )\n  AND (\n    :marked_followers_ratio_max :: INTEGER IS NULL\n    OR marked_followers_ratio <= :marked_followers_ratio_max\n  )\n  AND (\n    :marked_followers_min :: INTEGER IS NULL\n    OR marked_followers >= :marked_followers_min\n  )\n  AND (\n    :marked_followers_max :: INTEGER IS NULL\n    OR marked_followers <= :marked_followers_max\n  )\n  AND (\n    :weighted_marked_followers_min :: INTEGER IS NULL\n    OR weighted_marked_followers >= :weighted_marked_followers_min\n  )\n  AND (\n    :weighted_marked_followers_max :: INTEGER IS NULL\n    OR weighted_marked_followers <= :weighted_marked_followers_max\n  )\n  AND (\n    :account_created_at_min :: timestamp without time zone IS NULL\n    OR account_created_at >= :account_created_at_min\n  )\n  AND (\n    :account_created_at_max :: timestamp without time zone IS NULL\n    OR account_created_at <= :account_created_at_max\n  )\n  AND (\n    :followers_count_min :: INTEGER IS NULL\n    OR followers_count >= :followers_count_min\n  )\n  AND (\n    :followers_count_max :: INTEGER IS NULL\n    OR followers_count <= :followers_count_max\n  )\n  AND (\n    :following_count_min :: INTEGER IS NULL\n    OR following_count >= :following_count_min\n  )\n  AND (\n    :following_count_max :: INTEGER IS NULL\n    OR following_count <= :following_count_max\n  )\n  AND (\n    :tweet_count_min :: INTEGER IS NULL\n    OR tweet_count >= :tweet_count_min\n  )\n  AND (\n    :tweet_count_max :: INTEGER IS NULL\n    OR tweet_count <= :tweet_count_max\n  )\n  AND (\n    :listed_count_min :: INTEGER IS NULL\n    OR listed_count >= :listed_count_min\n  )\n  AND (\n    :listed_count_max :: INTEGER IS NULL\n    OR listed_count <= :listed_count_max\n  )\nORDER BY\n  (\n    case\n      when :sort_column = 'weighted_difference'\n      and :desc = false then weighted_difference\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'weighted_difference'\n      and :desc = true then weighted_difference\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'difference'\n      and :desc = false then difference\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'difference'\n      and :desc = true then difference\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'marked_followers_ratio'\n      and :desc = false then marked_followers_ratio\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'marked_followers_ratio'\n      and :desc = true then marked_followers_ratio\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'marked_followers'\n      and :desc = false then marked_followers\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'marked_followers'\n      and :desc = true then marked_followers\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'weighted_marked_followers'\n      and :desc = false then weighted_marked_followers\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'weighted_marked_followers'\n      and :desc = true then weighted_marked_followers\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'account_created_at'\n      and :desc = false then account_created_at\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'account_created_at'\n      and :desc = true then account_created_at\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'followers_count'\n      and :desc = false then followers_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'followers_count'\n      and :desc = true then followers_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'following_count'\n      and :desc = false then following_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'following_count'\n      and :desc = true then following_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'tweet_count'\n      and :desc = false then tweet_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'tweet_count'\n      and :desc = true then tweet_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'listed_count'\n      and :desc = false then listed_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'listed_count'\n      and :desc = true then listed_count\n    end\n  ) desc NULLS LAST OFFSET :offset ! :: INTEGER\nLIMIT\n  :limit ! :: INTEGER"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   marked_followers_ratio,
 *   difference,
 *   weighted_difference,
 *   tu.id,
 *   u.username,
 *   account_created_at,
 *   marked_followers,
 *   weighted_marked_followers,
 *   followers_count,
 *   following_count,
 *   tweet_count,
 *   listed_count,
 *   count(*) OVER() AS max_results
 * FROM
 *   public.trending_user_3d tu
 *   LEFT JOIN public."TUser" u ON tu.id = u.id
 * WHERE
 *   (
 *     :weighted_difference_min :: INTEGER IS NULL
 *     OR weighted_difference >= :weighted_difference_min
 *   )
 *   AND (
 *     :weighted_difference_max :: INTEGER IS NULL
 *     OR weighted_difference <= :weighted_difference_max
 *   )
 *   AND (
 *     :difference_min :: INTEGER IS NULL
 *     OR difference >= :difference_min
 *   )
 *   AND (
 *     :difference_max :: INTEGER IS NULL
 *     OR difference <= :difference_max
 *   )
 *   AND (
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
 *       when :sort_column = 'weighted_difference'
 *       and :desc = false then weighted_difference
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'weighted_difference'
 *       and :desc = true then weighted_difference
 *     end
 *   ) desc NULLS LAST,
 *   (
 *     case
 *       when :sort_column = 'difference'
 *       and :desc = false then difference
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'difference'
 *       and :desc = true then difference
 *     end
 *   ) desc NULLS LAST,
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
export const getAllTrendingUser3dDynamic = new PreparedQuery<IGetAllTrendingUser3dDynamicParams,IGetAllTrendingUser3dDynamicResult>(getAllTrendingUser3dDynamicIR);


/** 'GetAllTrendingUser7d' parameters type */
export type IGetAllTrendingUser7dParams = void;

/** 'GetAllTrendingUser7d' return type */
export interface IGetAllTrendingUser7dResult {
  account_created_at: Date | null;
  difference: string | null;
  followers_count: number | null;
  following_count: number | null;
  id: string | null;
  listed_count: number | null;
  marked_followers: string | null;
  marked_followers_ratio: string | null;
  tweet_count: number | null;
  weighted_difference: string | null;
  weighted_marked_followers: string | null;
}

/** 'GetAllTrendingUser7d' query type */
export interface IGetAllTrendingUser7dQuery {
  params: IGetAllTrendingUser7dParams;
  result: IGetAllTrendingUser7dResult;
}

const getAllTrendingUser7dIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT\n  marked_followers_ratio,\n  difference,\n  weighted_difference,\n  id,\n  account_created_at,\n  marked_followers,\n  weighted_marked_followers,\n  followers_count,\n  following_count,\n  tweet_count,\n  listed_count\nFROM\n  public.trending_user_7d"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   marked_followers_ratio,
 *   difference,
 *   weighted_difference,
 *   id,
 *   account_created_at,
 *   marked_followers,
 *   weighted_marked_followers,
 *   followers_count,
 *   following_count,
 *   tweet_count,
 *   listed_count
 * FROM
 *   public.trending_user_7d
 * ```
 */
export const getAllTrendingUser7d = new PreparedQuery<IGetAllTrendingUser7dParams,IGetAllTrendingUser7dResult>(getAllTrendingUser7dIR);


/** 'GetAllTrendingUser7dDynamic' parameters type */
export interface IGetAllTrendingUser7dDynamicParams {
  account_created_at_max: Date | null | void;
  account_created_at_min: Date | null | void;
  desc: boolean | null | void;
  difference_max: number | null | void;
  difference_min: number | null | void;
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
  weighted_difference_max: number | null | void;
  weighted_difference_min: number | null | void;
  weighted_marked_followers_max: number | null | void;
  weighted_marked_followers_min: number | null | void;
}

/** 'GetAllTrendingUser7dDynamic' return type */
export interface IGetAllTrendingUser7dDynamicResult {
  account_created_at: Date | null;
  difference: string | null;
  followers_count: number | null;
  following_count: number | null;
  id: string | null;
  listed_count: number | null;
  marked_followers: string | null;
  marked_followers_ratio: string | null;
  max_results: string | null;
  tweet_count: number | null;
  username: string;
  weighted_difference: string | null;
  weighted_marked_followers: string | null;
}

/** 'GetAllTrendingUser7dDynamic' query type */
export interface IGetAllTrendingUser7dDynamicQuery {
  params: IGetAllTrendingUser7dDynamicParams;
  result: IGetAllTrendingUser7dDynamicResult;
}

const getAllTrendingUser7dDynamicIR: any = {"usedParamSet":{"weighted_difference_min":true,"weighted_difference_max":true,"difference_min":true,"difference_max":true,"marked_followers_ratio_min":true,"marked_followers_ratio_max":true,"marked_followers_min":true,"marked_followers_max":true,"weighted_marked_followers_min":true,"weighted_marked_followers_max":true,"account_created_at_min":true,"account_created_at_max":true,"followers_count_min":true,"followers_count_max":true,"following_count_min":true,"following_count_max":true,"tweet_count_min":true,"tweet_count_max":true,"listed_count_min":true,"listed_count_max":true,"sort_column":true,"desc":true,"offset":true,"limit":true},"params":[{"name":"weighted_difference_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":359,"b":382},{"a":433,"b":456}]},{"name":"weighted_difference_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":474,"b":497},{"a":548,"b":571}]},{"name":"difference_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":589,"b":603},{"a":645,"b":659}]},{"name":"difference_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":677,"b":691},{"a":733,"b":747}]},{"name":"marked_followers_ratio_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":765,"b":791},{"a":845,"b":871}]},{"name":"marked_followers_ratio_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":889,"b":915},{"a":969,"b":995}]},{"name":"marked_followers_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1013,"b":1033},{"a":1081,"b":1101}]},{"name":"marked_followers_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1119,"b":1139},{"a":1187,"b":1207}]},{"name":"weighted_marked_followers_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1225,"b":1254},{"a":1311,"b":1340}]},{"name":"weighted_marked_followers_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1358,"b":1387},{"a":1444,"b":1473}]},{"name":"account_created_at_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1491,"b":1513},{"a":1583,"b":1605}]},{"name":"account_created_at_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1623,"b":1645},{"a":1715,"b":1737}]},{"name":"followers_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1755,"b":1774},{"a":1821,"b":1840}]},{"name":"followers_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1858,"b":1877},{"a":1924,"b":1943}]},{"name":"following_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1961,"b":1980},{"a":2027,"b":2046}]},{"name":"following_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2064,"b":2083},{"a":2130,"b":2149}]},{"name":"tweet_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":2167,"b":2182},{"a":2225,"b":2240}]},{"name":"tweet_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2258,"b":2273},{"a":2316,"b":2331}]},{"name":"listed_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":2349,"b":2365},{"a":2409,"b":2425}]},{"name":"listed_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2443,"b":2459},{"a":2503,"b":2519}]},{"name":"sort_column","required":false,"transform":{"type":"scalar"},"locs":[{"a":2558,"b":2569},{"a":2685,"b":2696},{"a":2823,"b":2834},{"a":2932,"b":2943},{"a":3052,"b":3063},{"a":3185,"b":3196},{"a":3329,"b":3340},{"a":3450,"b":3461},{"a":3582,"b":3593},{"a":3721,"b":3732},{"a":3871,"b":3882},{"a":3996,"b":4007},{"a":4132,"b":4143},{"a":4251,"b":4262},{"a":4381,"b":4392},{"a":4500,"b":4511},{"a":4630,"b":4641},{"a":4741,"b":4752},{"a":4863,"b":4874},{"a":4976,"b":4987}]},{"name":"desc","required":false,"transform":{"type":"scalar"},"locs":[{"a":2605,"b":2609},{"a":2732,"b":2736},{"a":2861,"b":2865},{"a":2970,"b":2974},{"a":3102,"b":3106},{"a":3235,"b":3239},{"a":3373,"b":3377},{"a":3494,"b":3498},{"a":3635,"b":3639},{"a":3774,"b":3778},{"a":3917,"b":3921},{"a":4042,"b":4046},{"a":4175,"b":4179},{"a":4294,"b":4298},{"a":4424,"b":4428},{"a":4543,"b":4547},{"a":4669,"b":4673},{"a":4780,"b":4784},{"a":4903,"b":4907},{"a":5016,"b":5020}]},{"name":"offset","required":true,"transform":{"type":"scalar"},"locs":[{"a":5082,"b":5090}]},{"name":"limit","required":true,"transform":{"type":"scalar"},"locs":[{"a":5111,"b":5118}]}],"statement":"SELECT\n  marked_followers_ratio,\n  difference,\n  weighted_difference,\n  tu.id,\n  u.username,\n  account_created_at,\n  marked_followers,\n  weighted_marked_followers,\n  followers_count,\n  following_count,\n  tweet_count,\n  listed_count,\n  count(*) OVER() AS max_results\nFROM\n  public.trending_user_7d tu\n  LEFT JOIN public.\"TUser\" u ON tu.id = u.id\nWHERE\n  (\n    :weighted_difference_min :: INTEGER IS NULL\n    OR weighted_difference >= :weighted_difference_min\n  )\n  AND (\n    :weighted_difference_max :: INTEGER IS NULL\n    OR weighted_difference <= :weighted_difference_max\n  )\n  AND (\n    :difference_min :: INTEGER IS NULL\n    OR difference >= :difference_min\n  )\n  AND (\n    :difference_max :: INTEGER IS NULL\n    OR difference <= :difference_max\n  )\n  AND (\n    :marked_followers_ratio_min :: INTEGER IS NULL\n    OR marked_followers_ratio >= :marked_followers_ratio_min\n  )\n  AND (\n    :marked_followers_ratio_max :: INTEGER IS NULL\n    OR marked_followers_ratio <= :marked_followers_ratio_max\n  )\n  AND (\n    :marked_followers_min :: INTEGER IS NULL\n    OR marked_followers >= :marked_followers_min\n  )\n  AND (\n    :marked_followers_max :: INTEGER IS NULL\n    OR marked_followers <= :marked_followers_max\n  )\n  AND (\n    :weighted_marked_followers_min :: INTEGER IS NULL\n    OR weighted_marked_followers >= :weighted_marked_followers_min\n  )\n  AND (\n    :weighted_marked_followers_max :: INTEGER IS NULL\n    OR weighted_marked_followers <= :weighted_marked_followers_max\n  )\n  AND (\n    :account_created_at_min :: timestamp without time zone IS NULL\n    OR account_created_at >= :account_created_at_min\n  )\n  AND (\n    :account_created_at_max :: timestamp without time zone IS NULL\n    OR account_created_at <= :account_created_at_max\n  )\n  AND (\n    :followers_count_min :: INTEGER IS NULL\n    OR followers_count >= :followers_count_min\n  )\n  AND (\n    :followers_count_max :: INTEGER IS NULL\n    OR followers_count <= :followers_count_max\n  )\n  AND (\n    :following_count_min :: INTEGER IS NULL\n    OR following_count >= :following_count_min\n  )\n  AND (\n    :following_count_max :: INTEGER IS NULL\n    OR following_count <= :following_count_max\n  )\n  AND (\n    :tweet_count_min :: INTEGER IS NULL\n    OR tweet_count >= :tweet_count_min\n  )\n  AND (\n    :tweet_count_max :: INTEGER IS NULL\n    OR tweet_count <= :tweet_count_max\n  )\n  AND (\n    :listed_count_min :: INTEGER IS NULL\n    OR listed_count >= :listed_count_min\n  )\n  AND (\n    :listed_count_max :: INTEGER IS NULL\n    OR listed_count <= :listed_count_max\n  )\nORDER BY\n  (\n    case\n      when :sort_column = 'weighted_difference'\n      and :desc = false then weighted_difference\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'weighted_difference'\n      and :desc = true then weighted_difference\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'difference'\n      and :desc = false then difference\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'difference'\n      and :desc = true then difference\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'marked_followers_ratio'\n      and :desc = false then marked_followers_ratio\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'marked_followers_ratio'\n      and :desc = true then marked_followers_ratio\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'marked_followers'\n      and :desc = false then marked_followers\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'marked_followers'\n      and :desc = true then marked_followers\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'weighted_marked_followers'\n      and :desc = false then weighted_marked_followers\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'weighted_marked_followers'\n      and :desc = true then weighted_marked_followers\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'account_created_at'\n      and :desc = false then account_created_at\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'account_created_at'\n      and :desc = true then account_created_at\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'followers_count'\n      and :desc = false then followers_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'followers_count'\n      and :desc = true then followers_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'following_count'\n      and :desc = false then following_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'following_count'\n      and :desc = true then following_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'tweet_count'\n      and :desc = false then tweet_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'tweet_count'\n      and :desc = true then tweet_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'listed_count'\n      and :desc = false then listed_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'listed_count'\n      and :desc = true then listed_count\n    end\n  ) desc NULLS LAST OFFSET :offset ! :: INTEGER\nLIMIT\n  :limit ! :: INTEGER"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   marked_followers_ratio,
 *   difference,
 *   weighted_difference,
 *   tu.id,
 *   u.username,
 *   account_created_at,
 *   marked_followers,
 *   weighted_marked_followers,
 *   followers_count,
 *   following_count,
 *   tweet_count,
 *   listed_count,
 *   count(*) OVER() AS max_results
 * FROM
 *   public.trending_user_7d tu
 *   LEFT JOIN public."TUser" u ON tu.id = u.id
 * WHERE
 *   (
 *     :weighted_difference_min :: INTEGER IS NULL
 *     OR weighted_difference >= :weighted_difference_min
 *   )
 *   AND (
 *     :weighted_difference_max :: INTEGER IS NULL
 *     OR weighted_difference <= :weighted_difference_max
 *   )
 *   AND (
 *     :difference_min :: INTEGER IS NULL
 *     OR difference >= :difference_min
 *   )
 *   AND (
 *     :difference_max :: INTEGER IS NULL
 *     OR difference <= :difference_max
 *   )
 *   AND (
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
 *       when :sort_column = 'weighted_difference'
 *       and :desc = false then weighted_difference
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'weighted_difference'
 *       and :desc = true then weighted_difference
 *     end
 *   ) desc NULLS LAST,
 *   (
 *     case
 *       when :sort_column = 'difference'
 *       and :desc = false then difference
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'difference'
 *       and :desc = true then difference
 *     end
 *   ) desc NULLS LAST,
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
export const getAllTrendingUser7dDynamic = new PreparedQuery<IGetAllTrendingUser7dDynamicParams,IGetAllTrendingUser7dDynamicResult>(getAllTrendingUser7dDynamicIR);


/** 'GetAllTrendingUser30d' parameters type */
export interface IGetAllTrendingUser30dParams {
  limit: number;
  offset: number;
}

/** 'GetAllTrendingUser30d' return type */
export interface IGetAllTrendingUser30dResult {
  account_created_at: Date | null;
  difference: string | null;
  followers_count: number | null;
  following_count: number | null;
  id: string | null;
  listed_count: number | null;
  marked_followers: string | null;
  marked_followers_ratio: string | null;
  tweet_count: number | null;
  weighted_difference: string | null;
  weighted_marked_followers: string | null;
}

/** 'GetAllTrendingUser30d' query type */
export interface IGetAllTrendingUser30dQuery {
  params: IGetAllTrendingUser30dParams;
  result: IGetAllTrendingUser30dResult;
}

const getAllTrendingUser30dIR: any = {"usedParamSet":{"offset":true,"limit":true},"params":[{"name":"offset","required":true,"transform":{"type":"scalar"},"locs":[{"a":254,"b":262}]},{"name":"limit","required":true,"transform":{"type":"scalar"},"locs":[{"a":283,"b":290}]}],"statement":"SELECT\n  marked_followers_ratio,\n  difference,\n  weighted_difference,\n  id,\n  account_created_at,\n  marked_followers,\n  weighted_marked_followers,\n  followers_count,\n  following_count,\n  tweet_count,\n  listed_count\nFROM\n  public.trending_user_30d OFFSET :offset ! :: INTEGER\nLIMIT\n  :limit ! :: INTEGER"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   marked_followers_ratio,
 *   difference,
 *   weighted_difference,
 *   id,
 *   account_created_at,
 *   marked_followers,
 *   weighted_marked_followers,
 *   followers_count,
 *   following_count,
 *   tweet_count,
 *   listed_count
 * FROM
 *   public.trending_user_30d OFFSET :offset ! :: INTEGER
 * LIMIT
 *   :limit ! :: INTEGER
 * ```
 */
export const getAllTrendingUser30d = new PreparedQuery<IGetAllTrendingUser30dParams,IGetAllTrendingUser30dResult>(getAllTrendingUser30dIR);


/** 'GetAllTrendingUser30dDynamic' parameters type */
export interface IGetAllTrendingUser30dDynamicParams {
  account_created_at_max: Date | null | void;
  account_created_at_min: Date | null | void;
  desc: boolean | null | void;
  difference_max: number | null | void;
  difference_min: number | null | void;
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
  weighted_difference_max: number | null | void;
  weighted_difference_min: number | null | void;
  weighted_marked_followers_max: number | null | void;
  weighted_marked_followers_min: number | null | void;
}

/** 'GetAllTrendingUser30dDynamic' return type */
export interface IGetAllTrendingUser30dDynamicResult {
  account_created_at: Date | null;
  difference: string | null;
  followers_count: number | null;
  following_count: number | null;
  id: string | null;
  listed_count: number | null;
  marked_followers: string | null;
  marked_followers_ratio: string | null;
  max_results: string | null;
  tweet_count: number | null;
  username: string;
  weighted_difference: string | null;
  weighted_marked_followers: string | null;
}

/** 'GetAllTrendingUser30dDynamic' query type */
export interface IGetAllTrendingUser30dDynamicQuery {
  params: IGetAllTrendingUser30dDynamicParams;
  result: IGetAllTrendingUser30dDynamicResult;
}

const getAllTrendingUser30dDynamicIR: any = {"usedParamSet":{"weighted_difference_min":true,"weighted_difference_max":true,"difference_min":true,"difference_max":true,"marked_followers_ratio_min":true,"marked_followers_ratio_max":true,"marked_followers_min":true,"marked_followers_max":true,"weighted_marked_followers_min":true,"weighted_marked_followers_max":true,"account_created_at_min":true,"account_created_at_max":true,"followers_count_min":true,"followers_count_max":true,"following_count_min":true,"following_count_max":true,"tweet_count_min":true,"tweet_count_max":true,"listed_count_min":true,"listed_count_max":true,"sort_column":true,"desc":true,"offset":true,"limit":true},"params":[{"name":"weighted_difference_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":360,"b":383},{"a":434,"b":457}]},{"name":"weighted_difference_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":475,"b":498},{"a":549,"b":572}]},{"name":"difference_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":590,"b":604},{"a":646,"b":660}]},{"name":"difference_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":678,"b":692},{"a":734,"b":748}]},{"name":"marked_followers_ratio_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":766,"b":792},{"a":846,"b":872}]},{"name":"marked_followers_ratio_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":890,"b":916},{"a":970,"b":996}]},{"name":"marked_followers_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1014,"b":1034},{"a":1082,"b":1102}]},{"name":"marked_followers_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1120,"b":1140},{"a":1188,"b":1208}]},{"name":"weighted_marked_followers_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1226,"b":1255},{"a":1312,"b":1341}]},{"name":"weighted_marked_followers_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1359,"b":1388},{"a":1445,"b":1474}]},{"name":"account_created_at_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1492,"b":1514},{"a":1584,"b":1606}]},{"name":"account_created_at_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1624,"b":1646},{"a":1716,"b":1738}]},{"name":"followers_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1756,"b":1775},{"a":1822,"b":1841}]},{"name":"followers_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1859,"b":1878},{"a":1925,"b":1944}]},{"name":"following_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1962,"b":1981},{"a":2028,"b":2047}]},{"name":"following_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2065,"b":2084},{"a":2131,"b":2150}]},{"name":"tweet_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":2168,"b":2183},{"a":2226,"b":2241}]},{"name":"tweet_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2259,"b":2274},{"a":2317,"b":2332}]},{"name":"listed_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":2350,"b":2366},{"a":2410,"b":2426}]},{"name":"listed_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2444,"b":2460},{"a":2504,"b":2520}]},{"name":"sort_column","required":false,"transform":{"type":"scalar"},"locs":[{"a":2559,"b":2570},{"a":2686,"b":2697},{"a":2824,"b":2835},{"a":2933,"b":2944},{"a":3053,"b":3064},{"a":3186,"b":3197},{"a":3330,"b":3341},{"a":3451,"b":3462},{"a":3583,"b":3594},{"a":3722,"b":3733},{"a":3872,"b":3883},{"a":3997,"b":4008},{"a":4133,"b":4144},{"a":4252,"b":4263},{"a":4382,"b":4393},{"a":4501,"b":4512},{"a":4631,"b":4642},{"a":4742,"b":4753},{"a":4864,"b":4875},{"a":4977,"b":4988}]},{"name":"desc","required":false,"transform":{"type":"scalar"},"locs":[{"a":2606,"b":2610},{"a":2733,"b":2737},{"a":2862,"b":2866},{"a":2971,"b":2975},{"a":3103,"b":3107},{"a":3236,"b":3240},{"a":3374,"b":3378},{"a":3495,"b":3499},{"a":3636,"b":3640},{"a":3775,"b":3779},{"a":3918,"b":3922},{"a":4043,"b":4047},{"a":4176,"b":4180},{"a":4295,"b":4299},{"a":4425,"b":4429},{"a":4544,"b":4548},{"a":4670,"b":4674},{"a":4781,"b":4785},{"a":4904,"b":4908},{"a":5017,"b":5021}]},{"name":"offset","required":true,"transform":{"type":"scalar"},"locs":[{"a":5083,"b":5091}]},{"name":"limit","required":true,"transform":{"type":"scalar"},"locs":[{"a":5112,"b":5119}]}],"statement":"SELECT\n  marked_followers_ratio,\n  difference,\n  weighted_difference,\n  tu.id,\n  u.username,\n  account_created_at,\n  marked_followers,\n  weighted_marked_followers,\n  followers_count,\n  following_count,\n  tweet_count,\n  listed_count,\n  count(*) OVER() AS max_results\nFROM\n  public.trending_user_30d tu\n  LEFT JOIN public.\"TUser\" u ON tu.id = u.id\nWHERE\n  (\n    :weighted_difference_min :: INTEGER IS NULL\n    OR weighted_difference >= :weighted_difference_min\n  )\n  AND (\n    :weighted_difference_max :: INTEGER IS NULL\n    OR weighted_difference <= :weighted_difference_max\n  )\n  AND (\n    :difference_min :: INTEGER IS NULL\n    OR difference >= :difference_min\n  )\n  AND (\n    :difference_max :: INTEGER IS NULL\n    OR difference <= :difference_max\n  )\n  AND (\n    :marked_followers_ratio_min :: INTEGER IS NULL\n    OR marked_followers_ratio >= :marked_followers_ratio_min\n  )\n  AND (\n    :marked_followers_ratio_max :: INTEGER IS NULL\n    OR marked_followers_ratio <= :marked_followers_ratio_max\n  )\n  AND (\n    :marked_followers_min :: INTEGER IS NULL\n    OR marked_followers >= :marked_followers_min\n  )\n  AND (\n    :marked_followers_max :: INTEGER IS NULL\n    OR marked_followers <= :marked_followers_max\n  )\n  AND (\n    :weighted_marked_followers_min :: INTEGER IS NULL\n    OR weighted_marked_followers >= :weighted_marked_followers_min\n  )\n  AND (\n    :weighted_marked_followers_max :: INTEGER IS NULL\n    OR weighted_marked_followers <= :weighted_marked_followers_max\n  )\n  AND (\n    :account_created_at_min :: timestamp without time zone IS NULL\n    OR account_created_at >= :account_created_at_min\n  )\n  AND (\n    :account_created_at_max :: timestamp without time zone IS NULL\n    OR account_created_at <= :account_created_at_max\n  )\n  AND (\n    :followers_count_min :: INTEGER IS NULL\n    OR followers_count >= :followers_count_min\n  )\n  AND (\n    :followers_count_max :: INTEGER IS NULL\n    OR followers_count <= :followers_count_max\n  )\n  AND (\n    :following_count_min :: INTEGER IS NULL\n    OR following_count >= :following_count_min\n  )\n  AND (\n    :following_count_max :: INTEGER IS NULL\n    OR following_count <= :following_count_max\n  )\n  AND (\n    :tweet_count_min :: INTEGER IS NULL\n    OR tweet_count >= :tweet_count_min\n  )\n  AND (\n    :tweet_count_max :: INTEGER IS NULL\n    OR tweet_count <= :tweet_count_max\n  )\n  AND (\n    :listed_count_min :: INTEGER IS NULL\n    OR listed_count >= :listed_count_min\n  )\n  AND (\n    :listed_count_max :: INTEGER IS NULL\n    OR listed_count <= :listed_count_max\n  )\nORDER BY\n  (\n    case\n      when :sort_column = 'weighted_difference'\n      and :desc = false then weighted_difference\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'weighted_difference'\n      and :desc = true then weighted_difference\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'difference'\n      and :desc = false then difference\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'difference'\n      and :desc = true then difference\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'marked_followers_ratio'\n      and :desc = false then marked_followers_ratio\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'marked_followers_ratio'\n      and :desc = true then marked_followers_ratio\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'marked_followers'\n      and :desc = false then marked_followers\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'marked_followers'\n      and :desc = true then marked_followers\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'weighted_marked_followers'\n      and :desc = false then weighted_marked_followers\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'weighted_marked_followers'\n      and :desc = true then weighted_marked_followers\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'account_created_at'\n      and :desc = false then account_created_at\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'account_created_at'\n      and :desc = true then account_created_at\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'followers_count'\n      and :desc = false then followers_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'followers_count'\n      and :desc = true then followers_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'following_count'\n      and :desc = false then following_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'following_count'\n      and :desc = true then following_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'tweet_count'\n      and :desc = false then tweet_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'tweet_count'\n      and :desc = true then tweet_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'listed_count'\n      and :desc = false then listed_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'listed_count'\n      and :desc = true then listed_count\n    end\n  ) desc NULLS LAST OFFSET :offset ! :: INTEGER\nLIMIT\n  :limit ! :: INTEGER"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   marked_followers_ratio,
 *   difference,
 *   weighted_difference,
 *   tu.id,
 *   u.username,
 *   account_created_at,
 *   marked_followers,
 *   weighted_marked_followers,
 *   followers_count,
 *   following_count,
 *   tweet_count,
 *   listed_count,
 *   count(*) OVER() AS max_results
 * FROM
 *   public.trending_user_30d tu
 *   LEFT JOIN public."TUser" u ON tu.id = u.id
 * WHERE
 *   (
 *     :weighted_difference_min :: INTEGER IS NULL
 *     OR weighted_difference >= :weighted_difference_min
 *   )
 *   AND (
 *     :weighted_difference_max :: INTEGER IS NULL
 *     OR weighted_difference <= :weighted_difference_max
 *   )
 *   AND (
 *     :difference_min :: INTEGER IS NULL
 *     OR difference >= :difference_min
 *   )
 *   AND (
 *     :difference_max :: INTEGER IS NULL
 *     OR difference <= :difference_max
 *   )
 *   AND (
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
 *       when :sort_column = 'weighted_difference'
 *       and :desc = false then weighted_difference
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'weighted_difference'
 *       and :desc = true then weighted_difference
 *     end
 *   ) desc NULLS LAST,
 *   (
 *     case
 *       when :sort_column = 'difference'
 *       and :desc = false then difference
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'difference'
 *       and :desc = true then difference
 *     end
 *   ) desc NULLS LAST,
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
export const getAllTrendingUser30dDynamic = new PreparedQuery<IGetAllTrendingUser30dDynamicParams,IGetAllTrendingUser30dDynamicResult>(getAllTrendingUser30dDynamicIR);


/** 'GetAllTrendingUser90d' parameters type */
export type IGetAllTrendingUser90dParams = void;

/** 'GetAllTrendingUser90d' return type */
export interface IGetAllTrendingUser90dResult {
  account_created_at: Date | null;
  difference: string | null;
  followers_count: number | null;
  following_count: number | null;
  id: string | null;
  listed_count: number | null;
  marked_followers: string | null;
  marked_followers_ratio: string | null;
  tweet_count: number | null;
  weighted_difference: string | null;
  weighted_marked_followers: string | null;
}

/** 'GetAllTrendingUser90d' query type */
export interface IGetAllTrendingUser90dQuery {
  params: IGetAllTrendingUser90dParams;
  result: IGetAllTrendingUser90dResult;
}

const getAllTrendingUser90dIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT\n  marked_followers_ratio,\n  difference,\n  weighted_difference,\n  id,\n  account_created_at,\n  marked_followers,\n  weighted_marked_followers,\n  followers_count,\n  following_count,\n  tweet_count,\n  listed_count\nFROM\n  public.trending_user_90d"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   marked_followers_ratio,
 *   difference,
 *   weighted_difference,
 *   id,
 *   account_created_at,
 *   marked_followers,
 *   weighted_marked_followers,
 *   followers_count,
 *   following_count,
 *   tweet_count,
 *   listed_count
 * FROM
 *   public.trending_user_90d
 * ```
 */
export const getAllTrendingUser90d = new PreparedQuery<IGetAllTrendingUser90dParams,IGetAllTrendingUser90dResult>(getAllTrendingUser90dIR);


/** 'GetAllTrendingUser90dDynamic' parameters type */
export interface IGetAllTrendingUser90dDynamicParams {
  account_created_at_max: Date | null | void;
  account_created_at_min: Date | null | void;
  desc: boolean | null | void;
  difference_max: number | null | void;
  difference_min: number | null | void;
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
  weighted_difference_max: number | null | void;
  weighted_difference_min: number | null | void;
  weighted_marked_followers_max: number | null | void;
  weighted_marked_followers_min: number | null | void;
}

/** 'GetAllTrendingUser90dDynamic' return type */
export interface IGetAllTrendingUser90dDynamicResult {
  account_created_at: Date | null;
  difference: string | null;
  followers_count: number | null;
  following_count: number | null;
  id: string | null;
  listed_count: number | null;
  marked_followers: string | null;
  marked_followers_ratio: string | null;
  max_results: string | null;
  tweet_count: number | null;
  username: string;
  weighted_difference: string | null;
  weighted_marked_followers: string | null;
}

/** 'GetAllTrendingUser90dDynamic' query type */
export interface IGetAllTrendingUser90dDynamicQuery {
  params: IGetAllTrendingUser90dDynamicParams;
  result: IGetAllTrendingUser90dDynamicResult;
}

const getAllTrendingUser90dDynamicIR: any = {"usedParamSet":{"weighted_difference_min":true,"weighted_difference_max":true,"difference_min":true,"difference_max":true,"marked_followers_ratio_min":true,"marked_followers_ratio_max":true,"marked_followers_min":true,"marked_followers_max":true,"weighted_marked_followers_min":true,"weighted_marked_followers_max":true,"account_created_at_min":true,"account_created_at_max":true,"followers_count_min":true,"followers_count_max":true,"following_count_min":true,"following_count_max":true,"tweet_count_min":true,"tweet_count_max":true,"listed_count_min":true,"listed_count_max":true,"sort_column":true,"desc":true,"offset":true,"limit":true},"params":[{"name":"weighted_difference_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":360,"b":383},{"a":434,"b":457}]},{"name":"weighted_difference_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":475,"b":498},{"a":549,"b":572}]},{"name":"difference_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":590,"b":604},{"a":646,"b":660}]},{"name":"difference_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":678,"b":692},{"a":734,"b":748}]},{"name":"marked_followers_ratio_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":766,"b":792},{"a":846,"b":872}]},{"name":"marked_followers_ratio_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":890,"b":916},{"a":970,"b":996}]},{"name":"marked_followers_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1014,"b":1034},{"a":1082,"b":1102}]},{"name":"marked_followers_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1120,"b":1140},{"a":1188,"b":1208}]},{"name":"weighted_marked_followers_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1226,"b":1255},{"a":1312,"b":1341}]},{"name":"weighted_marked_followers_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1359,"b":1388},{"a":1445,"b":1474}]},{"name":"account_created_at_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1492,"b":1514},{"a":1584,"b":1606}]},{"name":"account_created_at_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1624,"b":1646},{"a":1716,"b":1738}]},{"name":"followers_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1756,"b":1775},{"a":1822,"b":1841}]},{"name":"followers_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1859,"b":1878},{"a":1925,"b":1944}]},{"name":"following_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1962,"b":1981},{"a":2028,"b":2047}]},{"name":"following_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2065,"b":2084},{"a":2131,"b":2150}]},{"name":"tweet_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":2168,"b":2183},{"a":2226,"b":2241}]},{"name":"tweet_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2259,"b":2274},{"a":2317,"b":2332}]},{"name":"listed_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":2350,"b":2366},{"a":2410,"b":2426}]},{"name":"listed_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2444,"b":2460},{"a":2504,"b":2520}]},{"name":"sort_column","required":false,"transform":{"type":"scalar"},"locs":[{"a":2559,"b":2570},{"a":2686,"b":2697},{"a":2824,"b":2835},{"a":2933,"b":2944},{"a":3053,"b":3064},{"a":3186,"b":3197},{"a":3330,"b":3341},{"a":3451,"b":3462},{"a":3583,"b":3594},{"a":3722,"b":3733},{"a":3872,"b":3883},{"a":3997,"b":4008},{"a":4133,"b":4144},{"a":4252,"b":4263},{"a":4382,"b":4393},{"a":4501,"b":4512},{"a":4631,"b":4642},{"a":4742,"b":4753},{"a":4864,"b":4875},{"a":4977,"b":4988}]},{"name":"desc","required":false,"transform":{"type":"scalar"},"locs":[{"a":2606,"b":2610},{"a":2733,"b":2737},{"a":2862,"b":2866},{"a":2971,"b":2975},{"a":3103,"b":3107},{"a":3236,"b":3240},{"a":3374,"b":3378},{"a":3495,"b":3499},{"a":3636,"b":3640},{"a":3775,"b":3779},{"a":3918,"b":3922},{"a":4043,"b":4047},{"a":4176,"b":4180},{"a":4295,"b":4299},{"a":4425,"b":4429},{"a":4544,"b":4548},{"a":4670,"b":4674},{"a":4781,"b":4785},{"a":4904,"b":4908},{"a":5017,"b":5021}]},{"name":"offset","required":true,"transform":{"type":"scalar"},"locs":[{"a":5083,"b":5091}]},{"name":"limit","required":true,"transform":{"type":"scalar"},"locs":[{"a":5112,"b":5119}]}],"statement":"SELECT\n  marked_followers_ratio,\n  difference,\n  weighted_difference,\n  tu.id,\n  u.username,\n  account_created_at,\n  marked_followers,\n  weighted_marked_followers,\n  followers_count,\n  following_count,\n  tweet_count,\n  listed_count,\n  count(*) OVER() AS max_results\nFROM\n  public.trending_user_90d tu\n  LEFT JOIN public.\"TUser\" u ON tu.id = u.id\nWHERE\n  (\n    :weighted_difference_min :: INTEGER IS NULL\n    OR weighted_difference >= :weighted_difference_min\n  )\n  AND (\n    :weighted_difference_max :: INTEGER IS NULL\n    OR weighted_difference <= :weighted_difference_max\n  )\n  AND (\n    :difference_min :: INTEGER IS NULL\n    OR difference >= :difference_min\n  )\n  AND (\n    :difference_max :: INTEGER IS NULL\n    OR difference <= :difference_max\n  )\n  AND (\n    :marked_followers_ratio_min :: INTEGER IS NULL\n    OR marked_followers_ratio >= :marked_followers_ratio_min\n  )\n  AND (\n    :marked_followers_ratio_max :: INTEGER IS NULL\n    OR marked_followers_ratio <= :marked_followers_ratio_max\n  )\n  AND (\n    :marked_followers_min :: INTEGER IS NULL\n    OR marked_followers >= :marked_followers_min\n  )\n  AND (\n    :marked_followers_max :: INTEGER IS NULL\n    OR marked_followers <= :marked_followers_max\n  )\n  AND (\n    :weighted_marked_followers_min :: INTEGER IS NULL\n    OR weighted_marked_followers >= :weighted_marked_followers_min\n  )\n  AND (\n    :weighted_marked_followers_max :: INTEGER IS NULL\n    OR weighted_marked_followers <= :weighted_marked_followers_max\n  )\n  AND (\n    :account_created_at_min :: timestamp without time zone IS NULL\n    OR account_created_at >= :account_created_at_min\n  )\n  AND (\n    :account_created_at_max :: timestamp without time zone IS NULL\n    OR account_created_at <= :account_created_at_max\n  )\n  AND (\n    :followers_count_min :: INTEGER IS NULL\n    OR followers_count >= :followers_count_min\n  )\n  AND (\n    :followers_count_max :: INTEGER IS NULL\n    OR followers_count <= :followers_count_max\n  )\n  AND (\n    :following_count_min :: INTEGER IS NULL\n    OR following_count >= :following_count_min\n  )\n  AND (\n    :following_count_max :: INTEGER IS NULL\n    OR following_count <= :following_count_max\n  )\n  AND (\n    :tweet_count_min :: INTEGER IS NULL\n    OR tweet_count >= :tweet_count_min\n  )\n  AND (\n    :tweet_count_max :: INTEGER IS NULL\n    OR tweet_count <= :tweet_count_max\n  )\n  AND (\n    :listed_count_min :: INTEGER IS NULL\n    OR listed_count >= :listed_count_min\n  )\n  AND (\n    :listed_count_max :: INTEGER IS NULL\n    OR listed_count <= :listed_count_max\n  )\nORDER BY\n  (\n    case\n      when :sort_column = 'weighted_difference'\n      and :desc = false then weighted_difference\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'weighted_difference'\n      and :desc = true then weighted_difference\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'difference'\n      and :desc = false then difference\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'difference'\n      and :desc = true then difference\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'marked_followers_ratio'\n      and :desc = false then marked_followers_ratio\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'marked_followers_ratio'\n      and :desc = true then marked_followers_ratio\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'marked_followers'\n      and :desc = false then marked_followers\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'marked_followers'\n      and :desc = true then marked_followers\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'weighted_marked_followers'\n      and :desc = false then weighted_marked_followers\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'weighted_marked_followers'\n      and :desc = true then weighted_marked_followers\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'account_created_at'\n      and :desc = false then account_created_at\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'account_created_at'\n      and :desc = true then account_created_at\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'followers_count'\n      and :desc = false then followers_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'followers_count'\n      and :desc = true then followers_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'following_count'\n      and :desc = false then following_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'following_count'\n      and :desc = true then following_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'tweet_count'\n      and :desc = false then tweet_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'tweet_count'\n      and :desc = true then tweet_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'listed_count'\n      and :desc = false then listed_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'listed_count'\n      and :desc = true then listed_count\n    end\n  ) desc NULLS LAST OFFSET :offset ! :: INTEGER\nLIMIT\n  :limit ! :: INTEGER"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   marked_followers_ratio,
 *   difference,
 *   weighted_difference,
 *   tu.id,
 *   u.username,
 *   account_created_at,
 *   marked_followers,
 *   weighted_marked_followers,
 *   followers_count,
 *   following_count,
 *   tweet_count,
 *   listed_count,
 *   count(*) OVER() AS max_results
 * FROM
 *   public.trending_user_90d tu
 *   LEFT JOIN public."TUser" u ON tu.id = u.id
 * WHERE
 *   (
 *     :weighted_difference_min :: INTEGER IS NULL
 *     OR weighted_difference >= :weighted_difference_min
 *   )
 *   AND (
 *     :weighted_difference_max :: INTEGER IS NULL
 *     OR weighted_difference <= :weighted_difference_max
 *   )
 *   AND (
 *     :difference_min :: INTEGER IS NULL
 *     OR difference >= :difference_min
 *   )
 *   AND (
 *     :difference_max :: INTEGER IS NULL
 *     OR difference <= :difference_max
 *   )
 *   AND (
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
 *       when :sort_column = 'weighted_difference'
 *       and :desc = false then weighted_difference
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'weighted_difference'
 *       and :desc = true then weighted_difference
 *     end
 *   ) desc NULLS LAST,
 *   (
 *     case
 *       when :sort_column = 'difference'
 *       and :desc = false then difference
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'difference'
 *       and :desc = true then difference
 *     end
 *   ) desc NULLS LAST,
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
export const getAllTrendingUser90dDynamic = new PreparedQuery<IGetAllTrendingUser90dDynamicParams,IGetAllTrendingUser90dDynamicResult>(getAllTrendingUser90dDynamicIR);


/** 'GetAllTrendingUser180d' parameters type */
export interface IGetAllTrendingUser180dParams {
  limit: number;
  offset: number;
}

/** 'GetAllTrendingUser180d' return type */
export interface IGetAllTrendingUser180dResult {
  account_created_at: Date | null;
  difference: string | null;
  followers_count: number | null;
  following_count: number | null;
  id: string | null;
  listed_count: number | null;
  marked_followers: string | null;
  marked_followers_ratio: string | null;
  tweet_count: number | null;
  weighted_difference: string | null;
  weighted_marked_followers: string | null;
}

/** 'GetAllTrendingUser180d' query type */
export interface IGetAllTrendingUser180dQuery {
  params: IGetAllTrendingUser180dParams;
  result: IGetAllTrendingUser180dResult;
}

const getAllTrendingUser180dIR: any = {"usedParamSet":{"offset":true,"limit":true},"params":[{"name":"offset","required":true,"transform":{"type":"scalar"},"locs":[{"a":255,"b":263}]},{"name":"limit","required":true,"transform":{"type":"scalar"},"locs":[{"a":284,"b":291}]}],"statement":"SELECT\n  marked_followers_ratio,\n  difference,\n  weighted_difference,\n  id,\n  account_created_at,\n  marked_followers,\n  weighted_marked_followers,\n  followers_count,\n  following_count,\n  tweet_count,\n  listed_count\nFROM\n  public.trending_user_180d OFFSET :offset ! :: INTEGER\nLIMIT\n  :limit ! :: INTEGER"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   marked_followers_ratio,
 *   difference,
 *   weighted_difference,
 *   id,
 *   account_created_at,
 *   marked_followers,
 *   weighted_marked_followers,
 *   followers_count,
 *   following_count,
 *   tweet_count,
 *   listed_count
 * FROM
 *   public.trending_user_180d OFFSET :offset ! :: INTEGER
 * LIMIT
 *   :limit ! :: INTEGER
 * ```
 */
export const getAllTrendingUser180d = new PreparedQuery<IGetAllTrendingUser180dParams,IGetAllTrendingUser180dResult>(getAllTrendingUser180dIR);


/** 'GetAllTrendingUser180dDynamic' parameters type */
export interface IGetAllTrendingUser180dDynamicParams {
  account_created_at_max: Date | null | void;
  account_created_at_min: Date | null | void;
  desc: boolean | null | void;
  difference_max: number | null | void;
  difference_min: number | null | void;
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
  weighted_difference_max: number | null | void;
  weighted_difference_min: number | null | void;
  weighted_marked_followers_max: number | null | void;
  weighted_marked_followers_min: number | null | void;
}

/** 'GetAllTrendingUser180dDynamic' return type */
export interface IGetAllTrendingUser180dDynamicResult {
  account_created_at: Date | null;
  difference: string | null;
  followers_count: number | null;
  following_count: number | null;
  id: string | null;
  listed_count: number | null;
  marked_followers: string | null;
  marked_followers_ratio: string | null;
  max_results: string | null;
  tweet_count: number | null;
  username: string;
  weighted_difference: string | null;
  weighted_marked_followers: string | null;
}

/** 'GetAllTrendingUser180dDynamic' query type */
export interface IGetAllTrendingUser180dDynamicQuery {
  params: IGetAllTrendingUser180dDynamicParams;
  result: IGetAllTrendingUser180dDynamicResult;
}

const getAllTrendingUser180dDynamicIR: any = {"usedParamSet":{"weighted_difference_min":true,"weighted_difference_max":true,"difference_min":true,"difference_max":true,"marked_followers_ratio_min":true,"marked_followers_ratio_max":true,"marked_followers_min":true,"marked_followers_max":true,"weighted_marked_followers_min":true,"weighted_marked_followers_max":true,"account_created_at_min":true,"account_created_at_max":true,"followers_count_min":true,"followers_count_max":true,"following_count_min":true,"following_count_max":true,"tweet_count_min":true,"tweet_count_max":true,"listed_count_min":true,"listed_count_max":true,"sort_column":true,"desc":true,"offset":true,"limit":true},"params":[{"name":"weighted_difference_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":361,"b":384},{"a":435,"b":458}]},{"name":"weighted_difference_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":476,"b":499},{"a":550,"b":573}]},{"name":"difference_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":591,"b":605},{"a":647,"b":661}]},{"name":"difference_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":679,"b":693},{"a":735,"b":749}]},{"name":"marked_followers_ratio_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":767,"b":793},{"a":847,"b":873}]},{"name":"marked_followers_ratio_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":891,"b":917},{"a":971,"b":997}]},{"name":"marked_followers_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1015,"b":1035},{"a":1083,"b":1103}]},{"name":"marked_followers_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1121,"b":1141},{"a":1189,"b":1209}]},{"name":"weighted_marked_followers_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1227,"b":1256},{"a":1313,"b":1342}]},{"name":"weighted_marked_followers_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1360,"b":1389},{"a":1446,"b":1475}]},{"name":"account_created_at_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1493,"b":1515},{"a":1585,"b":1607}]},{"name":"account_created_at_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1625,"b":1647},{"a":1717,"b":1739}]},{"name":"followers_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1757,"b":1776},{"a":1823,"b":1842}]},{"name":"followers_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1860,"b":1879},{"a":1926,"b":1945}]},{"name":"following_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1963,"b":1982},{"a":2029,"b":2048}]},{"name":"following_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2066,"b":2085},{"a":2132,"b":2151}]},{"name":"tweet_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":2169,"b":2184},{"a":2227,"b":2242}]},{"name":"tweet_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2260,"b":2275},{"a":2318,"b":2333}]},{"name":"listed_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":2351,"b":2367},{"a":2411,"b":2427}]},{"name":"listed_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2445,"b":2461},{"a":2505,"b":2521}]},{"name":"sort_column","required":false,"transform":{"type":"scalar"},"locs":[{"a":2560,"b":2571},{"a":2687,"b":2698},{"a":2825,"b":2836},{"a":2934,"b":2945},{"a":3054,"b":3065},{"a":3187,"b":3198},{"a":3331,"b":3342},{"a":3452,"b":3463},{"a":3584,"b":3595},{"a":3723,"b":3734},{"a":3873,"b":3884},{"a":3998,"b":4009},{"a":4134,"b":4145},{"a":4253,"b":4264},{"a":4383,"b":4394},{"a":4502,"b":4513},{"a":4632,"b":4643},{"a":4743,"b":4754},{"a":4865,"b":4876},{"a":4978,"b":4989}]},{"name":"desc","required":false,"transform":{"type":"scalar"},"locs":[{"a":2607,"b":2611},{"a":2734,"b":2738},{"a":2863,"b":2867},{"a":2972,"b":2976},{"a":3104,"b":3108},{"a":3237,"b":3241},{"a":3375,"b":3379},{"a":3496,"b":3500},{"a":3637,"b":3641},{"a":3776,"b":3780},{"a":3919,"b":3923},{"a":4044,"b":4048},{"a":4177,"b":4181},{"a":4296,"b":4300},{"a":4426,"b":4430},{"a":4545,"b":4549},{"a":4671,"b":4675},{"a":4782,"b":4786},{"a":4905,"b":4909},{"a":5018,"b":5022}]},{"name":"offset","required":true,"transform":{"type":"scalar"},"locs":[{"a":5084,"b":5092}]},{"name":"limit","required":true,"transform":{"type":"scalar"},"locs":[{"a":5113,"b":5120}]}],"statement":"SELECT\n  marked_followers_ratio,\n  difference,\n  weighted_difference,\n  tu.id,\n  u.username,\n  account_created_at,\n  marked_followers,\n  weighted_marked_followers,\n  followers_count,\n  following_count,\n  tweet_count,\n  listed_count,\n  count(*) OVER() AS max_results\nFROM\n  public.trending_user_180d tu\n  LEFT JOIN public.\"TUser\" u ON tu.id = u.id\nWHERE\n  (\n    :weighted_difference_min :: INTEGER IS NULL\n    OR weighted_difference >= :weighted_difference_min\n  )\n  AND (\n    :weighted_difference_max :: INTEGER IS NULL\n    OR weighted_difference <= :weighted_difference_max\n  )\n  AND (\n    :difference_min :: INTEGER IS NULL\n    OR difference >= :difference_min\n  )\n  AND (\n    :difference_max :: INTEGER IS NULL\n    OR difference <= :difference_max\n  )\n  AND (\n    :marked_followers_ratio_min :: INTEGER IS NULL\n    OR marked_followers_ratio >= :marked_followers_ratio_min\n  )\n  AND (\n    :marked_followers_ratio_max :: INTEGER IS NULL\n    OR marked_followers_ratio <= :marked_followers_ratio_max\n  )\n  AND (\n    :marked_followers_min :: INTEGER IS NULL\n    OR marked_followers >= :marked_followers_min\n  )\n  AND (\n    :marked_followers_max :: INTEGER IS NULL\n    OR marked_followers <= :marked_followers_max\n  )\n  AND (\n    :weighted_marked_followers_min :: INTEGER IS NULL\n    OR weighted_marked_followers >= :weighted_marked_followers_min\n  )\n  AND (\n    :weighted_marked_followers_max :: INTEGER IS NULL\n    OR weighted_marked_followers <= :weighted_marked_followers_max\n  )\n  AND (\n    :account_created_at_min :: timestamp without time zone IS NULL\n    OR account_created_at >= :account_created_at_min\n  )\n  AND (\n    :account_created_at_max :: timestamp without time zone IS NULL\n    OR account_created_at <= :account_created_at_max\n  )\n  AND (\n    :followers_count_min :: INTEGER IS NULL\n    OR followers_count >= :followers_count_min\n  )\n  AND (\n    :followers_count_max :: INTEGER IS NULL\n    OR followers_count <= :followers_count_max\n  )\n  AND (\n    :following_count_min :: INTEGER IS NULL\n    OR following_count >= :following_count_min\n  )\n  AND (\n    :following_count_max :: INTEGER IS NULL\n    OR following_count <= :following_count_max\n  )\n  AND (\n    :tweet_count_min :: INTEGER IS NULL\n    OR tweet_count >= :tweet_count_min\n  )\n  AND (\n    :tweet_count_max :: INTEGER IS NULL\n    OR tweet_count <= :tweet_count_max\n  )\n  AND (\n    :listed_count_min :: INTEGER IS NULL\n    OR listed_count >= :listed_count_min\n  )\n  AND (\n    :listed_count_max :: INTEGER IS NULL\n    OR listed_count <= :listed_count_max\n  )\nORDER BY\n  (\n    case\n      when :sort_column = 'weighted_difference'\n      and :desc = false then weighted_difference\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'weighted_difference'\n      and :desc = true then weighted_difference\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'difference'\n      and :desc = false then difference\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'difference'\n      and :desc = true then difference\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'marked_followers_ratio'\n      and :desc = false then marked_followers_ratio\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'marked_followers_ratio'\n      and :desc = true then marked_followers_ratio\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'marked_followers'\n      and :desc = false then marked_followers\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'marked_followers'\n      and :desc = true then marked_followers\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'weighted_marked_followers'\n      and :desc = false then weighted_marked_followers\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'weighted_marked_followers'\n      and :desc = true then weighted_marked_followers\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'account_created_at'\n      and :desc = false then account_created_at\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'account_created_at'\n      and :desc = true then account_created_at\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'followers_count'\n      and :desc = false then followers_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'followers_count'\n      and :desc = true then followers_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'following_count'\n      and :desc = false then following_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'following_count'\n      and :desc = true then following_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'tweet_count'\n      and :desc = false then tweet_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'tweet_count'\n      and :desc = true then tweet_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'listed_count'\n      and :desc = false then listed_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'listed_count'\n      and :desc = true then listed_count\n    end\n  ) desc NULLS LAST OFFSET :offset ! :: INTEGER\nLIMIT\n  :limit ! :: INTEGER"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   marked_followers_ratio,
 *   difference,
 *   weighted_difference,
 *   tu.id,
 *   u.username,
 *   account_created_at,
 *   marked_followers,
 *   weighted_marked_followers,
 *   followers_count,
 *   following_count,
 *   tweet_count,
 *   listed_count,
 *   count(*) OVER() AS max_results
 * FROM
 *   public.trending_user_180d tu
 *   LEFT JOIN public."TUser" u ON tu.id = u.id
 * WHERE
 *   (
 *     :weighted_difference_min :: INTEGER IS NULL
 *     OR weighted_difference >= :weighted_difference_min
 *   )
 *   AND (
 *     :weighted_difference_max :: INTEGER IS NULL
 *     OR weighted_difference <= :weighted_difference_max
 *   )
 *   AND (
 *     :difference_min :: INTEGER IS NULL
 *     OR difference >= :difference_min
 *   )
 *   AND (
 *     :difference_max :: INTEGER IS NULL
 *     OR difference <= :difference_max
 *   )
 *   AND (
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
 *       when :sort_column = 'weighted_difference'
 *       and :desc = false then weighted_difference
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'weighted_difference'
 *       and :desc = true then weighted_difference
 *     end
 *   ) desc NULLS LAST,
 *   (
 *     case
 *       when :sort_column = 'difference'
 *       and :desc = false then difference
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'difference'
 *       and :desc = true then difference
 *     end
 *   ) desc NULLS LAST,
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
export const getAllTrendingUser180dDynamic = new PreparedQuery<IGetAllTrendingUser180dDynamicParams,IGetAllTrendingUser180dDynamicResult>(getAllTrendingUser180dDynamicIR);


/** 'GetAllTrendingUser365d' parameters type */
export interface IGetAllTrendingUser365dParams {
  limit: number;
  offset: number;
}

/** 'GetAllTrendingUser365d' return type */
export interface IGetAllTrendingUser365dResult {
  account_created_at: Date | null;
  difference: string | null;
  followers_count: number | null;
  following_count: number | null;
  id: string | null;
  listed_count: number | null;
  marked_followers: string | null;
  marked_followers_ratio: string | null;
  tweet_count: number | null;
  weighted_difference: string | null;
  weighted_marked_followers: string | null;
}

/** 'GetAllTrendingUser365d' query type */
export interface IGetAllTrendingUser365dQuery {
  params: IGetAllTrendingUser365dParams;
  result: IGetAllTrendingUser365dResult;
}

const getAllTrendingUser365dIR: any = {"usedParamSet":{"offset":true,"limit":true},"params":[{"name":"offset","required":true,"transform":{"type":"scalar"},"locs":[{"a":255,"b":263}]},{"name":"limit","required":true,"transform":{"type":"scalar"},"locs":[{"a":284,"b":291}]}],"statement":"SELECT\n  marked_followers_ratio,\n  difference,\n  weighted_difference,\n  id,\n  account_created_at,\n  marked_followers,\n  weighted_marked_followers,\n  followers_count,\n  following_count,\n  tweet_count,\n  listed_count\nFROM\n  public.trending_user_365d OFFSET :offset ! :: INTEGER\nLIMIT\n  :limit ! :: INTEGER"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   marked_followers_ratio,
 *   difference,
 *   weighted_difference,
 *   id,
 *   account_created_at,
 *   marked_followers,
 *   weighted_marked_followers,
 *   followers_count,
 *   following_count,
 *   tweet_count,
 *   listed_count
 * FROM
 *   public.trending_user_365d OFFSET :offset ! :: INTEGER
 * LIMIT
 *   :limit ! :: INTEGER
 * ```
 */
export const getAllTrendingUser365d = new PreparedQuery<IGetAllTrendingUser365dParams,IGetAllTrendingUser365dResult>(getAllTrendingUser365dIR);


/** 'GetAllTrendingUser365dDynamic' parameters type */
export interface IGetAllTrendingUser365dDynamicParams {
  account_created_at_max: Date | null | void;
  account_created_at_min: Date | null | void;
  desc: boolean | null | void;
  difference_max: number | null | void;
  difference_min: number | null | void;
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
  weighted_difference_max: number | null | void;
  weighted_difference_min: number | null | void;
  weighted_marked_followers_max: number | null | void;
  weighted_marked_followers_min: number | null | void;
}

/** 'GetAllTrendingUser365dDynamic' return type */
export interface IGetAllTrendingUser365dDynamicResult {
  account_created_at: Date | null;
  difference: string | null;
  followers_count: number | null;
  following_count: number | null;
  id: string | null;
  listed_count: number | null;
  marked_followers: string | null;
  marked_followers_ratio: string | null;
  max_results: string | null;
  tweet_count: number | null;
  username: string;
  weighted_difference: string | null;
  weighted_marked_followers: string | null;
}

/** 'GetAllTrendingUser365dDynamic' query type */
export interface IGetAllTrendingUser365dDynamicQuery {
  params: IGetAllTrendingUser365dDynamicParams;
  result: IGetAllTrendingUser365dDynamicResult;
}

const getAllTrendingUser365dDynamicIR: any = {"usedParamSet":{"weighted_difference_min":true,"weighted_difference_max":true,"difference_min":true,"difference_max":true,"marked_followers_ratio_min":true,"marked_followers_ratio_max":true,"marked_followers_min":true,"marked_followers_max":true,"weighted_marked_followers_min":true,"weighted_marked_followers_max":true,"account_created_at_min":true,"account_created_at_max":true,"followers_count_min":true,"followers_count_max":true,"following_count_min":true,"following_count_max":true,"tweet_count_min":true,"tweet_count_max":true,"listed_count_min":true,"listed_count_max":true,"sort_column":true,"desc":true,"offset":true,"limit":true},"params":[{"name":"weighted_difference_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":361,"b":384},{"a":435,"b":458}]},{"name":"weighted_difference_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":476,"b":499},{"a":550,"b":573}]},{"name":"difference_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":591,"b":605},{"a":647,"b":661}]},{"name":"difference_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":679,"b":693},{"a":735,"b":749}]},{"name":"marked_followers_ratio_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":767,"b":793},{"a":847,"b":873}]},{"name":"marked_followers_ratio_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":891,"b":917},{"a":971,"b":997}]},{"name":"marked_followers_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1015,"b":1035},{"a":1083,"b":1103}]},{"name":"marked_followers_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1121,"b":1141},{"a":1189,"b":1209}]},{"name":"weighted_marked_followers_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1227,"b":1256},{"a":1313,"b":1342}]},{"name":"weighted_marked_followers_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1360,"b":1389},{"a":1446,"b":1475}]},{"name":"account_created_at_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1493,"b":1515},{"a":1585,"b":1607}]},{"name":"account_created_at_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1625,"b":1647},{"a":1717,"b":1739}]},{"name":"followers_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1757,"b":1776},{"a":1823,"b":1842}]},{"name":"followers_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":1860,"b":1879},{"a":1926,"b":1945}]},{"name":"following_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":1963,"b":1982},{"a":2029,"b":2048}]},{"name":"following_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2066,"b":2085},{"a":2132,"b":2151}]},{"name":"tweet_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":2169,"b":2184},{"a":2227,"b":2242}]},{"name":"tweet_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2260,"b":2275},{"a":2318,"b":2333}]},{"name":"listed_count_min","required":false,"transform":{"type":"scalar"},"locs":[{"a":2351,"b":2367},{"a":2411,"b":2427}]},{"name":"listed_count_max","required":false,"transform":{"type":"scalar"},"locs":[{"a":2445,"b":2461},{"a":2505,"b":2521}]},{"name":"sort_column","required":false,"transform":{"type":"scalar"},"locs":[{"a":2560,"b":2571},{"a":2687,"b":2698},{"a":2825,"b":2836},{"a":2934,"b":2945},{"a":3054,"b":3065},{"a":3187,"b":3198},{"a":3331,"b":3342},{"a":3452,"b":3463},{"a":3584,"b":3595},{"a":3723,"b":3734},{"a":3873,"b":3884},{"a":3998,"b":4009},{"a":4134,"b":4145},{"a":4253,"b":4264},{"a":4383,"b":4394},{"a":4502,"b":4513},{"a":4632,"b":4643},{"a":4743,"b":4754},{"a":4865,"b":4876},{"a":4978,"b":4989}]},{"name":"desc","required":false,"transform":{"type":"scalar"},"locs":[{"a":2607,"b":2611},{"a":2734,"b":2738},{"a":2863,"b":2867},{"a":2972,"b":2976},{"a":3104,"b":3108},{"a":3237,"b":3241},{"a":3375,"b":3379},{"a":3496,"b":3500},{"a":3637,"b":3641},{"a":3776,"b":3780},{"a":3919,"b":3923},{"a":4044,"b":4048},{"a":4177,"b":4181},{"a":4296,"b":4300},{"a":4426,"b":4430},{"a":4545,"b":4549},{"a":4671,"b":4675},{"a":4782,"b":4786},{"a":4905,"b":4909},{"a":5018,"b":5022}]},{"name":"offset","required":true,"transform":{"type":"scalar"},"locs":[{"a":5084,"b":5092}]},{"name":"limit","required":true,"transform":{"type":"scalar"},"locs":[{"a":5113,"b":5120}]}],"statement":"SELECT\n  marked_followers_ratio,\n  difference,\n  weighted_difference,\n  tu.id,\n  u.username,\n  account_created_at,\n  marked_followers,\n  weighted_marked_followers,\n  followers_count,\n  following_count,\n  tweet_count,\n  listed_count,\n  count(*) OVER() AS max_results\nFROM\n  public.trending_user_365d tu\n  LEFT JOIN public.\"TUser\" u ON tu.id = u.id\nWHERE\n  (\n    :weighted_difference_min :: INTEGER IS NULL\n    OR weighted_difference >= :weighted_difference_min\n  )\n  AND (\n    :weighted_difference_max :: INTEGER IS NULL\n    OR weighted_difference <= :weighted_difference_max\n  )\n  AND (\n    :difference_min :: INTEGER IS NULL\n    OR difference >= :difference_min\n  )\n  AND (\n    :difference_max :: INTEGER IS NULL\n    OR difference <= :difference_max\n  )\n  AND (\n    :marked_followers_ratio_min :: INTEGER IS NULL\n    OR marked_followers_ratio >= :marked_followers_ratio_min\n  )\n  AND (\n    :marked_followers_ratio_max :: INTEGER IS NULL\n    OR marked_followers_ratio <= :marked_followers_ratio_max\n  )\n  AND (\n    :marked_followers_min :: INTEGER IS NULL\n    OR marked_followers >= :marked_followers_min\n  )\n  AND (\n    :marked_followers_max :: INTEGER IS NULL\n    OR marked_followers <= :marked_followers_max\n  )\n  AND (\n    :weighted_marked_followers_min :: INTEGER IS NULL\n    OR weighted_marked_followers >= :weighted_marked_followers_min\n  )\n  AND (\n    :weighted_marked_followers_max :: INTEGER IS NULL\n    OR weighted_marked_followers <= :weighted_marked_followers_max\n  )\n  AND (\n    :account_created_at_min :: timestamp without time zone IS NULL\n    OR account_created_at >= :account_created_at_min\n  )\n  AND (\n    :account_created_at_max :: timestamp without time zone IS NULL\n    OR account_created_at <= :account_created_at_max\n  )\n  AND (\n    :followers_count_min :: INTEGER IS NULL\n    OR followers_count >= :followers_count_min\n  )\n  AND (\n    :followers_count_max :: INTEGER IS NULL\n    OR followers_count <= :followers_count_max\n  )\n  AND (\n    :following_count_min :: INTEGER IS NULL\n    OR following_count >= :following_count_min\n  )\n  AND (\n    :following_count_max :: INTEGER IS NULL\n    OR following_count <= :following_count_max\n  )\n  AND (\n    :tweet_count_min :: INTEGER IS NULL\n    OR tweet_count >= :tweet_count_min\n  )\n  AND (\n    :tweet_count_max :: INTEGER IS NULL\n    OR tweet_count <= :tweet_count_max\n  )\n  AND (\n    :listed_count_min :: INTEGER IS NULL\n    OR listed_count >= :listed_count_min\n  )\n  AND (\n    :listed_count_max :: INTEGER IS NULL\n    OR listed_count <= :listed_count_max\n  )\nORDER BY\n  (\n    case\n      when :sort_column = 'weighted_difference'\n      and :desc = false then weighted_difference\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'weighted_difference'\n      and :desc = true then weighted_difference\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'difference'\n      and :desc = false then difference\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'difference'\n      and :desc = true then difference\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'marked_followers_ratio'\n      and :desc = false then marked_followers_ratio\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'marked_followers_ratio'\n      and :desc = true then marked_followers_ratio\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'marked_followers'\n      and :desc = false then marked_followers\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'marked_followers'\n      and :desc = true then marked_followers\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'weighted_marked_followers'\n      and :desc = false then weighted_marked_followers\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'weighted_marked_followers'\n      and :desc = true then weighted_marked_followers\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'account_created_at'\n      and :desc = false then account_created_at\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'account_created_at'\n      and :desc = true then account_created_at\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'followers_count'\n      and :desc = false then followers_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'followers_count'\n      and :desc = true then followers_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'following_count'\n      and :desc = false then following_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'following_count'\n      and :desc = true then following_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'tweet_count'\n      and :desc = false then tweet_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'tweet_count'\n      and :desc = true then tweet_count\n    end\n  ) desc NULLS LAST,\n  (\n    case\n      when :sort_column = 'listed_count'\n      and :desc = false then listed_count\n    end\n  ) asc,\n  (\n    case\n      when :sort_column = 'listed_count'\n      and :desc = true then listed_count\n    end\n  ) desc NULLS LAST OFFSET :offset ! :: INTEGER\nLIMIT\n  :limit ! :: INTEGER"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   marked_followers_ratio,
 *   difference,
 *   weighted_difference,
 *   tu.id,
 *   u.username,
 *   account_created_at,
 *   marked_followers,
 *   weighted_marked_followers,
 *   followers_count,
 *   following_count,
 *   tweet_count,
 *   listed_count,
 *   count(*) OVER() AS max_results
 * FROM
 *   public.trending_user_365d tu
 *   LEFT JOIN public."TUser" u ON tu.id = u.id
 * WHERE
 *   (
 *     :weighted_difference_min :: INTEGER IS NULL
 *     OR weighted_difference >= :weighted_difference_min
 *   )
 *   AND (
 *     :weighted_difference_max :: INTEGER IS NULL
 *     OR weighted_difference <= :weighted_difference_max
 *   )
 *   AND (
 *     :difference_min :: INTEGER IS NULL
 *     OR difference >= :difference_min
 *   )
 *   AND (
 *     :difference_max :: INTEGER IS NULL
 *     OR difference <= :difference_max
 *   )
 *   AND (
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
 *       when :sort_column = 'weighted_difference'
 *       and :desc = false then weighted_difference
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'weighted_difference'
 *       and :desc = true then weighted_difference
 *     end
 *   ) desc NULLS LAST,
 *   (
 *     case
 *       when :sort_column = 'difference'
 *       and :desc = false then difference
 *     end
 *   ) asc,
 *   (
 *     case
 *       when :sort_column = 'difference'
 *       and :desc = true then difference
 *     end
 *   ) desc NULLS LAST,
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
export const getAllTrendingUser365dDynamic = new PreparedQuery<IGetAllTrendingUser365dDynamicParams,IGetAllTrendingUser365dDynamicResult>(getAllTrendingUser365dDynamicIR);


