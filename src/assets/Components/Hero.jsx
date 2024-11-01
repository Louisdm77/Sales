import React from "react";
import img from "../images/heroo.jpg";

const Hero = () => {
  return (
    <div className="h-[20em] md:hidden lg:hidden">
      <div
        className=" bg-orange-200 text-center font-bold h-[15%] flex justify-center items-center"
        style={{ fontFamily: "Arial" }}
      >
        Call to ORDER: +234 813 539 0524
      </div>
      <div className="h-[70%] ">
        <img src={img} alt="spark10" className="h-[100%] w-full " />
      </div>
      <div className="text-center font-bold  text-xl bg-gray-300 h-[15%] flex justify-center items-center">
        <h3 style={{ fontFamily: "sans-serif" }}>Shop Free Delivery Deals</h3>
      </div>
    </div>
  );
};

export default Hero;
