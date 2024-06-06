"use client";
import { NAVITEMS } from "@/constants/headerItems";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
interface ItemProps {
  item: (typeof NAVITEMS)[number];
}

const Navlink = ({ item }: ItemProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/${item.href}`)}
      className="flex w-full md:w-fit hover:bg-gray-100 transition-colors px-4 py-1.5 rounded-md items-center justify-center gap-2.5 capitalize"
    >
      <item.icon className="w-5 h-5 text-muted-foreground" />
      {item.name}
    </button>
  );
};

export default Navlink;
