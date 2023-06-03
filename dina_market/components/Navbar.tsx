import Image from "next/image";
import Link from "next/link";

// React Icons
import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
const Navbar = () => {
  return (
    <section>
      <div className="flex justify-between mt-8 items-center">
        <Image src={"/Logo.jpeg"} alt="Header logo" height={50} width={150} />
        <div className="space-x-6 font-semibold">
          <Link href={"/"}>Female</Link>
          <Link href={"/"}>Male</Link>
          <Link href={"/"}>Kids</Link>
          <Link href={"/"}>All Products</Link>
        </div>

        <div className="flex space-x-1 border rounded-md py-[0.10]">
          <BiSearch className="text-xl text-center" />
          <input type="text" placeholder="What you are looking for ?" />
        </div>
        <div className="flex bg-slate-100 w-11 h-11 rounded-full relative ">
          <FiShoppingCart className="m-3 text-xl" />
          <div className="w-4 h-4 bg-red-500 rounded-full absolute top-0 left-6 text-white flex justify-center items-center ">
            0
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
