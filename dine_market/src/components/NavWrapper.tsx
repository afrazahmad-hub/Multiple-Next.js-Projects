"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import MobileMenu from "@/components/MobileMenu";

const NavWrapper = () => {
  const [isOpen, setIsOpen] = useState<any>(false);

  const toggleSidebar = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <MobileMenu isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default NavWrapper;
