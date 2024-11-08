import React from "react";
import { useState, useRef, useContext } from "react";
import { MdCancel } from "react-icons/md";
import { UserView } from "../Context/viewContext.jsx";
const Productdetails = (props) => {
  const reduce = useRef(null);
  const { viewItem, setViewItem, currentProduct, setCurrentProduct } =
    UserView();
  const [itemCount, setItemCount] = useState(0);
  const handleIncrement = () => {
    if (itemCount > 0) {
      reduce.current.disabled = false;
    }
    setItemCount(itemCount + 1);
  };
  const handleDecrement = () => {
    if (itemCount === 1) {
      reduce.current.disabled = true;
    }
    setItemCount(itemCount - 1);
  };
  return (
    <div
      className="bg-amber-50  border-2 p-2 m-4  w-full h-full z-50"
      //   fixed left-[-11px] top-[-11px]
      style={{ display: viewItem ? "block" : "none" }}
    >
      <button
        className="text-2xl"
        onClick={() => {
          setViewItem(false);
        }}
      >
        <MdCancel />
      </button>
      <h1 className="text-3xl font-bold text-center ">Product Details</h1>
      <div className="block h-[100vh] justify-between p-2">
        <div className="  h-[40%] ">
          <img
            src={currentProduct.image}
            alt=""
            className="w-full h-[80%] object-contain"
          />{" "}
          <div className="flex justify-between items-center mt-1 border-2  mt-2 p-2">
            <button
              ref={reduce}
              onClick={handleDecrement}
              className="bg-blue-500 text-white font-bold p-2 border-2  rounded-full"
            >
              -
            </button>
            <p className="text-center font-bold">{itemCount}</p>{" "}
            <button
              onClick={handleIncrement}
              className="bg-blue-500 p-2 text-white font-bold  border-2  rounded-full"
            >
              +
            </button>
          </div>
        </div>
        <div className=" h-full p-2  ">
          <h4 className="text-blue-500 font-bold text-4xl">
            {currentProduct.name}
          </h4>

          <div className="flex  items-center">
            <p
              className="
            text-black-500 font-bold text-2xl"
            >
              ${currentProduct.price}
            </p>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span className="text-gray-500 text-lg">
              {" "}
              <strike>
                ${(currentProduct.discountPercentage * 100).toFixed(2)}
              </strike>
            </span>
            &nbsp; &nbsp;&nbsp;&nbsp;
            <span className="text-lg text-red-300">
              {currentProduct.discountPercentage}%off
            </span>
          </div>

          <p>{currentProduct.description}</p>

          <button className="flex item-center hover:bg-blue-500 mt-5 py-3 justify-center bg-blue-700 text-white px-5 py-1 w-full">
            Add to Cart
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default Productdetails;
