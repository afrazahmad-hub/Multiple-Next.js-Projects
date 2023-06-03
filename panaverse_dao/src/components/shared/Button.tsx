import { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button className="bg-teal-700 rounded-full text-white px-6 py-3 font-semibold ">
      {text}
    </button>
  );
};

export default Button;
