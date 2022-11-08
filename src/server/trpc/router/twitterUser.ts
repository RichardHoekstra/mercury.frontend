import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";
import { getAllPopularUserDynamic } from "../../db/queries/types/popular_user";
import {
  getAllTrendingUser180dDynamic,
  getAllTrendingUser1dDynamic,
  getAllTrendingUser30dDynamic,
  getAllTrendingUser365dDynamic,
  getAllTrendingUser3dDynamic,
  getAllTrendingUser7dDynamic,
  getAllTrendingUser90dDynamic,
} from "../../db/queries/types/trending_user";

const queriesTrendingUserByInterval = {
  "1d": getAllTrendingUser1dDynamic,
  "3d": getAllTrendingUser3dDynamic,
  "7d": getAllTrendingUser7dDynamic,
  "30d": getAllTrendingUser30dDynamic,
  "90d": getAllTrendingUser90dDynamic,
  "180d": getAllTrendingUser180dDynamic,
  "365d": getAllTrendingUser365dDynamic,
};

import {
  TUser,
  TUserMetadata,
  TUserPublicMetrics,
  ConnectionStatus,
  Prisma,
} from "@prisma/client";

// TEMPORARY INTERFACES
export interface User {
  id: string;
  name: string;
  username: string;

  marked: boolean;
  metadata?: UserMetadata;
  public_metrics?: UserPublicMetrics;
}

export interface UserMetadata {
  createdAt?: Date;
  description?: string;
  entities?: string;
  location?: string;
  pinned_tweet_id?: string;
  profile_image_url?: string;
  protected?: boolean;
  url?: string;
  verified?: boolean;
}

export interface UserPublicMetrics {
  followers_count?: number;
  following_count?: number;
  tweet_count?: number;
  listed_count?: number;
}

export interface UserWithFollowers extends User {
  marked_followers_ratio: number;
  marked_followers: number;
  weighted_marked_followers: number;
}

export interface UserFollowersDiff extends UserWithFollowers {
  difference: number;
  weighted_difference: number;
}

const _queryFindFollowersOf = (
  status: "CONNECTED" | "DISCONNECTED",
  userId: string,
  limit: number,
  offset: number
) => {
  return Prisma.sql`
  SELECT ID,
    NAME,
    USERNAME,
    MARKED,
    CONN."createdAt" as addedAt
  FROM PUBLIC."TUser" U
  JOIN
    (SELECT *
      FROM
        (SELECT DISTINCT ON (_INNER."fromId", _INNER."toId") 
            _INNER."fromId",
            _INNER."toId",
            _INNER."status",
            _INNER."version",
            _INNER."createdAt"
          FROM PUBLIC."TConnection" _INNER
          WHERE _INNER."createdAt" <= TIMEZONE('utc', NOW())
            AND _INNER."toId" = ${userId}
          ORDER BY _INNER."fromId",
            _INNER."toId",
            _INNER."version" DESC) CONN
      WHERE CONN."status" = ${status} :: "ConnectionStatus"
      ) CONN ON U.ID = CONN."fromId"
      ORDER BY CONN."createdAt" DESC
  OFFSET ${offset} 
  LIMIT ${limit}`;
};

const _queryFindFollowingOf = (
  status: string,
  userId: string,
  limit: number,
  offset: number
) => {
  return Prisma.sql`
  SELECT ID,
  NAME,
  USERNAME,
  MARKED,
  CONN."createdAt" as addedAt
FROM PUBLIC."TUser" U
JOIN
  (SELECT *
    FROM
      (SELECT DISTINCT ON (_INNER."fromId", _INNER."toId") 
          _INNER."fromId",
          _INNER."toId",
          _INNER."status",
          _INNER."version",
          _INNER."createdAt"
        FROM PUBLIC."TConnection" _INNER
        WHERE _INNER."createdAt" <= TIMEZONE('utc', NOW())
          AND _INNER."fromId" = ${userId}
        ORDER BY _INNER."fromId",
          _INNER."toId",
          _INNER."version" DESC) CONN
    WHERE CONN."status" = ${status} :: "ConnectionStatus"
    ) CONN ON U.ID = CONN."toId"
    ORDER BY CONN."createdAt" DESC
OFFSET ${offset} 
LIMIT ${limit}
  `;
};

