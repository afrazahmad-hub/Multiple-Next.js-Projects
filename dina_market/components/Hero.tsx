import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 mt-16">
      <div>
        <h4 className="h-10 w-24 text-blue-700 font-bold py-2 px-3 bg-blue-100 rounded-md">
          Sale 70%
        </h4>

        <h1 className="text-5xl font-bold mt-6 ">
          An Industrial Take on Streetwear
        </h1>

        <p className="text-gray-500 w-64 mt-6 text-lg">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>

        <div className="flex items-center space-x-2 bg-gray-900 text-white w-32 h-16 px-2 py-3 mt-10">
          <FiShoppingCart className="text-2xl" />{" "}
          <button>Start Shopping</button>
        </div>
        <div className="flex mt-16 space-x-6">
          <Image src={"/Featured1.jpeg"} alt="logo1" width={120} height={70} />
          <Image src={"/Featured2.jpeg"} alt="logo2" width={120} height={70} />
          <Image src={"/Featured3.jpeg"} alt="logo3" width={120} height={70} />
          <Image src={"/Featured4.jpeg"} alt="logo4" width={120} height={70} />
        </div>
      </div>
      <div className="mt-6">
        <div className="bg-orange-100 h-[27rem] w-[27rem] md:h-[35rem] md:w-[35rem] rounded-full absolute"></div>

        <div className="relative md:-top-7">
          <Image
            src={"/header.jpeg"}
            alt="Header image"
            width={700}
            height={900}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
