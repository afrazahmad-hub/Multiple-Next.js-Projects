import Image from "next/image";
import Link from "next/link";
import React from "react";

// React Icons
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

const Info = () => {
  return (
    <section className="flex flex-col md:flex-row md:justify-center mt-28  space-x-10">
      <div className="grid grid-cols-2 md:grid-cols-3 w-[35rem] justify-center space-y-2">
        <div className="flex flex-col col-span-1">
          <h2 className="text-xl text-gray-600 font-bold">Company</h2>
          <div className="flex flex-col mt-4 text-lg text-gray-600">
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Terms of Use</Link>
            <Link href={"/"}>Privacy Policy</Link>
            <Link href={"/"}>How it Works</Link>
            <Link href={"/"}>Contact Us</Link>
          </div>
        </div>
        <div className="flex flex-col col-span-1 ">
          <h2 className="text-xl text-gray-600 font-bold">Support</h2>
          <div className="flex flex-col mt-4 text-lg text-gray-600">
            <Link href={"/"}>Support Careers</Link>
            <Link href={"/"}>24h Servise</Link>
            <Link href={"/"}>Quick Chat</Link>
          </div>
        </div>
        <div className="flex flex-col col-span-1">
          <h2 className="text-xl text-gray-600 font-bold">Contact</h2>
          <div className="flex flex-col mt-4 text-lg text-gray-600">
            <Link href={"/"}>Whatsapp</Link>
            <Link href={"/"}>24h Support</Link>
          </div>
        </div>
      </div>
      <div className="flex  mt-4 md:mt-0 justify-center">
        <div>
          <Image src={"/Logo.jpeg"} alt="Logo" width={200} height={100} />
          <p className="text-gray-600 text-lg w-80 mt-6">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
        </div>
      </div>

      <div className="flex flex-row mt-6 md:mt-0 justify-center space-x-6 text-2xl">
        <Link
          href={"https://www.facebook.com/afrazahmad697/"}
          target="blank"
          className="bg-gray-200 h-10 w-10 flex justify-center items-center rounded-lg hover:bg-gray-300 duration-300"
        >
          <FaFacebookF />
        </Link>
        <Link
          href={"https://twitter.com/frazi313"}
          target="blank"
          className="bg-gray-200 h-10 w-10 rounded-lg flex justify-center items-center hover:bg-gray-300 duration-300"
        >
          <FaTwitter />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/afraz-ahmad-5b80a0174/"}
          target="blank"
          className="bg-gray-200 h-10 w-10 rounded-lg flex justify-center items-center hover:bg-gray-300 duration-300"
        >
          <FaLinkedin />
        </Link>
      </div>
    </section>
  );
};

export default Info;
