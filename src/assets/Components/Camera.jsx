import react from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserView } from "../Context/viewContext";
import Header from "./Header";
import Footer from "./Footer";

function cameras() {
  function calculateTotal(x, y) {
    return x * y;
  }
  const cameras = [
    {
      id: 201,
      title: "Canon EOS 5D Mark IV",
      description:
        "Professional DSLR camera with exceptional image quality and 4K video recording.",
      price: 2499.99,
      image:
        "https://petapixel.com/assets/uploads/2022/09/canon-5d-mark-iv-dslr-800x420.jpg",
      category: "DSLR",
    },
    {
      id: 202,
      title: "Sony Alpha 7 III",
      description:
        "Full-frame mirrorless camera with high-speed autofocus and 4K video.",
      price: 1999.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEjyY6aolQI27I2xymBmTbcgUeaYG95FocA&s",
      category: "Mirrorless",
    },
    {
      id: 203,
      title: "Nikon Z6",
      description:
        "Compact mirrorless camera with a 24.5MP sensor and 4K UHD video recording.",
      price: 1799.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtrdm6DbHIepZzz44dQkUAeotbw7IWuRwdow&s",
      category: "Mirrorless",
    },
    {
      id: 204,
      title: "Canon EOS Rebel T7",
      description:
        "Affordable DSLR camera with 24.1MP resolution and Full HD video.",
      price: 549.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6lDiovDbzGn-WfzV9cSKOYaEoSgMyVJaQA&s",
      category: "DSLR",
    },
    {
      id: 205,
      title: "Fujifilm X-T4",
      description:
        "Mirrorless camera with 26.1MP and 4K video recording capabilities.",
      price: 1699.99,
      image:
        "https://petapixel.com/assets/uploads/2022/09/canon-5d-mark-iv-dslr-800x420.jpg",
      category: "Mirrorless",
    },
    {
      id: 206,
      title: "Olympus OM-D E-M10 Mark IV",
      description:
        "Compact mirrorless camera with 4K video and in-body image stabilization.",
      price: 799.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFtZCt_aVA7o1d5dd_i8CvPEPHfbTj5t8tQ&s",
      category: "Mirrorless",
    },
    {
      id: 207,
      title: "Panasonic Lumix GH5",
      description:
        "Micro Four Thirds mirrorless camera with 4K 60fps video and excellent stabilization.",
      price: 1299.99,
      image:
        "https://catchcameras.co.uk/cdn/shop/files/1_67648b2d-e476-44b6-bf0e-a251f1220101.png?v=1717615107&width=493",
      category: "Mirrorless",
    },
    {
      id: 208,
      title: "Nikon D850",
      description:
        "Full-frame DSLR with 45.7MP resolution and 4K UHD video recording.",
      price: 2999.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTQg5thlAX_bsnusqBXPsjAgX1trvVeqmo-A&s",
      category: "DSLR",
    },
    {
      id: 209,
      title: "Sony A6400",
      description:
        "Mirrorless camera with 4K video, 11fps burst shooting, and advanced autofocus.",
      price: 898.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZuEA2OXUbx9HBuxiruGJZgD3CL3JlSRhrGQ&s",
      category: "Mirrorless",
    },
    {
      id: 210,
      title: "Canon EOS R6",
      description:
        "Mirrorless camera with 20fps burst, 4K video, and exceptional autofocus.",
      price: 2499.99,
      image:
        "https://digitalshopbd.com/public/uploads/all/POzk9x87tF7Z6U2pw8OxCUdVLb1RtVuezHMYguKm.jpg",
      category: "Mirrorless",
    },
    {
      id: 211,
      title: "Leica M10",
      description:
        "Full-frame rangefinder camera with a classic design and manual controls.",
      price: 6999.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP2OJ118NyysULM5my6mPC6L6rpJgZ1TtVhQ&s",
      category: "Rangefinder",
    },
    {
      id: 212,
      title: "Nikon D7500",
      description: "Mid-range DSLR with 4K UHD video and 20.9MP resolution.",
      price: 1149.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWMdM_wIdY0QZj6H_7I8B3xXJ48yH9WxD1w&s",
      category: "DSLR",
    },
    {
      id: 213,
      title: "Fujifilm GFX 100S",
      description:
        "Medium format mirrorless camera with 102MP and 4K video recording.",
      price: 5999.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuRslfm5e0R1ROqYRkStl8eaZH_5MAawd_A&s",
      category: "Mirrorless",
    },
    {
      id: 214,
      title: "Sony Alpha A7R IV",
      description:
        "High-resolution full-frame mirrorless camera with 61MP and 4K video.",
      price: 3499.99,
      image:
        "https://www.darkyellowdot.com/wp-content/uploads/2023/07/pexels-ajay-lobo-1205022-2.jpg",
      category: "Mirrorless",
    },
    {
      id: 215,
      title: "Canon EOS 90D",
      description: "Mid-range DSLR with 32.5MP and 4K video capabilities.",
      price: 1199.99,
      image:
        "https://petapixel.com/assets/uploads/2022/09/canon-5d-mark-iv-dslr-800x420.jpg",
      category: "DSLR",
    },
    {
      id: 216,
      title: "Olympus OM-D E-M1 Mark III",
      description:
        "Mirrorless camera with advanced features for both photo and video.",
      price: 1499.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFtZCt_aVA7o1d5dd_i8CvPEPHfbTj5t8tQ&s",
      category: "Mirrorless",
    },
    {
      id: 217,
      title: "Panasonic Lumix S5",
      description:
        "Full-frame mirrorless camera with 4K video and exceptional performance.",
      price: 1999.99,
      image:
        "https://catchcameras.co.uk/cdn/shop/files/1_67648b2d-e476-44b6-bf0e-a251f1220101.png?v=1717615107&width=493",
      category: "Mirrorless",
    },
    {
      id: 218,
      title: "Nikon Z50",
      description:
        "Compact mirrorless camera with 4K UHD video and 20.9MP sensor.",
      price: 849.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTQg5thlAX_bsnusqBXPsjAgX1trvVeqmo-A&s",
      category: "Mirrorless",
    },
    {
      id: 219,
      title: "Canon EOS M50 Mark II",
      description:
        "Compact mirrorless camera with 4K video and exceptional autofocus.",
      price: 649.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZuEA2OXUbx9HBuxiruGJZgD3CL3JlSRhrGQ&s",
      category: "Mirrorless",
    },
    {
      id: 220,
      title: "Leica Q2",
      description:
        "Compact full-frame camera with a 47.3MP sensor and fixed lens.",
      price: 4995.0,
      image:
        "https://digitalshopbd.com/public/uploads/all/POzk9x87tF7Z6U2pw8OxCUdVLb1RtVuezHMYguKm.jpg",
      category: "Compact",
    },
  ];

  const [dums, setDums] = useState([]);
  const {
    viewItem,
    setViewItem,
    currentProduct,
    setCurrentProduct,
    itemCount,
    setItemCount,
    itemNum,
    setItemNum,
    cartItems,
    num,
    setNum,
  } = UserView();
  useEffect(() => {
    console.log(currentProduct);
    console.log(currentProduct.total, "curtotal");
  }, [itemNum, currentProduct, cartItems]);

  return (
    <div>
      <Header />
      <div className="bg-indigo-900 text-white py-4 mt-8">
        <div class="w-full inline-flex flex-nowrap">
          <ul
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            <li>
              <p> 50% Sales Discount!!!</p>
            </li>
            <li>
              <p>You cant miss this !!!</p>
            </li>

            <li>
              <p>CHRISTMAS IS HERE, GET NEW GADGETS!!!</p>
            </li>
          </ul>
        </div>
        <div className=" ">
          <div className="grid grid-cols-4 grid-rows-1 lg:grid-cols-5 lg:rows-1 gap-2 p-4 mx-auto  h-auto sm:gap-1 sm:p-2 md:gap-4 md:p-4 lg:gap-8 lg:p-12">
            <a href="#">
              <div className="col border border-gray-300 rounded-lg flex justify-center items-center h-full">
                <img
                  src="https://ng.jumia.is/cms/0-1-category-pages/0-all-category/powerbanks_300x400.png"
                  alt=""
                  className="object-cover rounded-lg h-full w-full"
                />
              </div>
            </a>
            <a href="#" className="hidden lg:block">
              <div className="col border hidden lg:block border-gray-300 rounded-lg flex justify-center items-center h-full">
                <img
                  src="https://ng.jumia.is/cms/0-1-category-pages/0-all-category/cameras_300x400.png"
                  alt=""
                  className="object-cover rounded-lg h-full w-full"
                />
              </div>
            </a>
            <a href="#">
              <div className="col border border-gray-300 rounded-lg flex justify-center items-center h-full">
                <img
                  src="https://ng.jumia.is/cms/0-1-category-pages/appliances/300x400/freezers_300x400.png"
                  alt=""
                  className="object-cover rounded-lg h-full w-full"
                />
              </div>
            </a>
            <a href="#">
              <div className="col border border-gray-300 rounded-lg flex justify-center items-center h-full">
                <img
                  src="https://ng.jumia.is/cms/0-1-category-pages/appliances/300x400/washing-machines_300x400.png"
                  alt=""
                  className="object-cover rounded-lg h-full w-full"
                />
              </div>
            </a>
            <a href="#">
              <div className="col border border-gray-300 rounded-lg flex justify-center items-center h-full">
                <img
                  src="https://ng.jumia.is/cms/0-1-category-pages/0-all-category/smartphones_300x400.png"
                  alt=""
                  className="object-cover rounded-lg h-full w-full"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3  lg:grid-cols-5 lg:rows-1 gap-2 p-4 mx-auto  h-auto sm:gap-1 sm:p-2 md:gap-4 md:p-4 lg:gap-8 lg:p-12">
        {cameras.map((camera) => {
          return (
            <div
              key={camera.id}
              className="h-64 p-2 mt-8 sm:h-72 bg-white sm:p-4 md:h-96 md:p-6 relative lg:hover:border-2 hover:border-indigo-500"
            >
              <img
                src={camera.image}
                alt=""
                className="object-contain w-full relative h-[65%]"
              />
              <p className="text-red-500 text-lg h-16 lg:text-xl md:text-lg font-bold leading-tight sm:text-lg overflow-hidden">
                {camera.title}
              </p>
              <div className="flex justify-between overflow-hidden items-center sm:text-lg">
                <p className="font-bold">${camera.price}</p>
              </div>

              <Link to="/product">
                <button
                  className="flex item-center hover:bg-indigo-500 justify-center bg-indigo-800 text-white px-5 py-1 w-full sm:text-2xl"
                  onClick={() => {
                    console.log(itemNum), console.log(viewItem);
                    setCurrentProduct({
                      id: camera.id,
                      image: camera.image,
                      name: camera.title,
                      price: camera.price,
                      discountPercentage: "",
                      pieces: itemCount[currentProduct.id],
                      description: camera.description,
                      total: itemNum * currentProduct.pieces,
                    }),
                      setViewItem(true);
                    setItemNum(0);
                    setNum(1);
                  }}
                >
                  VIEW
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-10 mb-4 bg-indigo-900 p-14 flex justify-between items-center text-white py-4">
        <h2 className="text-2xl font-bold">You might also like:</h2>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 lg:grid-cols-5 lg:rows-1 gap-2 p-4 mx-auto  h-auto sm:gap-1 sm:p-2 md:gap-4 md:p-4 lg:gap-8 lg:p-12">
        <div className="col border  lg:block border-gray-300 rounded-lg flex justify-center items-center h-full">
          <Link to="#">
            <img
              src="https://ng.jumia.is/cms/0-1-category-pages/electronics/300x400/cameras_300x400.png"
              alt="camera"
              className="object-cover rounded-lg h-full w-full"
            />
          </Link>
        </div>
        <div className="col border hidden lg:block border-gray-300 rounded-lg flex justify-center items-center h-full">
          <Link to="#">
            <img
              src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/beauty.png"
              alt=""
              className="object-cover rounded-lg h-full w-full"
            />
          </Link>
        </div>
        <div className="col border lg:block border-gray-300 rounded-lg flex justify-center items-center h-full">
          <Link to="#">
            <img
              src="https://ng.jumia.is/cms/0-1-category-pages/fashion/300x400/Updated/Artboard_1.jpg"
              alt="sneakers"
              className="object-cover rounded-lg h-full w-full"
            />
          </Link>
        </div>
        <div className="col border  lg:block border-gray-300 rounded-lg flex justify-center items-center h-full">
          <Link to="#">
            <img
              src="https://ng.jumia.is/cms/0-1-category-pages/fashion/300x400/Updated/Artboard_1_copy_3.jpg"
              alt="jewelry"
              className="object-cover rounded-lg h-full w-full"
            />
          </Link>
        </div>
        <div className="col border  lg:block border-gray-300 rounded-lg flex justify-center items-center h-full">
          <Link to="#">
            <img
              src="https://ng.jumia.is/cms/0-1-category-pages/fashion/300x400/Updated/Artboard_1_copy_4.jpg"
              alt="sneakers"
              className="object-cover rounded-lg h-full w-full"
            />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default cameras;
