import React from "react";
import img from "../images/heroo.jpg";

const Hero = () => {
  return (
    <div className="h-[20em] sm:h-[35em] md:h-[49em] lg:hidden">
      <div className=" bg-indigo-800 border-2  text-white text-center font-bold h-[15%] flex justify-center items-center sm:text-2xl md:text-3xl">
        Call to ORDER: +234 813 539 0524
      </div>
      <div className="h-[70%] ">
        <img src={img} alt="spark10" className="h-[100%] w-full " />
      </div>
      <div className="text-center font-bold  text-2xl bg-indigo-800 h-[15%] flex justify-center items-center text-white md:text-3xl">
        <h3>Shop Free Delivery Deals</h3>
      </div>
    </div>
  );
};

export default Hero;
