import React from "react";
import img from "../images/img.jpg";
import buy from "../images/buy.webp";
import { IoCallOutline } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="h-[20em] sm:h-[35em] md:h-[49em] lg:h-[40em] ">
      <div className=" bg-indigo-800 border-2  text-white text-center font-bold h-[15%] sm:h-[8%] md:h-[8%] lg:h-[8%] flex justify-center items-center sm:text-2xl md:text-3xl">
        Call to ORDER: +234 813 539 0524
      </div>
      <div className="h-[70%] w-[100%] flex justify-center items-center">
        <div className="hidden mx-auto p-4 lg:block lg:w-[25%] lg:h-[100%] bg-gray-200">
          <ul className="">
            <a href="">
              {" "}
              <li className=" border-2 border-indigo-400 mb-0 hover:bg-indigo-400 hover:text-white p-2 my-2">
                Phones and Tablets
              </li>{" "}
            </a>

            <a href="">
              {" "}
              <li className="border-2  border-indigo-400 hover:bg-indigo-400 hover:text-white p-2 my-2">
                Headphones
              </li>
            </a>

            <a href="">
              {" "}
              <li className=" border-2  border-indigo-400 hover:bg-indigo-400 hover:text-white p-2 my-2">
                Flat Screens
              </li>
            </a>
            <a href="">
              {" "}
              <li className="border-2  border-indigo-400 hover:bg-indigo-400 hover:text-white p-2 my-2">
                Household Items
              </li>
            </a>
            <a href="">
              {" "}
              <li className=" border-2  border-indigo-400 hover:bg-indigo-400 hover:text-white p-2 my-2">
                Computers
              </li>
            </a>
            <a href="">
              {" "}
              <li className="border-2  border-indigo-400 hover:bg-indigo-400 hover:text-white p-2 my-2">
                Laptops
              </li>
            </a>
            <a href="">
              {" "}
              <li className=" border-2  border-indigo-400 hover:bg-indigo-400 hover:text-white p-2 my-2">
                Inverters
              </li>
            </a>
            <a href="">
              {" "}
              <li className="border-2  border-indigo-400 hover:bg-indigo-400 hover:text-white p-2 my-2">
                Solar Panels
              </li>
            </a>
          </ul>
        </div>
        <div className="lg:w-[50%] w-full h-full">
          <img
            src={img}
            alt="spark10"
            className="h-full w-full object-cover object-fit"
          />
        </div>
        <div className="hidden p-4  lg:block lg:w-[25%] lg:h-[100%] bg-gray-200">
          <div className="bg-white h-[45%] mb-4 ">
            <ul className="border-4 border-indigo-400">
              <li className="bg-gray-100 border-b-2 border-indigo-400 p-1 my-2 hover:bg-gray-100 hover:bg-gray-200">
                <a
                  href=""
                  className="leading-none flex   items-center p-2 my-2 "
                >
                  <div>
                    <IoCallOutline className="text-3xl mr-2 text-yellow-800" />
                  </div>
                  <div>
                    <p className="text-lg font-bold">Contact us</p>
                    <p>+234 813 539 0524</p>
                  </div>
                </a>
              </li>
              <li className="bg-gray-100 p-1 my-2  hover:bg-gray-200">
                <a
                  href=""
                  className="leading-none flex hover:bg-gray-100 hover:bg-gray-200  items-center p-2 my-2"
                >
                  <div>
                    <FaBagShopping className="text-3xl mr-2 text-yellow-800" />
                  </div>
                  <div>
                    <p className="text-lg font-bold">Perfect Deals</p>
                    <p>up to 75% discount</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white h-[45%] border-4 border-indigo-400">
            <img
              src="https://cdn.pixabay.com/animation/2022/11/13/13/42/13-42-53-277_512.gif"
              className="h-full w-full object-cover object-fit"
            />
          </div>
        </div>
      </div>
      <div className="text-center font-bold  text-2xl lg:h-[20%] bg-indigo-800 h-[15%] flex justify-center items-center text-white md:text-3xl">
        <h3>Shop Free Delivery Deals</h3>
      </div>
    </div>
  );
};

export default Hero;
