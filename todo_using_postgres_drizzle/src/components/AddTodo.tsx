"use client";

import { useState } from "react";
import { NewTodo } from "@/lib/Drizzle";
import { useRouter } from "next/navigation";

import { TfiArrowCircleRight } from "react-icons/tfi";

const AddTodo = () => {
  const [task, setTask] = useState<NewTodo | null>(null);
  const { refresh } = useRouter();

  async function handleSubmit() {
    try {
      if (task) {
        const resTask = await fetch("/api/todo", {
          method: "POST",
          body: JSON.stringify({
            task: task.task,
          }),
        });

        console.log("Task Response:", resTask);
        // refresh fumction from useRouter
        refresh();
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center justify-center space-x-5 w-full"
      >
        <input
          onChange={(e) => setTask({ task: e.target.value })}
          type="text"
          placeholder="Add a todo"
          className="w-full py-3.5 px-5 rounded-full focus:outline-secondary"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="p-3 shrink-0 rounded-full bg-gradient-to-b from-primary to-secondary text-white text-2xl"
        >
          <TfiArrowCircleRight />
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
