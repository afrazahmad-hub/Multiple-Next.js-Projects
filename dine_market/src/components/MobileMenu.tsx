import Link from "next/link";

// React Icons
import { RiCloseFill } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";

const MobileMenu = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: any;
  toggleSidebar: any;
}) => {
  return (
    <section
      className={`w-screen h-screen ${
        isOpen ? "fixed" : "hidden"
      } top-0 left-0 bg-gray-300 z-20 text-black grid place-items-center`}
    >
      <div
        className="absolute top-0 right-0 mr-[30px] mt-[10px] text-[24px]"
        onClick={toggleSidebar}
      >
        <RiCloseFill />
      </div>
      <div className="flex justify-between gap-x-32">
        <div className=" flex flex-col space-y-6 font-semibold">
          <Link href={"/Men"}>Men</Link>
          <Link href={"/Women"}>Women</Link>
          <Link href={"/Kids"}>Kids</Link>
          <Link href={"/AllProducts"}>All Products</Link>
        </div>
        <Link href={"/Checkout"}>
          <div className="flex bg-slate-100 w-11 h-11 rounded-full relative ">
            <FiShoppingCart className="m-3 text-xl" />
            <div className="w-4 h-4 bg-red-500 rounded-full absolute top-0 left-6 text-white flex justify-center items-center ">
              0
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default MobileMenu;
