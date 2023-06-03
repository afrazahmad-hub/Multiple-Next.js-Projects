"use client";

import React, { useState } from "react";
import Wrapper from "@/components/shared/Wrapper";
import QuarterBoxes from "@/components/shared/QuarterBoxes";
import { programData } from "@/components/Webdata/Data";
import Image from "next/image";

const SpecializedTrack = () => {
  const [selectedProgram, setSelectedProgram] = useState("WMD");

  const currentProgram = programData.find(
    (item) => item.slug == selectedProgram
  );

  console.log(selectedProgram);

  return (
    <section>
      <Wrapper>
        {/* Head */}
        <div className="max-w-screen-sm">
          <h2 className="text-4xl font-bold mt-3">Specialized Tracks:</h2>
          <p className="text-slate-600 mt-6 text-xl">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>
        <div className="mt-10 flex flex-col-reverse md:flex-row gap-x-6 gap-y-8">
          {/* Content Left */}
          <div className="border border-slate-400 rounded-xl p-8 shadow-xl basis-8/12 self-start sticky top-20">
            <h4 className="text-teal-600 text-lg font-semibold">
              Specialized Program
            </h4>
            <h3 className="text-2xl font-bold">{currentProgram?.header}</h3>
            <p>{currentProgram?.description}</p>
            <button className="text-teal-900 text-lg gap-1 underline mt-4 flex items-center">
              Leran More
              <svg
                className="mt-2"
                width="10"
                height="13"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row mt-4 gap-4">
              {currentProgram?.quarters.map((items) => (
                <QuarterBoxes
                  key={items.number}
                  header={items.header}
                  description={items.description}
                  number={items.number}
                  haveBorder={false}
                />
              ))}
            </div>
          </div>
          {/* Content right */}

          <div className="basis-4/12 px-4 py-6 flex flex-col gap-y-4  ">
            {programData.map((item, i) => (
              <div
                onClick={() => setSelectedProgram(item.slug)}
                key={item.slug}
                className="flex items-center cursor-pointer gap-x-4"
              >
                <div className=" h-20 w-40">
                  <Image
                    src={item.image}
                    alt={item.header}
                    className="object-cover rounded-md"
                  />
                </div>
                <div>
                  <h3 className="text-primary font-medium">
                    Specialized Program
                  </h3>
                  <h4 className="text-xl font-semibold">{item.header}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTrack;
