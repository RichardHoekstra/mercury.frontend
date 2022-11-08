import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <main className="">
        <div className="container mx-auto flex min-h-screen flex-col  items-center py-16 text-white">
          <div className=""></div>
          <h1 className="text-5xl font-extrabold leading-normal md:text-[5rem] ">
            Mercury
          </h1>
          <h2 className="text-xl font-bold md:text-[rem]">A twitter tracker</h2>
          <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500"></div>
        </div>
      </main>
    </>
  );
};

export default Home;
