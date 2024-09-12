import React from "react";

export const TodoCard = ({ title, content }) => {
  return (
    <div className="p-4 w-fit border">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};
