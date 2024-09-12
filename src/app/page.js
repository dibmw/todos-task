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
    <div>
      <h1>Hello, Simple CRD Task!</h1>
      <TodoCreate />
      <div>
        {data.map((todo) => {
          return (
            <TodoCard
              key={todo._id}
              title={todo.title}
              content={todo.content}
            />
          );
        })}
      </div>
    </div>
  );
}
