import { TodoCard } from "@/components/todo.card";
import { TodoCreate } from "@/components/todo.create";

async function getTodos() {
  try {
    const res = await fetch("https://v1.appbackend.io/v1/rows/Ugj56pBtdy0J", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Page() {
  const { data } = await getTodos();

  return (
    <>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl m-4 font-extrabold">Hello, Simple CRD Task!</h1>
        <TodoCreate />
      </div>
      <div className="grid gap-4 justify-items-center md:grid-cols-2 lg:grid-cols-4">
        {data?.map((todo) => {
          return (
            <TodoCard
              key={todo._id}
              id={todo._id}
              title={todo.title}
              content={todo.content}
            />
          );
        })}
      </div>
    </>
  );
}
