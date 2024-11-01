import react from "react";
import { useState, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTags } from "react-icons/fa";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css";

// import required modules
import { Navigation } from "swiper";

const Header = (props) => {
  const [cartNum, setCartNum] = useState(0);
  return (
    <div className="h-[160px] lg:hidden md:hidden  bg-blue-700 py-2">
      <div className="  px-4 py-2 ">
        <div className="h-[20%] flex justify-between ">
          <div className="flex items-center justify-between items-center text-xl">
            <button
              onClick={() => {
                props.setSideShow(true);
                console.log(props.sideShow);
              }}
            >
              <RxHamburgerMenu className="text-white font-bold" />
            </button>
            <h3 className="mx-5 text-white font-bold text-lg italic">
              Louis<span className="text-yellow-400">DM</span>
            </h3>
          </div>
          <div className="flex  items-center me-0 justify-between ">
            <BrowserRouter>
              <Link to="#">
                <FaRegUser className="text-white mx-5 font-bold text-xl" />
              </Link>
            </BrowserRouter>
            <BrowserRouter>
              <Link to="#" className="relative">
                <IoCartOutline className="text-white mx-0 font-bold text-2xl " />
                <span className="absolute top-[-9px] right-0 text-yellow-500 font-bold">
                  {cartNum}
                </span>
              </Link>
            </BrowserRouter>
          </div>
        </div>
        <div className="mt-5 relative">
          <input
            type="text"
            className="w-[100%] h-[40px] mx-auto rounded-3xl relative px-2 text-sm"
            placeholder="What can we help you find today?"
          />
          <button className="pointer">
            <IoSearchOutline className="text-white bg-yellow-400 font-bold text-4xl p-2 rounded-3xl absolute top-1 right-1" />
          </button>
        </div>
      </div>
      <hr />
      <div className="h-[50px] flex justify-between items-center">
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          loop={false}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a href="#">Home</a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="flex items-center">
              <FaTags /> Deals
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">PC/Laptops</a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">Iphones</a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">Camera</a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">Electronics</a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">Watches</a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">Gaming</a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">Help</a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
