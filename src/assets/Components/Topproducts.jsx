import React from "react";
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
const Topproducts = () => {
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
      price: 999.99,
      discountPercentage: 10,
    },
    {
      id: 2,
      image: Samsung,
      name: "Samsung Galaxy S22 Ultra",
      price: 899.99,
      discountPercentage: 15,
    },
    {
      id: 3,
      image: Dell,
      name: "Dell XPS 13 Laptop",
      price: 249.06,
      discountPercentage: 12,
    },
    {
      id: 4,
      name: "Sony PlayStation 5",
      image: PS,
      price: 500.0,
      discountPercentage: 8,
    },
    {
      id: 5,
      image: macbook,
      name: "Apple MacBook Air",
      price: 789.99,
      discountPercentage: 10,
    },
    {
      id: 6,
      name: "Google Pixel 6 Pro",
      image: google,
      price: 797.88,
      discountPercentage: 12,
    },
    {
      id: 7,
      image: nint,
      name: "Nintendo Switch OLED",
      price: 359.99,
      discountPercentage: 5,
    },
    {
      id: 8,
      image: micro,
      name: "Microsoft Surface Pro 8",
      price: 989.99,
      discountPercentage: 30,
    },
  ];
  return (
    <div className="slider-container md:hidden sm:hidden lg:hidden">
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
                <p className="font-bold text-red-500 italic">
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
              <button className="flex item-center justify-center bg-green-700 text-white px-5 py-1 w-full">
                VIEW
              </button>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Topproducts;
