import type { NextPage } from "next";
import { useState } from "react";
import { trpc } from "../../utils/trpc";
import type { AppRouter } from "../../server/trpc/router/_app";
import type { inferProcedureInput } from "@trpc/server";
import Link from "next/link";
import { TUser } from "@prisma/client";

type queryInputType = inferProcedureInput<AppRouter["tweet"]["popular"]>;
type intervalOptionType = queryInputType["interval"];

const EditMarkedUser = (user: TUser) => {
  const [editable, setEditable] = useState(false);
  const [weight, setWeight] = useState<number | undefined>(user.markedWeight);

  const editWeight = trpc.markedUsers.setWeight.useMutation();
  const handleSave = () => {
    if (weight) {
      editWeight.mutate({ username: user.username, weight: weight });
    }
  };

  const markUser = trpc.markedUsers.setMark.useMutation();
  const handleDelete = () => {
    markUser.mutate({ username: user.username, marked: false });
  };

  return (
    <div
      className="container mx-auto flex max-w-xl flex-col rounded border border-gray-600 bg-gray-800 bg-opacity-10 p-4"
      key={user.id}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row space-x-4">
          <Link
            className="flex w-[20ch] flex-col truncate"
            target="_blank"
            href={`https://twitter.com/${user.username}`}
          >
            <span className="font-bold">{user.name}</span>
            <span className="font-light opacity-70">@{user.username}</span>
          </Link>

          <div className="flex space-x-1">
            <span className="font-bold">{user.markedWeight}</span>
            <span className="font-light opacity-70">weight</span>
          </div>
        </div>
        <div className="flex flex-row space-x-1">
          <button
            onClick={() => setEditable(!editable)}
            className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
          >
            EDIT
          </button>
          <button
            onClick={() => handleDelete()}
            className="rounded border border-red-500 bg-transparent py-2 px-4 font-semibold text-red-700 hover:border-transparent hover:bg-red-500 hover:text-white"
          >
            DELETE
          </button>
        </div>
      </div>
      {editable && (
        <div>
          <div className="mb-2"></div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-2">
              <label
                htmlFor="small-input"
                className="mb-2 block text-sm font-medium text-white"
              >
                Weight
              </label>
              <input
                onChange={(e) => {
                  const value = parseInt(
                    e.target.value.replace(/[^0-9]/gi, "")
                  );
                  if (!isNaN(value)) {
                    setWeight(value);
                  } else {
                    setWeight(undefined);
                  }
                }}
                value={weight?.toString()}
                type="text"
                id="small-input"
                className="block w-full rounded-lg border  border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-xs"
              ></input>
            </div>
            <button
              onClick={() => handleSave()}
              className="rounded border border-green-500 bg-transparent py-2 px-4 font-semibold text-green-700 hover:border-transparent hover:bg-green-500 hover:text-white"
            >
              SAVE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Admin: NextPage = () => {
  const { status, data, error } = trpc.markedUsers.getAll.useQuery();

  const [inputUsername, setInputUsername] = useState<string | undefined>("");

  const addUser = trpc.markedUsers.setMark.useMutation();
  const handleAddUser = () => {
    if (inputUsername) {
      addUser.mutate({ username: inputUsername, marked: true });
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto flex max-w-xl flex-col rounded border border-gray-600 bg-gray-800 bg-opacity-10 p-4">
        <div className="flex flex-col items-center space-x-2">
          <label
            htmlFor="small-input"
            className="mb-2 block text-sm font-medium text-white"
          >
            Add user
          </label>
          <div className="flex w-full space-x-2">
            <input
              onChange={(e) => {
                setInputUsername(e.target.value);
              }}
              value={inputUsername}
              type="text"
              id="small-input"
              className="block w-full rounded-lg border  border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-xs"
            ></input>
            <button
              onClick={() => handleAddUser()}
              className="rounded border border-green-500 bg-transparent py-2 px-4 font-semibold text-green-700 hover:border-transparent hover:bg-green-500 hover:text-white"
            >
              ADD
            </button>
          </div>
        </div>
      </div>

      <div>
        {data &&
          data.map((user) => {
            return <EditMarkedUser key={user.id} {...user}></EditMarkedUser>;
          })}
      </div>
    </div>
  );
};

export default Admin;
