import { NextPage } from "next";
import Link from "next/link";

const Users: NextPage = () => {
    return (
        <div className="h-screen flex flex-row items-center justify-center space-x-10">
            <Link href="/users/popular">
                <a className="text-6xl font-bold">Popular</a>
            </Link>
            <Link href="/users/trending">
                <a className="text-6xl font-bold">Trending</a>
            </Link>
        </div>
    );
};

export default Users;
