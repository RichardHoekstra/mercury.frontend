import { TRPCError } from "@trpc/server";
import { router, publicProcedure } from "../trpc";
import { z } from "zod";

import {
  TwitterApi,
  TwitterRateLimit,
  ApiResponseError,
  UserV2,
  ApiRequestError,
} from "twitter-api-v2";

export const markedUsersRouter = router({
  getAll: publicProcedure.query(async ({ ctx, input }) => {
    const markedUsers = await ctx.prisma.tUser.findMany({
      where: { marked: true },
      orderBy: { name: "asc" },
    });

    return markedUsers;
  }),
  setWeight: publicProcedure
    .input(z.object({ username: z.string(), weight: z.number() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.tUser.updateMany({
        where: { username: input.username },
        data: { markedWeight: input.weight },
      });
    }),
  setMark: publicProcedure
    .input(z.object({ username: z.string(), marked: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.tUser.findFirst({
        where: { username: input.username },
      });
      if (user) {
        await ctx.prisma.tUser.update({
          where: { id: user.id },
          data: { marked: input.marked },
        });
      } else {
        if (process.env.TWITTER_API_BEARER) {
          const twtrUser = await ctx.twitter.v2.userByUsername(input.username);
          if (twtrUser.errors) {
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
              message: twtrUser.errors.toString(),
            });
          }
          const newUser = twtrUser.data;
          const twitterMetaData = {
            createdAt: newUser.created_at,
            description: newUser.description,
            entities: newUser.entities
              ? JSON.stringify(newUser.entities)
              : undefined,
            location: newUser.location,
            pinned_tweet_id: newUser.pinned_tweet_id,
            profile_image_url: newUser.profile_image_url,
            protected: newUser.verified,
            url: newUser.url,
            verified: newUser.verified,
          };

          const twitterPublicMetrics = {
            followers_count: newUser.public_metrics?.followers_count,
            following_count: newUser.public_metrics?.following_count,
            tweet_count: newUser.public_metrics?.tweet_count,
            listed_count: newUser.public_metrics?.listed_count,
          };

          const userCreate = {
            id: newUser.id,
            name: newUser.name.replace(/\0/g, ""),
            username: newUser.username,
            accountCreatedAt: newUser.created_at,
            accountExists: true,
            marked: false,
            twitterMetaData: {
              create: twitterMetaData,
            },
            twitterPublicMetrics: {
              create: twitterPublicMetrics,
            },
          };
          const dbUser = await ctx.prisma.tUser.create({ data: userCreate });
          if (dbUser) {
            return;
          }
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
          });
        } else {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "NO TWITTER API KEY",
          });
        }
      }
    }),
});
