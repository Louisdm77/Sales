import React from "react";
import { useState, useEffect } from "react";
import imgg from "../../assets/images/Bfriday.jpg";
import mega from "../../assets/images/mega.jpg";
import megap from "../../assets/images/megap.avif";
import meg from "../../assets/images/meg.jpg";
import { FaTags } from "react-icons/fa";

const Deals = () => {
  const [totalSec, setTotalSec] = useState(180000); // Total seconds to countdown from
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSec((prevSec) => {
        if (prevSec <= 0) {
          clearInterval(timer);
          return 0; // Stop at zero
        }
        return prevSec - 1; // Decrement by 1
      });
    }, 1000);
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);
  useEffect(() => {
    // Calculate hours, minutes, and seconds from totalSec
    setSec(Math.floor(totalSec % 60));
    setMin(Math.floor((totalSec % 3600) / 60));
    setHour(Math.floor(totalSec / 3600));
  }, [totalSec]); // Update when totalSec changes
  const formatTime = (h, m, s) => {
    return `${String(h).padStart(2, "0")}:${String(m).padStart(
      2,
      "0"
    )}:${String(s).padStart(2, "0")}`;
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-2 p-4 mx-auto md:hidden lg:hidden h-[130px]">
        <a href="#">
          <div className="col border border-gray-300 rounded-lg flex justify-center items-center h-full">
            <img
              src={imgg}
              alt=""
              className="object-cover rounded-lg h-full w-full"
            />
          </div>
        </a>
        <a href="#">
          <div className="col border border-gray-300 rounded-lg flex justify-center items-center h-full">
            <img
              src={mega}
              alt=""
              className="object-cover rounded-lg h-full w-full"
            />
          </div>
        </a>
        <a href="#">
          <div className="col border border-gray-300 rounded-lg flex justify-center items-center h-full">
            <img
              src={megap}
              alt=""
              className="object-cover rounded-lg h-full w-full"
            />
          </div>
        </a>
        <a href="#">
          <div className="col border border-gray-300 rounded-lg flex justify-center items-center h-full">
            <img
              src={meg}
              alt=""
              className="object-cover rounded-lg h-full w-full"
            />
          </div>
        </a>
      </div>
      <div>
        <div className="bg-orange-200 p-2 flex  items-center">
          <h2 className="flex text-lg text-center mx-2 font-bold">
            {" "}
            <FaTags className="text-orange-500" /> Flash Sales
          </h2>
          <div>
            <h2 className="mx-10 font-bold text-center text-lg">
              {hour < 10 ? "0" + hour : "" + hour}h :{" "}
              {min < 10 ? "0" + min : "" + min}m :{" "}
              {sec < 10 ? "0" + sec : "" + sec}s
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
