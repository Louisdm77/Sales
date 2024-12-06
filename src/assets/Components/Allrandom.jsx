import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import { UserView } from "../Context/viewContext";
import { Link } from "react-router-dom";

const Allrandom = () => {
  const {
    viewItem,
    setViewItem,
    currentProduct,
    setCurrentProduct,
    itemNum,
    setItemNum,
  } = UserView();
  const [allDatas, setAllData] = useState([]);
  function calculateTotal(x, y) {
    return x * y;
  }
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => setAllData(data))
      .catch((error) => {
        console.log(`error:`, error);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="text-center mt-2 mb-4 bg-indigo-900 p-14 items-center text-white py-4">
        <h2 className="text-2xl font-bold">Lowest Price Deals</h2>
      </div>
      <div>
        <div class="grid lg:grid-cols-5 lg:grid-rows-2 grid-cols-3 grid-rows-3 gap-y-12 sm:gap-4 ">
          {allDatas.map((allData) => {
            return (
              <div
                key={allData.id}
                className="h-64 p-2 sm:h-72 bg-white sm:p-4 md:h-96 md:p-6 relative lg:hover:border-2 hover:border-indigo-500"
              >
                <img
                  src={allData.image}
                  alt=""
                  className="object-contain w-full relative h-[65%]"
                />
                <p className="text-red-500 text-sm h-16 lg:text-xl md:text-lg font-bold leading-tight sm:text-lg overflow-hidden">
                  {allData.title}
                </p>
                <div className="flex justify-between overflow-hidden items-center sm:text-lg">
                  <p className="font-bold">${allData.price}</p>
                </div>

                <Link to="/product">
                  <button
                    className="flex item-center hover:bg-indigo-500 justify-center bg-indigo-800 text-white px-5 py-1 w-full sm:text-2xl"
                    onClick={() => {
                      console.log(currentProduct);
                      console.log(allData.image), console.log(viewItem);
                      setCurrentProduct({
                        id: allData.id,
                        image: allData.image,
                        name: allData.name,
                        price: allData.price,
                        discountPercentage: "",
                        pieces: itemCount[currentProduct.id],
                        description: allData.description,
                        total: calculateTotal(allData.price, itemNum),
                      }),
                        setViewItem(true);
                      setItemNum(0);
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
    </div>
  );
};
export default Allrandom;
