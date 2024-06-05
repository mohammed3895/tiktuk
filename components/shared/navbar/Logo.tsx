import Link from "next/link";
import React from "react";
import { GiClockwork } from "react-icons/gi";

const Logo = () => {
  return (
    <div>
      <Link
        href="/"
        className="text-lg uppercase font-normal text-primary flex items-center justify-center gap-1"
      >
        <GiClockwork className="w-7 h-7" />
        TickTuk
      </Link>
    </div>
  );
};

export default Logo;
