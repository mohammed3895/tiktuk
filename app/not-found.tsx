import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { TbMoodSadFilled } from "react-icons/tb";

const NotFound = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        {/* <TbMoodSadFilled className="w-24 h-24 text-destructive" /> */}
        <h1 className="text-[6rem] font-bold">404</h1>
        <p className="text-base text-muted-foreground">
          Oops, The page you are looking for is not found !
        </p>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "secondary" }), "mt-5")}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
