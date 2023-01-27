import type { NextPage } from "next";
import { useState } from "react";
import { trpc } from "../../utils/trpc";
import type { AppRouter } from "../../server/trpc/router/_app";
import type { inferProcedureInput } from "@trpc/server";
import Link from "next/link";

type queryInputType = inferProcedureInput<AppRouter["tweet"]["popular"]>;
type intervalOptionType = queryInputType["interval"];

const Tweets: NextPage = () => {
  const intervalOptions: intervalOptionType[] = [
    "1d",
    "3d",
    "7d",
    "30d",
    "90d",
    "180d",
    "365d",
  ];
  const [interval, setInterval] = useState<intervalOptionType>("3d");

  const { status, data, error } = trpc.tweet.popular.useQuery({
    interval: interval,
    limit: 100,
  });
  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <div className="container mx-auto flex flex-col items-center gap-4 py-16">
        <div className="max-w-[200px]">
          <label
            htmlFor="intervals"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Select an interval
          </label>
          <select
            id="intervals"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            onChange={(e) => setInterval(e.target.value as intervalOptionType)}
          >
            {intervalOptions.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        {data &&
          data.map((tweet) => {
            return (
              <div
                key={tweet.id}
                className="container flex max-w-xl flex-col rounded border border-gray-600 bg-gray-800 bg-opacity-10 p-4"
              >
                <div className="flex space-x-2">
                  <span className="font-bold">{tweet.likes.toString()}</span>
                  <Link
                    className="hover:bg-white hover:bg-opacity-10"
                    href={`https://twitter.com/${tweet.username}`}
                  >
                    <div className="font-bold">{tweet.username}</div>
                  </Link>
                  <Link
                    className="hover:bg-white hover:bg-opacity-10"
                    target="_blank"
                    href={`https://twitter.com/twitter/status/${tweet.id}`}
                  >
                    <span className="font-light opacity-70">
                      {tweet.createdAt.toLocaleDateString(undefined, {
                        hour12: false,
                        weekday: "short",
                        hour: "numeric",
                        minute: "numeric",
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </Link>
                </div>
                <div className="mb-2"></div>
                <div>
                  <div className="max-w-md">{tweet.tweetText}</div>
                </div>
                <div className="mb-2"></div>
                <div className="flex flex-row space-x-4">
                  <div className="flex space-x-1">
                    <span className="font-bold">{tweet.retweet_count}</span>
                    <span className="font-light opacity-70">Retweets</span>
                  </div>
                  <div className="flex space-x-1">
                    <span className="font-bold">{tweet.quote_count}</span>
                    <span className="font-light opacity-70">Quote Tweets</span>
                  </div>
                  <div className="flex space-x-1">
                    <span className="font-bold">{tweet.like_count}</span>
                    <span className="font-light opacity-70">Likes</span>
                  </div>
                  <div className="flex space-x-1">
                    <span className="font-bold">{tweet.reply_count}</span>
                    <span className="font-light opacity-70">Replies</span>
                  </div>
                </div>
                <div className="mt-1 mb-2 border-b border-gray-600"></div>
                <div className="flex flex-row flex-wrap">
                  {tweet.likers &&
                    tweet.likers.map((liker) => {
                      return (
                        <div
                          className="max-w-[16ch] overflow-hidden bg-white bg-opacity-5 pr-1 hover:max-w-none hover:bg-opacity-30 [&:nth-child(odd)]:bg-opacity-10 hover:[&:nth-child(odd)]:bg-opacity-30"
                          key={liker}
                        >
                          <Link
                            target="_blank"
                            href={`https://twitter.com/${liker}`}
                          >
                            <span>{liker}</span>
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Tweets;
