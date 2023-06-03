import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-primary to-secondary h-screen flex justify-center items-center">
      <div className="bg-white max-w-md w-full px-3 py-4 rounded-lg">
        {/* Todo lisat  */}
        {/* @ts-ignore */}
        <TodoList />

        {/* Add Todo */}
        {/* @ts-ignore */}
        <AddTodo />

        <div className="bg-black/70  h-1.5 mx-auto w-1/2 rounded mt-6"></div>
      </div>
    </main>
  );
}
