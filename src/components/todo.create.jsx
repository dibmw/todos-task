"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const TodoCreate = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function HandleCreateTodo() {
    await fetch("https://v1.appbackend.io/v1/rows/Ugj56pBtdy0J", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ title, content }]),
    });

    router.refresh();
  }

  return (
    <div className="w-fit flex flex-col justify-center mb-8">
      <div className="flex text-center gap-x-4">
        <div>
          <h1 className="text-xl font-bold">Input Title</h1>
          <textarea
            className="border-solid border-2 rounded-md border-slate-500"
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
        </div>
        <div>
          <h1 className="text-xl font-bold">Input Content</h1>
          <textarea
            className="border-solid border-2 rounded-md border-slate-500"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
      </div>
      <button
        className="bg-blue-600 text-white rounded-lg p-2 font-bold"
        onClick={HandleCreateTodo}
      >
        Save
      </button>
    </div>
  );
};
