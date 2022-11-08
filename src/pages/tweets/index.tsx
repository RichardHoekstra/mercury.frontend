import { NextPage } from "next";
import { useState } from "react";
import { trpc } from "../../utils/trpc";
import { AppRouter } from "@acme/api";
import { inferProcedureInput } from "@trpc/server";

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
        <div className="h-screen">
            <label
                htmlFor="intervals"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
                Select an option
            </label>
            <select
                id="intervals"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) =>
                    setInterval(e.target.value as intervalOptionType)
                }
            >
                {intervalOptions.map((option) => {
                    return (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    );
                })}
            </select>
            <div>
                {data &&
                    data.map((tweet) => {
                        return (
                            <div
                                key={tweet.id}
                                className="flex flex-row space-x-2"
                            >
                                <div>{tweet.likes.toString()}</div>
                                <div>{tweet.username}</div>
                                <div className="max-w-md">
                                    {tweet.tweetText}
                                </div>
                                <div>{tweet.like_count}</div>
                                <div>{tweet.retweet_count}</div>
                                <div>{tweet.reply_count}</div>
                                <div>{tweet.quote_count}</div>
                                <div>{tweet.createdAt.toISOString()}</div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Tweets;
