"use client";

import Image from "next/image";
import Link from "next/link";

// redux
import { useSelector, useDispatch } from "react-redux";
// import RootState from "Store/store"
import { cartActions } from "./store/slice/cartSlice";

// React Icons
import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ toggleSidebar }: { toggleSidebar: any }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addToCart({ quantity: 1 }));
  };
  return (
    <section>
      <div className="hidden md:flex justify-between mt-8 items-center">
        <Link href={"/"}>
          <Image src={"/Logo.jpeg"} alt="Header logo" height={50} width={150} />
        </Link>
        <div className="space-x-10 font-semibold">
          {/* DYNAMIC ROUTE */}
          {/* <Link href={"category/male"}>Male</Link>
          <Link href={"category/female"}>Female</Link>
          <Link href={"category/kids"}>Kids</Link>
          <Link href={"category/AllProducts"}>All Products</Link> */}

          {/* STATC ROUTE */}
          <Link href={"/Men"}>Men</Link>
          <Link href={"/Women"}>Women</Link>
          <Link href={"/Kids"}>Kids</Link>
          <Link href={"/AllProducts"}>All Products</Link>
        </div>

        {/* <div className="flex space-x-1 border rounded-md py-[0.10]">
          <BiSearch className="text-xl text-center" />
          <input type="text" placeholder="What you are looking for ?" />
        </div> */}
        <Link href={"/Checkout"}>
          <div className="flex bg-slate-100 w-17 h-17 rounded-full relative ">
            <FiShoppingCart className="m-3 text-xl" />
            <div className="w-4 h-4 bg-red-500 rounded-full absolute top-0 left-6 text-white flex justify-center items-center ">
              0
            </div>
          </div>
        </Link>
      </div>
      <div className="md:hidden flex justify-between p-4">
        <Link href={"/"}>
          <Image src={"/Logo.jpeg"} alt="Header logo" height={50} width={150} />
        </Link>
        <button onClick={toggleSidebar} className="text-[24px] cursor-pointer">
          <AiOutlineMenu />
        </button>
      </div>
    </section>
  );
};

export default Navbar;
