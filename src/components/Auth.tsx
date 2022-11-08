import { signIn, signOut, useSession } from "next-auth/react";

export const Auth = () => {
    const { data: sessionData } = useSession();

    return (
        <div className="flex flex-row items-center justify-center gap-4">
            {sessionData && (
                <div className="flex items-center space-x-2">
                    {sessionData?.user?.image && (
                        <img
                            className="rounded-full h-10 w-10"
                            src={sessionData.user?.image}
                        ></img>
                    )}
                    <p className="text-2xl text-gray-800 dark:text-white focus:outline-none ">
                        {sessionData?.user?.name}
                    </p>
                </div>
            )}
            <button
                className="rounded-md border text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 px-4 py-2 text-xl shadow-lg "
                onClick={sessionData ? () => signOut() : () => signIn()}
            >
                {sessionData ? "Sign out" : "Sign in"}
            </button>
        </div>
    );
};
