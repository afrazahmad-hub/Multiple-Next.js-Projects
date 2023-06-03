import { FC } from "react";

interface IParam {
  header: string;
  description: string;
  number: number;
  haveBorder?: boolean;
}

const QuarterBoxes: FC<IParam> = ({
  header,
  description,
  number,
  haveBorder = true,
}) => {
  return (
    <div>
      <div
        className={`rounded-lg border-gray-400 w-auto px-8 py-12 relative ${
          haveBorder && "border"
        }`}
      >
        <h2 className="text-lg font-bold">{header}</h2>
        <h4 className="text-slate-600 mt-2">
          {description}
          {/* CS-101: Object-Oriented Programming using TypeScript */}
        </h4>
        <span className="absolute top-0 right-10 text-9xl font-bold -z-20 text-gray-200 ">
          {number}
        </span>
      </div>
    </div>
  );
};

export default QuarterBoxes;
