import ClockCard from "@/components/shared/clock/ClockCard";
import axios from "axios";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikTuk",
  description: "Time management platform",
};

async function Home() {
  const data = await axios
    .get(`https://api.ipregistry.co/?key=zrzumjas2eyefebt`)
    .then((res) => {
      return res.data.location.country;
    })
    .catch((e) => {
      console.log(e);
    });
  console.log(data);
  return (
    <div className="w-full h-full flex items-center justify-center app">
      <div className="w-full h-full flex items-center justify-center  backdrop-blur-md z-10">
        <div className="w-1/2 h-full flex flex-col gap-6 items-center justify-center text-center">
          <ClockCard country={data.name} flag={data.flag.twemoji} />
          <div className="w-full py-4">
            <h1>TickTuk is time management platform</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
