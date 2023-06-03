import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
// import QuarterBox from "@/components/widgets/QuarterBox";
import { quarterBoxes } from "@/components/Webdata/Data";
import QuarterBoxes from "@/components/shared/QuarterBoxes";

const CoreTrackers = () => {
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        {/* Content */}
        <div className="max-w-screen-md">
          <h4 className="text-teal-800 text-lg font-semibold">
            Program of Studies
          </h4>
          <h2 className="text-4xl font-bold mt-3">
            "Core Courses <br /> (Common in All Specializations):"
          </h2>
          <p className="text-slate-600 mt-6 text-xl">
            Every participant of the program will start completing the following
            three core courses:
          </p>
          <div className="mt-6 hover:scale-105 duration-300 w-[132px]">
            <Button text="Learn More" />
          </div>
        </div>
        {/* Boxes  */}
        <div className="flex flex-col md:flex-row my-20 gap-x-6 gap-y-4 ">
          {/* <QuarterBox
            title="Quarter I"
            desc="CS-101: Object-Oriented Programming using TypeScript"
            BGN={1}
          /> */}

          {quarterBoxes.map((item) => {
            return (
              <QuarterBoxes
                key={item.number}
                header={item.title}
                description={item.desc}
                number={item.number}
              />
              // <div className="flex flex-col flex-1 border rounded-lg border-gray-200 px-8 py-16 relative">
              //   <h2 className="text-lg font-bold">{item.title}</h2>
              //   <h4 className="text-slate-600 mt-2">{item.desc} </h4>
              //   <span className="absolute -top-10 right-10 text-[150px] font-bold -z-20 text-gray-200 ">
              //     {/* {item.number} */} {i + 1}
              //   </span>
              // </div>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTrackers;
