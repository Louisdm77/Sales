import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Iphone14 from "../../assets/images/iphone14.jpg";
import Samsung from "../../assets/images/Samsung22.jpg";
import Dell from "../../assets/images/Dell.jpg";
import PS from "../../assets/images/PS5.jpg";
import macbook from "../../assets/images/macbook.jpg";
import google from "../../assets/images/googlepixel.jpg";
import nint from "../../assets/images/Nint.avif";
import micro from "../../assets/images/micro.avif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Productdetails from "./Productdetails.jsx";
import { UserView } from "../Context/viewContext.jsx";
// import ViewContextProvider from "../Context/viewContext.jsx";
const Topproducts = () => {
  const { viewItem, setViewItem, currentProduct, setCurrentProduct } =
    UserView();

  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  const products = [
    {
      id: 1,
      image: Iphone14,
      name: "Apple iPhone 14 Pro",
      price: 780.99,
      discountPercentage: 10,
      description:
        "The Apple iPhone 14 Pro is a powerful device with a 6.7 inch display, 12MP camera, and 120Hz AMOLED display. It comes with a 12MP camera, 5G support, and a 120Hz AMOLED display. It is powered by a 120Hz AMOLED display, which is great for gaming and video-intensive applications. ",
    },
    {
      id: 2,
      image: Samsung,
      name: "Samsung Galaxy S22 ",
      price: 679.12,
      discountPercentage: 15,
      description:
        " The Samsung Galaxy S22 Ultra is a powerful device with a 6.8 inch display, 12MP camera, and 120Hz AMOLED display. It comes with a 12MP camera, 5G support, and a 120Hz AMOLED display. It is powered by a 120Hz AMOLED display, which is great for gaming and video-intensive applications.",
    },
    {
      id: 3,
      image: Dell,
      name: "Dell XPS 13 Laptop",
      price: 249.06,
      discountPercentage: 12,
      description:
        "The Dell XPS 13 is a powerful device with a 13.3 inch display, 12MP camera, and 120Hz AMOLED display. It comes with a 12MP camera, 5G support, and a 120Hz AMOLED display. It is powered by a 120Hz AMOLED display, which is great for gaming and video-intensive applications.",
    },
    {
      id: 4,
      name: "Sony PlayStation 5",
      image: PS,
      price: 500.0,
      discountPercentage: 8,
      description:
        "The Sony PlayStation 5 is a powerful device with a 15.6 inch display, 12MP camera, and 120Hz AMOLED display. It comes with a 12MP camera, 5G support, and a 120Hz AMOLED display. It is powered by a 120Hz AMOLED display, which is great for gaming and video-intensive applications.",
    },
    {
      id: 5,
      image: macbook,
      name: "Apple MacBook Air",
      price: 789.99,
      discountPercentage: 10,
      description:
        "The Apple MacBook Air is a powerful device with a 13.3 inch display, 12MP camera, and 120Hz AMOLED display. It comes with a 12MP camera, 5G support, and a 120Hz AMOLED display. It is powered by a 120Hz AMOLED display, which is great for gaming and video-intensive applications.",
    },
    {
      id: 6,
      name: "Google Pixel 6 Pro",
      image: google,
      price: 797.88,
      discountPercentage: 12,
      description:
        "The Google Pixel 6 Pro is a powerful device with a 6.5 inch display, 12MP camera, and 120Hz AMOLED display. It comes with a 12MP camera, 5G support, and a 120Hz AMOLED display. It is powered by a 120Hz AMOLED display, which is great for gaming and video-intensive applications.",
    },
    {
      id: 7,
      image: nint,
      name: "Nintendo Switch OLED",
      price: 359.99,
      discountPercentage: 5,
      description:
        "The Nintendo Switch OLED is a powerful device with a 10.8 inch display, 12MP camera, and 120Hz AMOLED display. It comes with a 12MP camera, 5G support, and a 120Hz AMOLED display. It is powered by a 120Hz AMOLED display, which is great for gaming and video-intensive applications.",
    },
    {
      id: 8,
      image: micro,
      name: "Microsoft Surface Pro 8",
      price: 989.99,
      discountPercentage: 30,
      description:
        "The Microsoft Surface Pro 8 is a powerful device with a 13.5 inch display, 12MP camera, and 120Hz AMOLED display. It comes with a 12MP camera, 5G support, and a 120Hz AMOLED display. It is powered by a 120Hz AMOLED display, which is great for gaming and video-intensive applications. ",
    },
  ];
  return (
    <div className="slider-container md:hidden sm:hidden lg:hidden mb-2">
      <Slider {...settings}>
        {products.map((product) => {
          return (
            <div key={product.id} className="h-48 p-2">
              <img
                src={product.image}
                alt=""
                className="object-cover w-full relative h-[65%]"
              />
              <p className="text-red-500 font-bold h-9 leading-tight">
                {product.name}
              </p>
              <div className="flex justify-between overflow-hidden items-center">
                <p className="font-bold">${product.price}</p>
                <p className="font-bold text-blue-500 italic">
                  <strike>
                    $
                    {(
                      product.price /
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)}
                  </strike>
                </p>
              </div>
              <p className="bg-orange-500 text-white text-sm font-bold fit-content italic rounded-full text-center px-2 py-1 absolute top-2  ">
                -{product.discountPercentage}%
              </p>

              <Link to="/product">
                <button
                  className="flex item-center hover:bg-indigo-500 justify-center bg-indigo-800 text-white px-5 py-1 w-full"
                  onClick={() => {
                    console.log(currentProduct);
                    console.log(product.image), console.log(viewItem);
                    setCurrentProduct({
                      id: product.id,
                      image: product.image,
                      name: product.name,
                      price: product.price,
                      discountPercentage: product.discountPercentage,
                      pieces: 1,
                      description: product.description,
                    }),
                      setViewItem(true);
                  }}
                >
                  VIEW
                </button>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Topproducts;
