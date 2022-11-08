import { NextPage } from "next";
import Link from "next/link";

const Users: NextPage = () => {
  return (
    <div className="flex h-screen flex-row items-center justify-center space-x-10">
      <Link legacyBehavior href="/users/popular">
        <a className="text-6xl font-bold">Popular</a>
      </Link>
      <Link legacyBehavior href="/users/trending">
        <a className="text-6xl font-bold">Trending</a>
      </Link>
    </div>
  );
};

export default Users;
