import Wrapper from "@/components/shared/Wrapper";
import outcome from "@/assets/images/outcome-poster.png";
import Image from "next/image";

import Button from "@/components/shared/Button";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1">
            {/* Left Side */}
            <h4 className="text-teal-800 text-lg font-semibold">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="text-4xl md:text-6xl font-bold">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="text-slate-600 mt-6 text-xl">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet.
            </p>
            <p className="text-slate-600 mt-6 text-xl">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div className="mt-6 hover:scale-105 duration-300 w-[132px]">
              <Button text="Apply Now" />
            </div>
          </div>
          <div className="flex-1">
            {/* Right Side */}
            <Image src={outcome} alt="Hero Poster" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
