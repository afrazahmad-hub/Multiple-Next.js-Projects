import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wrapper from "@/components/shared/Wrapper";
import logo from "/public/logo.png";

const Header = () => {
  return (
    <header className="bg-white top-0 sticky z-10 ">
      <Wrapper>
        <div className="flex justify-between py-2 items-center">
          <Image src={logo} alt="Panaverse dao logo" height={100} width={100} />

          <ul className="flex space-x-4 font-semibold">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <select>
                <option>
                  <Link href={"/"}>Courses</Link>
                </option>
                <option>
                  <Link href={"/"}>Artificial Intelligence</Link>
                </option>
                <option>
                  <Link href={"/"}>Blockchain Computing</Link>
                </option>
                <option>
                  <Link href={"/"}>Cloud Native Computing</Link>
                </option>
                <option>
                  <Link href={"/"}>Internet of Things</Link>
                </option>
              </select>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
