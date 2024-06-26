"use client";
import UserLocation from "@/components/Location";
import { cn } from "@/lib/utils";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { FaCloudMoon } from "react-icons/fa6";
import { IoMdPartlySunny } from "react-icons/io";
import Clock from "./Clock";
import { useTheme } from "next-themes";

const ClockCard = () => {
  const { theme, setTheme } = useTheme();
  const [date, setDate] = useState<Date>(new Date());
  var hours = date.getHours();

  useEffect(() => {
    if (hours >= 19 || hours <= 5) {
      return () => setTheme("dark");
    }
    return () => setTheme("light");
  }, [hours, setTheme]);

  return (
    <div
      className={cn(
        "flex flex-col bg-background transition-colors ease-in-out shadow-xl dark:shadow-zinc-700 shadow-zinc-400 items-center justify-center gap-5 w-fit text-xl p-8 rounded-lg border"
      )}
    >
      <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
        {theme === "dark" ? (
          <IoMdPartlySunny className="w-14 h-14 text-yellow-300" />
        ) : (
          <FaCloudMoon className="w-14 h-14 text-yellow-50" />
        )}
        {hours >= 5 && hours < 12 && <h1>Have a Good Mornning</h1>}
        {hours >= 12 && hours < 19 && <h1>Good Evinning</h1>}
        {hours >= 19 && hours < 24 && <h1>Good Night</h1>}
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="w-full flex  items-center justify-start gap-1 text-muted-foreground">
          <UserLocation />
        </div>
        <h1 className="text-sm font-normal capitalize text-nowrap">
          {moment(date).format("D MMM YYYY")}
        </h1>
      </div>
      <Clock />
    </div>
  );
};

export default ClockCard;
