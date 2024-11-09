import React from "react";
import Dimg from "../images/discount.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Head1 from "../images/head1.jpg";
import Head2 from "../images/head2.jpg";
import Head3 from "../images/head3.avif";
import Head4 from "../images/head4.avif";
import Head5 from "../images/head5.jpg";
import Head6 from "../images/head6.jpg";
import Head7 from "../images/head7.avif";
import Head8 from "../images/head8.jpg";

const Discount = () => {
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 2.7,
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
      image: Head1,
      name: "HyperX Cloud II",
      price: 1880.99,
      discountPercentage: 75,
      description:
        "Experience immersive gaming with HyperX Cloud II's crystal-clear 7.1 surround sound and durable aluminum frame. Memory foam ear cushions ensure comfort during marathon gaming sessions.",
    },
    {
      id: 2,
      image: Head2,
      name: "SteelSeries Arctis 7",
      price: 679.12,
      discountPercentage: 75,
      description:
        " Elevate your gaming experience with SteelSeries Arctis 7's sleek, wireless design and long-lasting 15-hour battery life. Enjoy precise audio and crystal-clear chat with friends.",
    },
    {
      id: 3,
      image: Head3,
      name: "Turtle Beach Recon 200",
      price: 749.06,
      discountPercentage: 75,
      description:
        "Get gaming on a budget with Turtle Beach Recon 200's affordable, wired design and flip-up mic. Enjoy clear audio and comfortable ear cushions.",
    },
    {
      id: 4,
      name: " Razer Kraken X",
      image: Head4,
      price: 1500.0,
      discountPercentage: 75,
      description:
        " Unlock advanced gaming features with Razer Kraken X's customizable lighting, cooling ear cushions, and precise 7.1 surround sound.",
    },
    {
      id: 5,
      image: Head5,
      name: "Logitech G Pro X",
      price: 789.99,
      discountPercentage: 75,
      description:
        "Compete at the highest level with Logitech G Pro X's professional-grade audio, precise mic, and durable design.",
    },
    {
      id: 6,
      name: "Sony WH-1000XM4",
      image: Head6,
      price: 77.68,
      discountPercentage: 75,
      description:
        "Escape noise and immerse yourself in music with Sony WH-1000XM4's industry-leading noise cancellation and up to 30-hour battery life.",
    },
    {
      id: 7,
      image: Head7,
      name: "Nintendo Switch OLED",
      price: 39.92,
      discountPercentage: 75,
      description:
        "The Nintendo Switch OLED is a powerful device with a 10.8 inch display, 12MP camera, and 120Hz AMOLED display. It comes with a 12MP camera, 5G support, and a 120Hz AMOLED display. It is powered by a 120Hz AMOLED display, which is great for gaming and video-intensive applications.",
    },
    {
      id: 8,
      image: Head8,
      name: "Bose QuietComfort 35 II",
      price: 89.09,
      discountPercentage: 75,
      description:
        "Enjoy wireless freedom and advanced noise cancellation with Bose QuietComfort 35 II's sleek design and long-lasting battery life. ",
    },
  ];
  return (
    <div>
      <div className="h-[17em] sm:hidden md:hidden lg:hidden border-2">
        <img src={Dimg} alt="dshj" className="h-full w-full object-cover" />
      </div>
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
    </div>
  );
};

export default Discount;
