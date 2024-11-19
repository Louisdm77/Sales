import React from "react";
import { useState, useRef, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { UserView } from "../Context/viewContext.jsx";
import { useNavigate } from "react-router-dom";
import Headers from "./Header.jsx";
const Productdetails = (props) => {
  const reduce = useRef(null);
  let totality = 0;
  let tota = 0;
  const {
    viewItem,
    setViewItem,
    currentProduct,
    setCurrentProduct,
    cartItems,
    setCartItems,
    cartNum,
    setCartNum,
    itemCount,
    setItemCount,
    total,
    setTotal,
    totall,
    setTotall,
  } = UserView();
  let newTotal = 0;
  useEffect(() => {
    console.log(cartItems, "=cartitems");
    console.log(totall, "= totall");
    console.log(total, "= total");
    total.forEach((element) => {
      newTotal += element;
    });
    setTotall(newTotal.toFixed(2));
  }, [cartItems, totall, total]);

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

  const handleAddToCart = () => {
    let productExists = false;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === currentProduct.id) {
        productExists = true;
        cartItems[i].pieces += itemCount;
        setCartItems([...cartItems]);
      }
    }

    if (!productExists) {
      setCartItems([...cartItems, currentProduct]),
        (currentProduct.pieces = itemCount),
        setCartNum(cartItems.length + 1);
      console.log(itemCount);
      setItemCount(1);
    }
  };
  return (
    <div className="">
      <Headers />
      <div
        className="bg-amber-50 h-auto "
        style={{ display: viewItem ? "block" : "none" }}
      >
        <Link to="/">
          <button className=" mt-2 mx-2 text-5xl text-white bg-indigo-800">
            <IoIosArrowRoundBack />
          </button>
        </Link>
        <h1 className="text-3xl font-bold text-center ">Product Details</h1>
        <div className="block h-auto justify-between p-2 pb-4 lg:flex md:flex">
          <div className="  h-[40%] md:w-[50%] lg:w-[50%] ">
            <img
              src={currentProduct.image}
              alt=""
              className="w-full h-[80%] object-contain lg:h-[200px]  lg:w-[60%] m-auto "
            />{" "}
            <div className="flex justify-between items-center mt-1 border-2  mt-2 p-2 sm:text-2xl lg:w-[70%] m-auto">
              <button
                ref={reduce}
                onClick={handleDecrement}
                className="bg-indigo-800 text-white font-bold p-2 border-2  rounded-full"
              >
                -
              </button>
              <p className="text-center font-bold">{itemCount}</p>{" "}
              <button
                onClick={handleIncrement}
                className="bg-indigo-800 p-2 text-white font-bold  border-2  rounded-full"
              >
                +
              </button>
            </div>
          </div>
          <div className=" h-full p-2  lg:w-[50%]">
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
              <span className="text-gray-500 text-lg ">
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
            <div className="sm:text-2xl md:text-3xl lg:text-lg text-lg mt-2">
              <p>{currentProduct.description}</p>
            </div>

            <Link>
              <button
                className="flex item-center hover:bg-indigo-500 mt-5 py-3 justify-center bg-indigo-800 text-white px-5 py-1 w-full sm:text-2xl md:text-3xl"
                onClick={() => {
                  handleAddToCart();
                  setTotal([...total, currentProduct.price * itemCount]);
                }}
              >
                Add to Cart
              </button>
            </Link>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Productdetails;
