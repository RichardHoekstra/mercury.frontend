import { signIn, signOut, useSession } from "next-auth/react";

export const Auth = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-row items-center justify-center gap-4">
      {sessionData && (
        <div className="flex items-center space-x-2">
          {sessionData?.user?.image && (
            <img
              className="h-10 w-10 rounded-full"
              src={sessionData.user?.image}
            ></img>
          )}
          <p className="text-2xl text-white focus:outline-none ">
            {sessionData?.user?.name}
          </p>
        </div>
      )}
      <button
        className="rounded-md border px-4 py-2  text-xl text-white shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-800 "
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
