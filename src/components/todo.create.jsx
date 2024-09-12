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
    <div>
      <textarea
        className="border-solid border-2 rounded-md border-slate-500"
        onChange={(e) => setTitle(e.target.value)}
      ></textarea>
      <textarea
        className="border-solid border-2 rounded-md border-slate-500"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-600 text-white rounded-lg p-2 font-bold"
        onClick={HandleCreateTodo}
      >
        Save
      </button>
    </div>
  );
};
