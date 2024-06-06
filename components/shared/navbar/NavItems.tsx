"use client";
import AddEvent from "@/components/AddEvent";
import AddProject from "@/components/AddProject";
import { NAVITEMS } from "@/constants/headerItems";
import Navlink from "./Navlink";

const NavItems = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-3">
      <div className="flex items-center justify-center gap-3 flex-col md:flex-row w-full md:w-fit">
        {NAVITEMS.map((item, i) => (
          <Navlink key={i} item={item} />
        ))}
      </div>
      <div className="w-full md:w-[380px] py-3 flex flex-col md:flex-row gap-3 items-center justify-center">
        <AddEvent />
        <AddProject />
      </div>
    </div>
  );
};

export default NavItems;
