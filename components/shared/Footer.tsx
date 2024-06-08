import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full p-6 flex items-center justify-center text-sm font-normal bg-transparent gap-2">
      Designed and Developed By{"  "}
      <Link
        href="https://www.linkedin.com/in/mohammed-sameer-bb81b3151/"
        target="_blank"
        className="text-primary"
      >
        Mohammed Sameer
      </Link>
    </div>
  );
};

export default Footer;
