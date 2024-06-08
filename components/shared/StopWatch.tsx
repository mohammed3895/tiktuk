"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { LuTimer } from "react-icons/lu";

const StopWatch = () => {
  const [timer, setTimer] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let count: string | number | NodeJS.Timeout | undefined;
    if (timer) {
      count = setInterval(() => setCounter(counter + 1), 10);
    }
    return () => clearInterval(count);
  }, [timer, counter]);

  const hours = Math.floor(counter / 63000);
  const minutes = Math.floor((counter % 63000) / 6000);
  const seconds = Math.floor((counter % 6000) / 100);
  const milliseconds = counter % 100;

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Button variant="secondary" className="w-full flex gap-2">
          <LuTimer className="w-5 h-5 text-primary" /> Stop Watch
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[280px] flex flex-col items-center justify-center py-16">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-3xl font-medium">
            {hours < 10 ? "0" + hours : hours} :{" "}
            {minutes < 10 ? "0" + minutes : minutes} :{" "}
            {seconds < 10 ? "0" + seconds : seconds} :{" "}
            {milliseconds < 10 ? "0" + milliseconds : milliseconds}
          </h1>
        </div>
        <div className="flex w-full items-center justify-between gap-4 mt-4">
          <Button onClick={() => setTimer(!timer)} className="w-full">
            {timer ? "STOP" : "START"}
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              setCounter(0);
              setTimer(false);
            }}
            className="w-full"
          >
            RESET
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StopWatch;
