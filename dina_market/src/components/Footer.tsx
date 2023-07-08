import Link from "next/link";

const Footer = () => {
  return (
    <section className="md:h-14">
      <div className="bg-gray-900 h-[2px] w-full mt-2"></div>
      <div className="flex flex-col md:flex-row md:mt-10 md:justify-between md:items-center space-y-4 md:space-y-0 mt-2 ">
        <p className="text-xl text-gray-600">
          Copyright &copy; 2022 Dine Market
        </p>
        <p className="text-xl text-gray-600">Design by. Weird Design Studio</p>
        <p className="text-xl text-gray-600">
          Code by. afrazahmad-hub on
          <Link href={"https://github.com/afrazahmad-hub"}>
            <b> github</b>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Footer;
