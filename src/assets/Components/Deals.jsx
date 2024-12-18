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
    <div className=" ">
      <div className="grid grid-cols-4 grid-rows-1 lg:grid-cols-5 lg:rows-1 gap-2 p-4 mx-auto  h-auto sm:gap-1 sm:p-2 md:gap-4 md:p-4 lg:gap-8 lg:p-12">
        <a href="#">
          <div className="col border border-gray-300 rounded-lg flex justify-center items-center h-full">
            <img
              src="https://ng.jumia.is/cms/0-1-category-pages/0-all-category/powerbanks_300x400.png"
              alt=""
              className="object-cover rounded-lg h-full w-full"
            />
          </div>
        </a>
        <a href="#" className="hidden lg:block">
          <div className="col border hidden lg:block border-gray-300 rounded-lg flex justify-center items-center h-full">
            <img
              src="https://ng.jumia.is/cms/0-1-category-pages/0-all-category/laptops_300x400.png"
              alt=""
              className="object-cover rounded-lg h-full w-full"
            />
          </div>
        </a>
        <a href="#">
          <div className="col border border-gray-300 rounded-lg flex justify-center items-center h-full">
            <img
              src="https://ng.jumia.is/cms/0-1-category-pages/appliances/300x400/freezers_300x400.png"
              alt=""
              className="object-cover rounded-lg h-full w-full"
            />
          </div>
        </a>
        <a href="#">
          <div className="col border border-gray-300 rounded-lg flex justify-center items-center h-full">
            <img
              src="https://ng.jumia.is/cms/0-1-category-pages/appliances/300x400/washing-machines_300x400.png"
              alt=""
              className="object-cover rounded-lg h-full w-full"
            />
          </div>
        </a>
        <a href="#">
          <div className="col border border-gray-300 rounded-lg flex justify-center items-center h-full">
            <img
              src="https://ng.jumia.is/cms/0-1-category-pages/0-all-category/smartphones_300x400.png"
              alt=""
              className="object-cover rounded-lg h-full w-full"
            />
          </div>
        </a>
      </div>
      <div>
        <div className="bg-indigo-800 p-2 flex  items-center text-white sm:p-4">
          <h2 className="flex text-lg text-center mx-2 font-bold sm:text-3xl md:text-4xl">
            {" "}
            <FaTags className="text-orange-500" /> Flash Sales
          </h2>
          <div>
            <h2 className="mx-10 font-bold text-center text-lg sm:text-2xl md:text-2xl">
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
