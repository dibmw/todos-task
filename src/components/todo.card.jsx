"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const TodoCard = ({ id, title, content }) => {
  const router = useRouter();

  async function HandleDeleteTodo() {
    await fetch("https://v1.appbackend.io/v1/rows/Ugj56pBtdy0J", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([id]),
    });
    router.refresh();
  }

  return (
    <div className="p-2 border w-[200px] h-fit text-center rounded-xl transition hover:bg-slate-200">
      <h3 className="font-bold">{title}</h3>
      <p>{content}</p>
      <button
        className="bg-red-600 text-white font-bold p-2 rounded-md text-xs my-4"
        onClick={HandleDeleteTodo}
      >
        Delete
      </button>
    </div>
  );
};
