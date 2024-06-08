import axios from "axios";
import React, { useEffect } from "react";
import { TbLoader2 } from "react-icons/tb";

let country: string;
let city: string;
const getLocation = async () => {
  const res = await axios.get("https://ipinfo.io?token=da5bd63581ff35");
  const data = await res.data;

  country = data.country;
  city = data.city;
};
getLocation();

const UserLocation = () => {
  return (
    <div className="flex items-center justify-center w-full h-14">
      {city ? (
        <h1 className="text-2xl text-primary font-normal capitalize">
          {city} - {country}
        </h1>
      ) : (
        <TbLoader2 className="w-5 h-5 animate-spin " />
      )}
    </div>
  );
};

export default UserLocation;
