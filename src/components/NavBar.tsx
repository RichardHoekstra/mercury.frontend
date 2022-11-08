import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Auth } from "./Auth";

export const NavBar = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string | undefined>(undefined);
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const menuItems = [
    { name: "Home", url: "/" },
    { name: "Users", url: "/users" },
    { name: "Tweets", url: "/tweets" },
    { name: "Discover", url: "/discover" },
    { name: "Admin", url: "/admin" },
  ];

  useEffect(() => {
    setCurrentPath(router.pathname);
  }, [router]);

  return (
    <header>
      <nav className=" border-gray-200 bg-gray-800 px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
              Mercury
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Auth></Auth>
            <button
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm  text-gray-400 hover:bg-gray-700 focus:ring-2 focus:ring-gray-600 lg:hidden"
              onClick={() => setMenuCollapsed(!menuCollapsed)}
              aria-controls="mobile-menu-2"
              aria-expanded={!menuCollapsed}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              menuCollapsed && "hidden"
            } w-full items-center justify-between lg:order-1 lg:flex lg:w-auto`}
            id="mobile-menu-2"
          >
            <div className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              {menuItems.map((item) => {
                return (
                  <Link href={item.url} key={item.name}>
                    <div
                      className={`block py-2 pr-4 pl-3  ${
                        currentPath === item.url
                          ? "bg-primary-700 lg:text-primary-700 rounded text-white lg:bg-transparent lg:p-0"
                          : "lg:hover:text-primary-700 border-b border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                      }`}
                    >
                      {item.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
