import React from "react";
import Iphone14 from "../../assets/images/iphone14.jpg";
import Samsung from "../../assets/images/Samsung22.jpg";
import Dell from "../../assets/images/Dell.jpg";
import PS from "../../assets/images/PS5.jpg";
import macbook from "../../assets/images/macbook.jpg";
import google from "../../assets/images/googlepixel.jpg";
import nint from "../../assets/images/Nint.avif";
import micro from "../../assets/images/micro.avif";
import { Link } from "react-router-dom";
import Head1 from "../images/head1.jpg";
import Head2 from "../images/head2.jpg";
import Head3 from "../images/head3.avif";
import Head4 from "../images/head4.avif";
import Head5 from "../images/head5.jpg";
import Head6 from "../images/head6.jpg";
import Head7 from "../images/head7.avif";
import Head8 from "../images/head8.jpg";
import { UserView } from "../Context/viewContext";

const Randomitems = () => {
  const { viewItem, setViewItem, currentProduct, setCurrentProduct } =
    UserView();
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
      image: macbook,
      name: "Apple MacBook Air",
      price: 789.99,
      discountPercentage: 10,
      description:
        "The Apple MacBook Air is a powerful device with a 13.3 inch display, 12MP camera, and 120Hz AMOLED display. It comes with a 12MP camera, 5G support, and a 120Hz AMOLED display. It is powered by a 120Hz AMOLED display, which is great for gaming and video-intensive applications.",
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
      image: nint,
      name: "Nintendo Switch OLED",
      price: 359.99,
      discountPercentage: 5,
      description:
        "The Nintendo Switch OLED is a powerful device with a 10.8 inch display, 12MP camera, and 120Hz AMOLED display. It comes with a 12MP camera, 5G support, and a 120Hz AMOLED display. It is powered by a 120Hz AMOLED display, which is great for gaming and video-intensive applications.",
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
      image: Iphone14,
      name: "Apple iPhone 14 Pro",
      price: 780.99,
      discountPercentage: 10,
      description:
        "The Apple iPhone 14 Pro is a powerful device with a 6.7 inch display, 12MP camera, and 120Hz AMOLED display. It comes with a 12MP camera, 5G support, and a 120Hz AMOLED display. It is powered by a 120Hz AMOLED display, which is great for gaming and video-intensive applications. ",
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
      image: Samsung,
      name: "Samsung Galaxy S22 ",
      price: 679.12,
      discountPercentage: 15,
      description:
        " The Samsung Galaxy S22 Ultra is a powerful device with a 6.8 inch display, 12MP camera, and 120Hz AMOLED display. It comes with a 12MP camera, 5G support, and a 120Hz AMOLED display. It is powered by a 120Hz AMOLED display, which is great for gaming and video-intensive applications.",
    },
    {
      id: 9,
      image: Dell,
      name: "Dell XPS 13 Laptop",
      price: 249.06,
      discountPercentage: 12,
      description:
        "The Dell XPS 13 is a powerful device with a 13.3 inch display, 12MP camera, and 120Hz AMOLED display. It comes with a 12MP camera, 5G support, and a 120Hz AMOLED display. It is powered by a 120Hz AMOLED display, which is great for gaming and video-intensive applications.",
    },
    {
      id: 10,
      name: "Sony WH-1000XM4",
      image: Head6,
      price: 77.68,
      discountPercentage: 75,
      description:
        "Escape noise and immerse yourself in music with Sony WH-1000XM4's industry-leading noise cancellation and up to 30-hour battery life.",
    },
    {
      id: 11,
      name: "Sony PlayStation 5",
      image: PS,
      price: 500.0,
      discountPercentage: 8,
      description:
        "The Sony PlayStation 5 is a powerful device with a 15.6 inch display, 12MP camera, and 120Hz AMOLED display. It comes with a 12MP camera, 5G support, and a 120Hz AMOLED display. It is powered by a 120Hz AMOLED display, which is great for gaming and video-intensive applications.",
    },
    {
      id: 12,
      image: Head2,
      name: "SteelSeries Arctis 7",
      price: 679.12,
      discountPercentage: 75,
      description:
        " Elevate your gaming experience with SteelSeries Arctis 7's sleek, wireless design and long-lasting 15-hour battery life. Enjoy precise audio and crystal-clear chat with friends.",
    },
    {
      id: 13,
      image: Head8,
      name: "Bose QuietComfort 35 II",
      price: 89.09,
      discountPercentage: 75,
      description:
        "Enjoy wireless freedom and advanced noise cancellation with Bose QuietComfort 35 II's sleek design and long-lasting battery life. ",
    },
    {
      id: 14,
      name: "Google Pixel 6 Pro",
      image: google,
      price: 797.88,
      discountPercentage: 12,
      description:
        "The Google Pixel 6 Pro is a powerful device with a 6.5 inch display, 12MP camera, and 120Hz AMOLED display. It comes with a 12MP camera, 5G support, and a 120Hz AMOLED display. It is powered by a 120Hz AMOLED display, which is great for gaming and video-intensive applications.",
    },

    {
      id: 15,
      name: " Razer Kraken X",
      image: Head4,
      price: 1500.0,
      discountPercentage: 75,
      description:
        " Unlock advanced gaming features with Razer Kraken X's customizable lighting, cooling ear cushions, and precise 7.1 surround sound.",
    },
    {
      id: 16,
      image: micro,
      name: "Microsoft Surface Pro 8",
      price: 989.99,
      discountPercentage: 30,
      description:
        "The Microsoft Surface Pro 8 is a powerful device with a 13.5 inch display, 12MP camera, and 120Hz AMOLED display. It comes with a 12MP camera, 5G support, and a 120Hz AMOLED display. It is powered by a 120Hz AMOLED display, which is great for gaming and video-intensive applications. ",
    },
  ];
  return (
    <div>
      <div className="bg-indigo-900 text-white py-4">
        <h3 className="text-center font-bold text-2xl">All Purpose </h3>
      </div>
      <div class="grid grid-cols-3 grid-rows-6 gap-y-4">
        {products.map((product) => {
          return (
            <div key={product.id} className="h-48 p-2 relative">
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
      </div>
    </div>
  );
};

export default Randomitems;