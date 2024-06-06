import axios from "axios";
import React, { useEffect } from "react";

let country: string;
let city: string;
const getLocation = async () => {
  const res = await axios.get("https://ipinfo.io?token=da5bd63581ff35");
  const data = await res.data;

  country = data.country;
  city = data.city;
  console.log(country);
};

getLocation();

const UserLocation = () => {
  return (
    <div>
      {city && (
        <h1 className="text-3xl text-primary font-medium capitalize">
          {city} - {country}
        </h1>
      )}
    </div>
  );
};

export default UserLocation;
