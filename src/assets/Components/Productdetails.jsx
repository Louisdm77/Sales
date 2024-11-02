import React from "react";
import { useState, useRef } from "react";
import { MdCancel } from "react-icons/md";

const Productdetails = (props) => {
  const reduce = useRef(null);
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
      className="bg-amber-50 border-gray-300 border-2 p-2 m-4 absolute left-[-11px] top-0 w-full h-full z-50"
      style={{ display: props.itemView ? "block" : "none" }}
    >
      <button
        onClick={() => {
          props.setItemView(false);
        }}
      >
        <MdCancel />
      </button>
      <h1 className="text-3xl font-bold text-center ">Product Details</h1>
      <div className="flex h-[100vh] justify-between p-2">
        <div className="w-[44%]   h-[40%] ">
          <img
            src={props.currentProduct.image}
            alt=""
            className="w-full h-[60%] object-cover"
          />{" "}
          <div className="flex justify-between items-center mt-1 border-2 border-gray-300 p-2">
            <button
              ref={reduce}
              onClick={handleDecrement}
              className="bg-blue-500 text-white font-bold p-2 border-2 border-gray-300 rounded-full"
            >
              -
            </button>
            <p className="text-center font-bold">{itemCount}</p>{" "}
            <button
              onClick={handleIncrement}
              className="bg-blue-500 p-2 text-white font-bold  border-2 border-gray-300 rounded-full"
            >
              +
            </button>
          </div>
          <button className="flex item-center hover:bg-blue-500 mt-5 py-3 justify-center bg-blue-700 text-white px-5 py-1 w-full">
            Add to Cart
          </button>
        </div>
        <div className="w-[55%] border-2 border-gray-300 h-full p-2  ">
          <div>
            <h4 className="font-bold text-xl text-center">Product </h4>{" "}
            <hr className=" "></hr>
            <h4>{props.currentProduct.name}</h4>
          </div>
          <div className=" border-gray-300 mt-2">
            <h2 className="font-bold text-xl text-center">Pricing </h2>
            <hr className=" border-1 border-gray-300"></hr>
            <p>${props.currentProduct.price}</p>
          </div>
          <div className=" border-gray-300 mt-2">
            <h4 className="p-2 font-bold text-xl text-center ">Description </h4>
            <hr className=" border-1 border-gray-300"></hr>
            <p>{props.currentProduct.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
