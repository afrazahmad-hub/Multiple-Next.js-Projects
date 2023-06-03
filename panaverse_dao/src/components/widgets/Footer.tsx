import Image from "next/image";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col gap-y-10 px-6 sm:grid sm:grid-cols-[50%,25%,25%] sm:gap-x-4 h-72 border border-slate-200">
      <div className="max-w-2xl px-8 py-4">
        <div>
          <Image
            src={"/logo.png"}
            alt="Panaverse Logo"
            width={180}
            height={180}
          />

          <p className="text-slate-600 mt-8">
            Certified Web 3.0 and Metaverse Developer A One and Quarter Years
            Panaverse DAO Earn as you Learn Program Getting Ready for the Next
            Generation of the Internet.
          </p>
        </div>
        <div className="flex mt-4 gap-x-4 text-3xl text-[#00616C] ">
          <Link
            href={"https://web.facebook.com/groups/panaverse?_rdc=1&_rdr"}
            target="blank"
          >
            <BsFacebook className="hover:scale-125 duration-300 cursor-pointer" />
          </Link>
          <Link
            href={"https://www.youtube.com/@panaverse/streams"}
            target="blank"
          >
            <BsYoutube className="hover:scale-125 duration-300 cursor-pointer" />
          </Link>
          <Link href={"https://github.com/panaverse"} target="blank">
            <BsGithub className="hover:scale-125 duration-300 cursor-pointer" />
          </Link>
          <Link href={"https://twitter.com/Panaverse_edu"} target="blank">
            <BsTwitter className="hover:scale-125 duration-300 cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 max-w-md p-4">
        <h3 className="text-lg font-bold">Programs</h3>
        <p className="text-slate-600 hover:text-teal-600 hover:scale-105 duration-300 cursor-pointer">
          Web3 and Metaverse Developer
        </p>
        <p className="text-slate-600 hover:text-teal-600 hover:scale-105 duration-300 cursor-pointer">
          Artificial Intelligence
        </p>
        <p className="text-slate-600 hover:text-teal-600 hover:scale-105 duration-300 cursor-pointer">
          Cloud Native Computing
        </p>
        <p className="text-slate-600 hover:text-teal-600 hover:scale-105 duration-300 cursor-pointer">
          Ambient Computing and IOT
        </p>
        <p className="text-slate-600 hover:text-teal-600 hover:scale-105 duration-300 cursor-pointer">
          Genomics and Bioinformatics
        </p>
        <p className="text-slate-600 hover:text-teal-600 hover:scale-105 duration-300 cursor-pointer">
          Network programmability and Automation
        </p>
      </div>
      <div className="flex flex-col gap-y-2 max-w-md p-4">
        <h3 className="text-lg font-bold">Pages</h3>
        <p className="text-slate-600 hover:text-teal-600 hover:scale-105 duration-300 cursor-pointer">
          Quarter I
        </p>
        <p className="text-slate-600 hover:text-teal-600 hover:scale-105 duration-300 cursor-pointer">
          Quarter II
        </p>
        <p className="text-slate-600 hover:text-teal-600 hover:scale-105 duration-300 cursor-pointer">
          Quarter III
        </p>
      </div>
    </div>
  );
};

export default Footer;
