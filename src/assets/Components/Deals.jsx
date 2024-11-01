import React from "react";
import imgg from "../../assets/images/Bfriday.jpg";
import mega from "../../assets/images/mega.jpg";
import megap from "../../assets/images/megap.avif";
import meg from "../../assets/images/meg.jpg";

const Deals = () => {
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
    </div>
  );
};

export default Deals;
