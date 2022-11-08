import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { trpc } from "../../utils/trpc";
import { SocialIcon } from "react-social-icons";
import { IoPersonAdd, IoPersonRemove } from "react-icons/io5";
import Link from "next/link";

const ListUsers = (props: {
    users: { id: string; username: string; name: string; addedAt: Date }[];
}) => {
    return (
        <table className="table-auto space-x-2">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.users.map((user) => {
                    return (
                        <tr
                            className="hover:bg-white hover:bg-opacity-10"
                            key={user.id}
                        >
                            <td>
                                {`${user.addedAt
                                    .getFullYear()
                                    .toLocaleString("en-US", {
                                        minimumIntegerDigits: 4,
                                        useGrouping: false,
                                    })}-${(
                                    user.addedAt.getMonth() + 1
                                ).toLocaleString("en-US", {
                                    minimumIntegerDigits: 2,
                                    useGrouping: false,
                                })}-${user.addedAt
                                    .getDate()
                                    .toLocaleString("en-US", {
                                        minimumIntegerDigits: 2,
                                        useGrouping: false,
                                    })}`}
                            </td>
                            <td>
                                <SocialIcon
                                    style={{ height: 25, width: 25 }}
                                    url={`https://twitter.com/${user.username}`}
                                />
                            </td>
                            <td className="truncate max-w-[200px] hover:max-w-none hover:bg-white hover:bg-opacity-30">
                                <Link href={`/user/${user.username}`}>
                                    <a className="visited:text-gray-400">
                                        {user.name}
                                    </a>
                                </Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

type ConnectionStatus = "CONNECTED" | "DISCONNECTED";
const connectionStatusOptions = [
    { name: "Added", value: "CONNECTED" },
    { name: "Removed", value: "DISCONNECTED" },
];

const Followers = (props: { userId: string }) => {
    const [filter, setFilter] = useState<ConnectionStatus>("CONNECTED");
    const { status, data, error } = trpc.twitterUser.getFollowersById.useQuery({
        id: props.userId,
        status: filter,
        limit: 1000,
    });

    if (status === "error") {
        return <span>Error: {error.message}</span>;
    }
    return (
        <div className="bg-gray-800 bg-opacity-10 p-4 rounded border border-gray-600">
            <p className="text-center font-bold">Followers</p>
            <select
                id="followers-status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setFilter(e.target.value as ConnectionStatus)}
            >
                {connectionStatusOptions.map((option) => {
                    return (
                        <option
                            selected={option.value === filter}
                            key={option.name}
                            value={option.value}
                        >
                            {option.name}
                        </option>
                    );
                })}
            </select>
            <ListUsers users={data ?? []}></ListUsers>
        </div>
    );
};

const Following = (props: { userId: string }) => {
    const [filter, setFilter] = useState<ConnectionStatus>("CONNECTED");
    const { status, data, error } = trpc.twitterUser.getFollowingById.useQuery({
        id: props.userId,
        status: filter,
        limit: 1000,
    });

    if (status === "error") {
        return <span>Error: {error.message}</span>;
    }
    return (
        <div className="bg-gray-800 bg-opacity-10 p-4 rounded border border-gray-600">
            <p className="text-center font-bold">Following</p>
            <select
                id="following-status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setFilter(e.target.value as ConnectionStatus)}
            >
                {connectionStatusOptions.map((option) => {
                    return (
                        <option
                            selected={option.value === filter}
                            key={option.name}
                            value={option.value}
                        >
                            {option.name}
                        </option>
                    );
                })}
            </select>
            <ListUsers users={data ?? []}></ListUsers>
        </div>
    );
};

const LikedBy = (props: { username: string }) => {
    const { status, data, error } =
        trpc.twitterUser.getLikedByByUsername.useQuery({
            username: props.username,
        });
    return (
        <div className="bg-gray-800 bg-opacity-10 p-4 rounded border border-gray-600">
            <p className="text-center font-bold">Liked by</p>
            <ListUsers users={data ?? []}></ListUsers>
        </div>
    );
};

export const User: NextPage = () => {
    const router = useRouter();
    const username = router.query["username"] as string;

    const [followingFilter, setFollowingFilter] =
        useState<ConnectionStatus>("CONNECTED");
    const [followersFilter, setFollowersFilter] =
        useState<ConnectionStatus>("CONNECTED");

    const query = trpc.twitterUser.getByUsername.useQuery(
        {
            username: username,
        },
        { enabled: !!username && typeof username === "string" }
    );
    const queryData = query.data;
    const metadata = queryData?.twitterMetaData;
    const metrics = queryData?.twitterPublicMetrics;

    const queryFollowing = trpc.twitterUser.getFollowingById.useQuery(
        {
            id: queryData?.id as string,
            status: followingFilter,
            limit: 1000,
        },
        { enabled: !!queryData?.id }
    );
    const { status, data, error } = trpc.twitterUser.getFollowersById.useQuery(
        {
            id: queryData?.id as string,
            status: followersFilter,
            limit: 1000,
        },
        { enabled: !!queryData?.id }
    );

    if (status === "error") {
        return <span>Error: {error.message}</span>;
    }
    if (query.isInitialLoading) return <p>Loading...</p>;
    if (query.isError) return <p>Error while fetching user</p>;
    return (
        <main className="container flex flex-col min-h-screen items-center mx-auto py-16 ">
            {metadata && metrics && (
                <div className="container mx-auto flex flex-col max-w-xl bg-gray-800 bg-opacity-10 p-4 rounded border border-gray-600">
                    {metadata.profile_image_url && (
                        <img
                            className="rounded-full w-32 h-32"
                            src={metadata.profile_image_url.replace(
                                "normal",
                                "200x200"
                            )}
                        ></img>
                    )}
                    <div className="mb-2"></div>
                    <div className="flex flex-row items-center">
                        <div className="font-bold text-lg">
                            {queryData.name}
                        </div>
                        {metadata.verified && (
                            <svg
                                viewBox="0 0 24 24"
                                aria-label="Verified account"
                                role="img"
                                className="w-6 h-6 fill-blue-500"
                            >
                                <g>
                                    <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path>
                                </g>
                            </svg>
                        )}
                    </div>
                    <div className="font-light opacity-80">
                        {`@${queryData.username}`}
                    </div>
                    <div className="mb-4"></div>
                    <div>{metadata.description}</div>
                    <div className="mb-2"></div>
                    {metadata.createdAt && (
                        <div className="font-light opacity-80">
                            Joined{" "}
                            {metadata.createdAt.toLocaleDateString(undefined, {
                                month: "long",
                                year: "numeric",
                            })}
                        </div>
                    )}
                    <div className="mb-2"></div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row space-x-2">
                            <div>
                                <span className="font-bold">
                                    {metrics.following_count?.toLocaleString(
                                        undefined,
                                        { notation: "compact" }
                                    )}
                                </span>{" "}
                                <span className="font-light opacity-80">
                                    Following
                                </span>
                            </div>
                            <div>
                                <span className="font-bold">
                                    {metrics.followers_count?.toLocaleString(
                                        undefined,
                                        { notation: "compact" }
                                    )}
                                </span>{" "}
                                <span className="font-light opacity-80">
                                    Followers
                                </span>
                            </div>
                            <div>
                                <span className="font-bold">
                                    {metrics.tweet_count?.toLocaleString(
                                        undefined,
                                        { notation: "compact" }
                                    )}
                                </span>{" "}
                                <span className="font-light opacity-80">
                                    Tweets
                                </span>
                            </div>
                        </div>
                        <div className="font-bold">MARKED</div>
                    </div>
                </div>
            )}
            <div className="mb-2"></div>
            <div className="grid grid-cols-3 gap-4">
                {query.data?.id && (
                    <Following userId={query.data?.id}></Following>
                )}
                {query.data?.id && (
                    <Followers userId={query.data?.id}></Followers>
                )}

                {query.data?.username && (
                    <LikedBy username={query.data?.username}></LikedBy>
                )}
            </div>
        </main>
    );
};

export default User;
