import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import { GiClockwork } from "react-icons/gi";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="w-full py-4 flex items-center justify-center gap-4">
      <Logo />
      <NavItems />
    </div>
  );
};

export default Navbar;
