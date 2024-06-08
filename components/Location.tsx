"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbLoader2 } from "react-icons/tb";

let ctry: string;
let cty: string;
const getLocation = async () => {
  const res = await axios.get("https://ipinfo.io?token=da5bd63581ff35");
  const data = await res.data;

  ctry = data.country;
  cty = data.city;
};
getLocation();

const UserLocation = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    setCountry(ctry);
    setCity(cty);
  }, []);

  if (!country)
    return (
      <div className="flex items-center justify-center w-full h-14">
        <TbLoader2 className="w-5 h-5 animate-spin " />
      </div>
    );

  return (
    <div className="flex items-center justify-center w-full h-14">
      <h1 className="text-2xl text-primary font-normal capitalize">
        {city} - {country}
      </h1>
    </div>
  );
};

export default UserLocation;
