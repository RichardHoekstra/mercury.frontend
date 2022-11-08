import { router } from "../trpc";
import { tweetRouter } from "./tweet";
import { twitterUserRouter } from "./twitterUser";

export const appRouter = router({
  tweet: tweetRouter,
  twitterUser: twitterUserRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
