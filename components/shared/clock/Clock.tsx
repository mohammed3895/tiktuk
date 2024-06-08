"use client";
import React, { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    setDate(new Date());
  }, [date]);

  return (
    <div className="flex items-center justify-center gap-3">
      <div className="w-12 h-12 min-w-12 rounded-lg p-4 flex items-center justify-center text-xl border">
        <h1>
          {(date.getHours() % 12 <= 9 ? "0" : "") + (date.getHours() % 12)}
        </h1>
      </div>
      :
      <div className="w-12 h-12 min-w-12 rounded-lg p-4 flex items-center justify-center text-xl border">
        <h1>{(date.getMinutes() < 10 ? "0" : "") + date.getMinutes()}</h1>
      </div>
      :
      <div className="w-12 h-12 min-w-12 rounded-lg p-4 flex items-center justify-center text-xl border">
        <h1>{(date.getSeconds() < 10 ? "0" : "") + date.getSeconds()}</h1>
      </div>
      :
      <div className="w-12 h-12 min-w-12 rounded-lg p-4 flex items-center justify-center text-xl border">
        <h1>{date.getHours() % 12 > 12 ? "AM" : "PM"}</h1>
      </div>
    </div>
  );
};

export default Clock;
