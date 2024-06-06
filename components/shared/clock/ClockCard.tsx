"use client";
import UserLocation from "@/components/Location";
import { cn } from "@/lib/utils";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCloudMoon } from "react-icons/fa6";
import { IoMdPartlySunny } from "react-icons/io";

const ClockCard = () => {
  const [date, setDate] = useState<Date>(new Date());
  var hours = date.getHours();

  let time;
  function getBg() {
    if (hours >= 19 || hours <= 5) {
      return (time = "night");
    }
    return (time = "day");
  }
  getBg();

  useEffect(() => {
    setDate(new Date());
  }, [date]);

  return (
    <div
      className={cn(
        "flex flex-col bg-background transition-colors ease-in-out shadow-xl shadow-zinc-400 items-center justify-center gap-5 w-fit text-xl p-8 rounded-lg border",
        { "bg-gray-700 text-white border-zinc-800": time === "night" }
      )}
    >
      <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
        {time === "day" ? (
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
      <div className="flex items-center justify-center gap-3">
        <div className="w-16 h-16 min-w-16 rounded-lg p-4 flex items-center justify-center text-2xl border">
          <h1>
            {(date.getHours() % 12 <= 9 ? "0" : "") + (date.getHours() % 12)}
          </h1>
        </div>
        :
        <div className="w-16 h-16 min-w-16 rounded-lg p-4 flex items-center justify-center text-2xl border">
          <h1>{(date.getMinutes() < 10 ? "0" : "") + date.getMinutes()}</h1>
        </div>
        :
        <div className="w-16 h-16 min-w-16 rounded-lg p-4 flex items-center justify-center text-2xl border">
          <h1>{(date.getSeconds() < 10 ? "0" : "") + date.getSeconds()}</h1>
        </div>
        :
        <div className="w-16 h-16 min-w-16 rounded-lg p-4 flex items-center justify-center text-2xl border">
          <h1>{date.getHours() % 12 > 12 ? "AM" : "PM"}</h1>
        </div>
      </div>
    </div>
  );
};

export default ClockCard;
