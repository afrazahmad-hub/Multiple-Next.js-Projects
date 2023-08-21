"use client";

import { useState } from "react";

const ProductCounter = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="flex justify-center items-center gap-x-8">
      <button
        className="flex justify-center hover:shadow-xl cursor-pointer h-9 w-9 rounded-full text-4xl bg-slate-200"
        onClick={() => setCount(count > 1 ? count - 1 : 1)}
      >
        -
      </button>
      <h2 className="text-lg font-semibold">{count}</h2>
      <button
        className="flex justify-center hover:shadow-xl cursor-pointer h-9 w-9 rounded-full text-2xl bg-slate-200"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default ProductCounter;
