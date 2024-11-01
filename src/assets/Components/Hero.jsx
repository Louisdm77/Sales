import React from "react";
import img from "../images/heroo.jpg";

const Hero = () => {
  return (
    <div className="h-[15em]">
      <div
        className=" bg-orange-200 text-center font-bold"
        style={{ fontFamily: "sans-serif" }}
      >
        Call to ORDER: +234 813 539 0524
      </div>
      <div className="h-[70%] ">
        <img src={img} alt="spark10" className="h-[100%] w-full" />
      </div>
      <div className="text-center font-bold text-xl bg-gray-300">
        <h3 style={{ fontFamily: "sans-serif" }}>Shop Free Delivery Deals</h3>
      </div>
    </div>
  );
};

export default Hero;