const safeParseInt = (str: string | undefined | null) =>
  str !== undefined && str !== null && str.length > 0
    ? parseInt(str)
    : undefined;

const NanAsUndefined = (num: number | undefined) =>
  num !== undefined && !Number.isNaN(num) ? num : undefined;

const parseDateString = (str: string | undefined | null) =>
  str !== undefined && str !== null && str.length > 0
    ? NanAsUndefined(Date.parse(str))
    : undefined;

const parseTimestamp = (timestamp: number | undefined) =>
  timestamp !== undefined ? new Date(timestamp) : undefined;

const safeParseDate = (str: string | undefined | null) =>
  str !== undefined ? parseTimestamp(parseDateString(str)) : undefined;

const optionallyStartOfYear = (str: string | undefined | null) => {
  if (!str) return undefined;
  if (str.length === 4) return `${str}-01-01`;
};
const optionallyEndOfYear = (str: string | undefined | null) => {
  if (!str) return undefined;
  if (str.length === 4) return `${str}-12-31`;
};

// user
//   - getById
//   - getByUsername
//   - getAll
//   - getAllMarked
//   - editMarked
//   - editMarkedWeight
//   - getPopular
//   - getTrending
//   - getFollowersById
//   - getFollowingById
//   - getAllLiked

export const twitterUserRouter = router({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.tUser.findUnique({
        where: { id: input.id },
        include: { twitterMetaData: true, twitterPublicMetrics: true },
      });
      if (!user) return;
      return {
        ...user,
        metadata: user.twitterMetaData ?? ({} as UserMetadata),
        public_metrics: user.twitterPublicMetrics ?? ({} as UserPublicMetrics),
      } as User;
    }),
  getByUsername: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.tUser.findFirst({
        where: { username: input.username },
        include: { twitterMetaData: true, twitterPublicMetrics: true },
      });

      if (user === null) {
        throw new Error("Could not find user");
      }
      return user;
    }),
  getAllMarked: publicProcedure.query(async ({ ctx }) => {
    const markedUsers = await ctx.prisma.tUser.findMany({
      where: { marked: true },
    });

    return markedUsers;
  }),
  editMarked: publicProcedure
    .input(z.object({ username: z.string(), marked: z.boolean() }))
    .query(async ({ ctx, input }) => {
      const request = await ctx.twitter.v2.userByUsername(input.username);
      if (!request.data) {
        throw new Error(`User does not exist with username ${input}`);
      }

      const user = request.data;
      await ctx.prisma.tUser.upsert({
        where: { id: user.id },
        create: {
          id: user.id,
          username: user.username,
          name: user.name,
          marked: input.marked,
        },
        update: {
          marked: input.marked,
        },
      });
    }),
  //   editMarkedWeight: publicProcedure
  //     .input(z.object({ username: z.string(), marked: z.boolean() }))
  //     .query(async ({ ctx, input }) => {}),
  getPopular: publicProcedure
    .input(
      z.object({
        sorting: z.array(z.object({ id: z.string(), desc: z.boolean() })),
        filters: z.array(
          z.object({
            id: z.string(),
            value: z.array(z.string().nullish()),
          })
        ),
        limit: z.number().int().gt(0).default(25),
        offset: z.number().int().gte(0).default(0),
      })
    )
    .query(async ({ ctx, input }) => {
      const popular = await ctx.withConnection(async (conn) => {
        const result = await getAllPopularUserDynamic.run(
          {
            marked_followers_min: safeParseInt(
              input.filters.find((x) => x.id === "marked_followers")?.value?.[0]
            ),
            marked_followers_max: safeParseInt(
              input.filters.find((x) => x.id === "marked_followers")?.value?.[1]
            ),
            marked_followers_ratio_min: safeParseInt(
              input.filters.find((x) => x.id === "marked_followers_ratio")
                ?.value?.[0]
            ),
            marked_followers_ratio_max: safeParseInt(
              input.filters.find((x) => x.id === "marked_followers_ratio")
                ?.value?.[1]
            ),
            weighted_marked_followers_min: safeParseInt(
              input.filters.find((x) => x.id === "weighted_marked_followers")
                ?.value?.[0]
            ),
            weighted_marked_followers_max: safeParseInt(
              input.filters.find((x) => x.id === "weighted_marked_followers")
                ?.value?.[1]
            ),
            account_created_at_min: safeParseDate(
              optionallyStartOfYear(
                input.filters.find((x) => x.id === "account_created_at")
                  ?.value?.[0]
              )
            ),
            account_created_at_max: safeParseDate(
              optionallyEndOfYear(
                input.filters.find((x) => x.id === "account_created_at")
                  ?.value?.[1]
              )
            ),
            followers_count_min: safeParseInt(
              input.filters.find((x) => x.id === "followers_count")?.value?.[0]
            ),
            followers_count_max: safeParseInt(
              input.filters.find((x) => x.id === "followers_count")?.value?.[1]
            ),
            following_count_min: safeParseInt(
              input.filters.find((x) => x.id === "following_count")?.value?.[0]
            ),
            following_count_max: safeParseInt(
              input.filters.find((x) => x.id === "following_count")?.value?.[1]
            ),
            listed_count_min: safeParseInt(
              input.filters.find((x) => x.id === "listed_count")?.value?.[0]
            ),
            listed_count_max: safeParseInt(
              input.filters.find((x) => x.id === "listed_count")?.value?.[1]
            ),
            tweet_count_min: safeParseInt(
              input.filters.find((x) => x.id === "tweet_count")?.value?.[0]
            ),
            tweet_count_max: safeParseInt(
              input.filters.find((x) => x.id === "tweet_count")?.value?.[1]
            ),
            sort_column: input.sorting?.[0]?.id ?? "marked_followers",
            desc: input.sorting?.[0]?.desc ?? true,
            offset: input.offset,
            limit: input.limit,
          },
          conn
        );
        return result;
      });
      const max_results = popular[0]?.max_results;

      return {
        rows: popular,
        max_results: max_results ? parseInt(max_results) : undefined,
      };
    }),
  getTrending: publicProcedure
    .input(
      z.object({
        interval: z.enum(["1d", "3d", "7d", "30d", "90d", "180d", "365d"]),
        sorting: z.array(z.object({ id: z.string(), desc: z.boolean() })),
        filters: z.array(
          z.object({
            id: z.string(),
            value: z.array(z.string().nullish()),
          })
        ),
        limit: z.number().int().gt(0).default(25),
        offset: z.number().int().gte(0).default(0),
      })
    )
    .query(async ({ ctx, input }) => {
      const trending = await ctx.withConnection(async (conn) => {
        const query = queriesTrendingUserByInterval[input.interval];
        console.log(input);
        const result = await query.run(
          {
            difference_min: safeParseInt(
              input.filters.find((x) => x.id === "difference")?.value?.[0]
            ),
            difference_max: safeParseInt(
              input.filters.find((x) => x.id === "difference")?.value?.[1]
            ),
            weighted_difference_min: safeParseInt(
              input.filters.find((x) => x.id === "weighted_difference")
                ?.value?.[0]
            ),
            weighted_difference_max: safeParseInt(
              input.filters.find((x) => x.id === "weighted_difference")
                ?.value?.[1]
            ),
            marked_followers_min: safeParseInt(
              input.filters.find((x) => x.id === "marked_followers")?.value?.[0]
            ),
            marked_followers_max: safeParseInt(
              input.filters.find((x) => x.id === "marked_followers")?.value?.[1]
            ),
            marked_followers_ratio_min: safeParseInt(
              input.filters.find((x) => x.id === "marked_followers_ratio")
                ?.value?.[0]
            ),
            marked_followers_ratio_max: safeParseInt(
              input.filters.find((x) => x.id === "marked_followers_ratio")
                ?.value?.[1]
            ),
            weighted_marked_followers_min: safeParseInt(
              input.filters.find((x) => x.id === "weighted_marked_followers")
                ?.value?.[0]
            ),
            weighted_marked_followers_max: safeParseInt(
              input.filters.find((x) => x.id === "weighted_marked_followers")
                ?.value?.[1]
            ),
            account_created_at_min: undefined,
            account_created_at_max: undefined,
            // account_created_at_min: safeParseDate(
            //     optionallyStartOfYear(
            //         input.filters.find(
            //             (x) => x.id === "account_created_at"
            //         )?.value?.[0]
            //     )
            // ),
            // account_created_at_max: safeParseDate(
            //     optionallyEndOfYear(
            //         input.filters.find(
            //             (x) => x.id === "account_created_at"
            //         )?.value?.[1]
            //     )
            // ),
            followers_count_min: safeParseInt(
              input.filters.find((x) => x.id === "followers_count")?.value?.[0]
            ),
            followers_count_max: safeParseInt(
              input.filters.find((x) => x.id === "followers_count")?.value?.[1]
            ),
            following_count_min: safeParseInt(
              input.filters.find((x) => x.id === "following_count")?.value?.[0]
            ),
            following_count_max: safeParseInt(
              input.filters.find((x) => x.id === "following_count")?.value?.[1]
            ),
            listed_count_min: safeParseInt(
              input.filters.find((x) => x.id === "listed_count")?.value?.[0]
            ),
            listed_count_max: safeParseInt(
              input.filters.find((x) => x.id === "listed_count")?.value?.[1]
            ),
            tweet_count_min: safeParseInt(
              input.filters.find((x) => x.id === "tweet_count")?.value?.[0]
            ),
            tweet_count_max: safeParseInt(
              input.filters.find((x) => x.id === "tweet_count")?.value?.[1]
            ),
            sort_column: input.sorting?.[0]?.id ?? "marked_followers",
            desc: input.sorting?.[0]?.desc ?? true,
            offset: input.offset,
            limit: input.limit,
          },
          conn
        );
        return result;
      });
      const max_results = trending[0]?.max_results;

      return {
        rows: trending,
        max_results: max_results ? parseInt(max_results) : undefined,
      };
    }),
  getFollowersById: publicProcedure
    .input(
      z.object({
        id: z.string(),
        status: z.enum([
          ConnectionStatus.CONNECTED,
          ConnectionStatus.DISCONNECTED,
        ]),
        limit: z.number().int().gt(0).default(25),
        offset: z.number().int().gte(0).default(0),
      })
    )
    .query(async ({ ctx, input }) => {
      type TQueryResult = TUser & {
        addedat: string;
      };

      const followers = await ctx.prisma.$queryRaw<TQueryResult[]>(
        _queryFindFollowersOf(input.status, input.id, input.limit, input.offset)
      );

      return followers.map((x) => {
        return {
          id: x.id,
          name: x.name,
          username: x.username,
          addedAt: new Date(x.addedat),
        };
      });
    }),
  getFollowingById: publicProcedure
    .input(
      z.object({
        id: z.string(),
        status: z.enum([
          ConnectionStatus.CONNECTED,
          ConnectionStatus.DISCONNECTED,
        ]),
        limit: z.number().int().gt(0).default(25),
        offset: z.number().int().gte(0).default(0),
      })
    )
    .query(async ({ ctx, input }) => {
      type TQueryResult = TUser & {
        addedat: string;
      };
      console.log(input.status);
      const following = await ctx.prisma.$queryRaw<TQueryResult[]>(
        _queryFindFollowingOf(input.status, input.id, input.limit, input.offset)
      );

      return following.map((x) => {
        return {
          id: x.id,
          name: x.name,
          username: x.username,
          addedAt: new Date(x.addedat),
        };
      });
    }),
  getLikedByByUsername: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.tUser.findFirst({
        where: { username: input.username },
        select: { id: true },
      });
      if (user === null) {
        throw new Error("Could not find userId");
      }

      type TQueryResult = TUser & {
        addedat: string;
      };

      const markedUsers = await ctx.prisma.$queryRaw<TQueryResult[]>`
          SELECT sq.* FROM (
            SELECT DISTINCT ON (TUSER.id) TLIKE."recordCreatedAt" as ADDEDAT, TUSER.*
            FROM public."TTweet" AS TWEET
            LEFT JOIN (SELECT * FROM public."TLike" AS TLIKE) TLIKE ON TLIKE."tTweetId" = TWEET.id
            LEFT JOIN (SELECT * FROM public."TUser" AS TUSER) TUSER ON TUSER."id" = TLIKE."tUserId"
            WHERE TWEET."authorId" = ${user.id}
            ORDER BY TUSER.id, ADDEDAT DESC
          ) as sq
          ORDER BY sq.ADDEDAT DESC;`;

      return markedUsers.map((x) => {
        return {
          id: x.id,
          name: x.name,
          username: x.username,
          addedAt: new Date(x.addedat),
        };
      });
    }),
});
