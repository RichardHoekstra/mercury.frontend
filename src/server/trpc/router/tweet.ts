import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const tweetRouter = router({
  getById: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    const tweet = await ctx.prisma.tTweet.findUnique({
      where: { id: input },
      include: {
        likes: {
          include: {
            tUser: { select: { username: true, name: true } },
          },
        },
      },
    });

    return tweet;
  }),
  popular: publicProcedure
    .input(
      z.object({
        interval: z.enum(["1d", "3d", "7d", "30d", "90d", "180d", "365d"]),
        limit: z.number().int().gt(0).default(25),
        offset: z.number().int().gte(0).default(0),
      })
    )
    .query(async ({ ctx, input }) => {
      type TTweetWithLikesCount = {
        likes: number;
        likers: string[];
        id: string;
        username: string;
        tweetText: string;
        createdAt: Date;
        authorId: string;
        like_count: number;
        quote_count: number;
        reply_count: number;
        retweet_count: number;
      };
      const afterDate = new Date();
      afterDate.setDate(
        afterDate.getDate() - parseInt(input.interval.replace("d", ""))
      );

      const tweets = await ctx.prisma.$queryRaw<TTweetWithLikesCount[]>`
        SELECT tu.username, likes, likers, tweet."id", tweet."tweetText", tweet."createdAt", tweet."authorId", pm.like_count, pm.quote_count, pm.reply_count, pm.retweet_count FROM
        (
            SELECT count(l."tTweetId") likes, ARRAY_AGG(l."username") AS likers, tweet.*
            FROM PUBLIC."TTweet" tweet
            LEFT JOIN (
                SELECT _USER."username",
                _LIKE.*
                FROM PUBLIC."TLike" _LIKE
                LEFT JOIN PUBLIC."TUser" _USER ON _LIKE."tUserId" = _USER."id"
                ORDER BY _LIKE."recordCreatedAt" DESC
            ) l on tweet.id = l."tTweetId"
            WHERE tweet."createdAt" >=  ${afterDate}
            GROUP BY tweet.id	
        ) tweet
        LEFT JOIN PUBLIC."TTweetPublicMetrics" pm on tweet.id = pm."tTweetId"
        LEFT JOIN PUBLIC."TUser" tu on tweet."authorId" = tu."id"
        ORDER BY likes DESC
        LIMIT ${input.limit}
        OFFSET ${input.offset};`;
      return tweets;
    }),
});
