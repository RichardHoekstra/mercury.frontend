import { router } from "../trpc";
import { markedUsersRouter } from "./markedUsers";
import { tweetRouter } from "./tweet";
import { twitterUserRouter } from "./twitterUser";

export const appRouter = router({
  tweet: tweetRouter,
  twitterUser: twitterUserRouter,
  markedUsers: markedUsersRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
