import react from "react";
import { useState, useRef, useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTags } from "react-icons/fa";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { UserView } from "../Context/viewContext.jsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css";

// import required modules
import { Navigation } from "swiper";

const Header = (props) => {
  const {
    viewItem,
    setViewItem,
    currentProduct,
    setCurrentProduct,
    cartItems,
    setCartItems,
    cartNum,
    setCartNum,
  } = UserView();
  return (
    <div className="h-auto  bg-indigo-900 py-2">
      <div className="  px-4 py-2 ">
        <div className="h-[20%] flex justify-between ">
          <div className="flex items-center justify-between items-center text-xl">
            <button
              onClick={() => {
                props.setSideShow(true);
                console.log(props.sideShow);
              }}
            >
              <RxHamburgerMenu className="text-white text-4xl md:text-5xl font-bold lg:hidden" />
            </button>
            <h3 className="mx-5 text-white font-bold italic sm:text-3xl md:text-4xl">
              Louis<span className="text-yellow-400">DM</span>
            </h3>
          </div>
          <div className="mt-5 hidden relative lg:block lg:w-[70%] lg:mx-auto">
            <form action="#">
              <input
                type="text"
                className="block w-[100%] h-[40px] mx-auto rounded-3xl relative px-2 text-sm sm:px-8 sm:text-xl sm:h-[45px] lg:mx-auto"
                placeholder="What can we help you find today?"
              />
              <button className="pointer">
                <IoSearchOutline className="text-white bg-yellow-400 font-bold text-4xl p-2 rounded-3xl absolute top-1 right-1 lg:top-2 " />
              </button>
            </form>
          </div>
          <div className="flex  items-center me-0 justify-between ">
            <FaRegUser className="text-white mx-5 font-bold  sm:text-2xl md:text-4xl" />

            <Link to="/cart">
              <IoCartOutline className="text-white mx-0 font-bold text-3xl md:text-4xl " />
              <span className="absolute top-[7px] right-2 lg:top-[30px] text-white font-bold md:text-2xl">
                {cartNum}
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-5 relative lg:hidden">
          <form action="#">
            <input
              type="text"
              className="block w-[100%] h-[40px] mx-auto rounded-3xl relative px-2 text-sm sm:px-8 sm:text-xl sm:h-[45px] lg:mx-auto"
              placeholder="What can we help you find today?"
            />
            <button className="pointer">
              <IoSearchOutline className="text-white bg-yellow-400 font-bold text-4xl p-2 rounded-3xl absolute top-1 right-1 lg:top-2 " />
            </button>
          </form>
        </div>
      </div>
      <hr />
      <div className="h-[50px] flex justify-between items-center sm:h-[65px] lg:h-[40px] ">
        <Swiper
          slidesPerView={4.5}
          spaceBetween={0}
          loop={false}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Navigation]}
          className="mySwiper "
        >
          <SwiperSlide>
            <Link to="/" className="md:text-3xl sm:text-2xl sm:p-4 lg:text-xl">
              Home
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="/Drinks"
              className="flex items-center md:text-3xl sm:text-2xl sm:p-4 lg:text-xl"
            >
              <FaTags /> Drinks
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/Laptop" className="md:text-3xl sm:text-2xl lg:text-xl">
              PC/Laptops
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/Camera" className="md:text-3xl sm:text-2xl lg:text-xl">
              Camera
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to="#" className="md:text-3xl sm:text-2xl lg:text-xl">
              Iphones
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="#" className="md:text-3xl sm:text-2xl lg:text-xl">
              Help
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
