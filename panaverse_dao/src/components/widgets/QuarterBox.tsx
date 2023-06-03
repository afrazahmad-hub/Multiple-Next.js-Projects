import { FC } from "react";

// This component is just for the sake of experiments and learning
// Otherwise we are using map() function to print the data of quarter boxes.
const QuarterBox: FC<{ title: string; desc: string; BGN: number }> = ({
  title,
  desc,
  BGN,
}) => {
  return (
    <div>
      <div className="border rounded-lg border-gray-400 w-auto px-8 py-12 relative">
        <h2 className="text-lg font-bold">{title}</h2>
        <h4 className="text-slate-600 mt-2">
          {desc}
          {/* CS-101: Object-Oriented Programming using TypeScript */}
        </h4>
        <span className="absolute top-0 right-10 text-9xl font-bold -z-20 text-gray-200 ">
          {BGN}
        </span>
      </div>
    </div>
  );
};

export default QuarterBox;
