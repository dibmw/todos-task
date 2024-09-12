import React from "react";

export const TodoCard = ({ title, content }) => {
  return (
    <div className="p-2 border w-[200px] h-fit text-center rounded-xl transition hover:bg-slate-200">
      <h3 className="font-bold">{title}</h3>
      <p>{content}</p>
      <button className="bg-red-600 text-white font-bold p-2 rounded-md text-xs my-4">
        Delete
      </button>
    </div>
  );
};
