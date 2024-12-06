import React, { useRef, useState } from "react";
import img from "../images/img.jpg";
import buy from "../images/buy.webp";
import vid from "../images/vid.mp4";
import { IoCallOutline } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="h-[20em] sm:h-[35em] md:h-[49em] lg:h-[40em] ">
      <div className=" bg-indigo-800 border-2  text-white text-center font-bold h-[15%] sm:h-[8%] md:h-[8%] lg:h-[8%] flex justify-center items-center sm:text-2xl md:text-3xl">
        Call to ORDER: +234 813 539 0524
      </div>
      {/* <div class="w-full overflow-hidden">
        <div class="inline-flex animate-infinite-scroll">
          <ul class="flex items-center">
            <li class="mx-4">
              <img
                src="https://cdn.prod.website-files.com/62b0e6308cc691625470b227/62dec0259f18b71442a15966_Apple-Logo.png"
                class="w-[70px] h-[40px]"
                alt="Logo"
              />
            </li>{" "}
            <li class="mx-4">
              <img
                src="https://cdn.prod.website-files.com/62b0e6308cc691625470b227/62dec0259f18b71442a15966_Apple-Logo.png"
                class="w-[70px] h-[40px]"
                alt="Logo"
              />
            </li>{" "}
            <li class="mx-4">
              <img
                src="https://cdn.prod.website-files.com/62b0e6308cc691625470b227/62dec0259f18b71442a15966_Apple-Logo.png"
                class="w-[70px] h-[40px]"
                alt="Logo"
              />
            </li>{" "}
            <li class="mx-4">
              <img
                src="https://cdn.prod.website-files.com/62b0e6308cc691625470b227/62dec0259f18b71442a15966_Apple-Logo.png"
                class="w-[70px] h-[40px]"
                alt="Logo"
              />
            </li>{" "}
            <li class="mx-4">
              <img
                src="https://cdn.prod.website-files.com/62b0e6308cc691625470b227/62dec0259f18b71442a15966_Apple-Logo.png"
                class="w-[70px] h-[40px]"
                alt="Logo"
              />
            </li>{" "}
            <li class="mx-4">
              <img
                src="https://cdn.prod.website-files.com/62b0e6308cc691625470b227/62dec0259f18b71442a15966_Apple-Logo.png"
                class="w-[70px] h-[40px]"
                alt="Logo"
              />
            </li>{" "}
            <li class="mx-4">
              <img
                src="https://cdn.prod.website-files.com/62b0e6308cc691625470b227/62dec0259f18b71442a15966_Apple-Logo.png"
                class="w-[70px] h-[40px]"
                alt="Logo"
              />
            </li>{" "}
            <li class="mx-4">
              <img
                src="https://cdn.prod.website-files.com/62b0e6308cc691625470b227/62dec0259f18b71442a15966_Apple-Logo.png"
                class="w-[70px] h-[40px]"
                alt="Logo"
              />
            </li>{" "}
            <li class="mx-4">
              <img
                src="https://cdn.prod.website-files.com/62b0e6308cc691625470b227/62dec0259f18b71442a15966_Apple-Logo.png"
                class="w-[70px] h-[40px]"
                alt="Logo"
              />
            </li>{" "}
            <li class="mx-4">
              <img
                src="https://cdn.prod.website-files.com/62b0e6308cc691625470b227/62dec0259f18b71442a15966_Apple-Logo.png"
                class="w-[70px] h-[40px]"
                alt="Logo"
              />
            </li>{" "}
            <li class="mx-4">
              <img
                src="https://cdn.prod.website-files.com/62b0e6308cc691625470b227/62dec0259f18b71442a15966_Apple-Logo.png"
                class="w-[70px] h-[40px]"
                alt="Logo"
              />
            </li>{" "}
            <li class="mx-4">
              <img
                src="https://cdn.prod.website-files.com/62b0e6308cc691625470b227/62dec0259f18b71442a15966_Apple-Logo.png"
                class="w-[70px] h-[40px]"
                alt="Logo"
              />
            </li>
            <li class="mx-4">
              <img
                src="https://cdn.prod.website-files.com/62b0e6308cc691625470b227/62dec0259f18b71442a15966_Apple-Logo.png"
                class="w-[70px] h-[40px]"
                alt="Logo"
              />
            </li>
            <li class="mx-4">
              <img
                src="https://cdn.prod.website-files.com/62b0e6308cc691625470b227/62dec0259f18b71442a15966_Apple-Logo.png"
                class="w-[70px] h-[40px]"
                alt="Logo"
              />
            </li>
          </ul>
        </div>
      </div> */}
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
                Liquor and Drinks
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
                Power Banks
              </li>
            </a>
            <a href="">
              {" "}
              <li className=" border-2  border-indigo-400 hover:bg-indigo-400 hover:text-white p-2 my-2">
                Fashion
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
        <div className="lg:w-[50%] w-full h-full max-w-100vw">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000, // Autoplay delay in milliseconds
              disableOnInteraction: false, // Keep autoplaying even after user interaction
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper overflow-x-hidden"
          >
            <SwiperSlide>
              {" "}
              <img
                src="https://img.freepik.com/free-photo/christmas-shopping-concept-with-balls-cart_23-2147719652.jpg?ga=GA1.1.395615926.1720835137&semt=ais_hybrid"
                alt="spark10"
                className="h-full w-full object-cover object-fit"
              />
            </SwiperSlide>{" "}
            <SwiperSlide>
              {" "}
              <img
                src="https://img.freepik.com/free-photo/woman-holds-colorful-shopping-bags_1157-45687.jpg?t=st=1731686272~exp=1731689872~hmac=105590294a24aa1339952896d645cd3e0169e6f1f727814a8e283d4093aadcb8&w=740"
                alt="spark10"
                className="h-full w-full object-cover object-fit"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://img.freepik.com/free-photo/afro-american-couple-holding-christmas-presents_1303-4880.jpg?ga=GA1.1.395615926.1720835137&semt=ais_hybrid"
                alt="spark10"
                className="h-full w-full object-cover object-fit"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="https://img.freepik.com/premium-photo/trolley-products-brick-wall-background-new-year-s-sale-shares_494741-15456.jpg?ga=GA1.1.395615926.1720835137&semt=ais_hybrid"
                alt="spark10"
                className="h-full w-full object-cover object-fit"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="https://img.freepik.com/free-photo/beautiful-realistic-christmas-sales-banner-template-with-3d-elements-copy-space_69286-490.jpg?ga=GA1.1.395615926.1720835137&semt=ais_hybrid"
                alt="spark10"
                className="h-full w-full object-cover object-fit"
              />
            </SwiperSlide>
          </Swiper>
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
            />{" "}
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
