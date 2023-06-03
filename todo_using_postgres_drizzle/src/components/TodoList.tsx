import { todo } from "@/lib/Drizzle";

const getData = async () => {
  // when use async function, always use tryCatch too
  try {
    const res = await fetch("http://127.0.0.1:3000/api/todo");

    // if not res, then througn error
    if (!res.ok) {
      throw new Error("Failed fetching Todo");
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const TodoList = async () => {
  const res: { data: todo[] } = await getData();

  return (
    <>
      {res.data.map((item) => {
        return (
          <div className="bg-gray-300 p-4 shadow rounded-lg flex items-center gap-4 font-medium my-4">
            <div className="bg-primary h-3 w-3 rounded-full"></div>
            <p className="text-lg">{item.task}</p>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
