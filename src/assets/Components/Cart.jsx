import React, { useState } from "react";
import Header from "./Header";
import { useContext } from "react";
import { UserView } from "../Context/viewContext.jsx";
import { CiTrash } from "react-icons/ci";

const Cart = () => {
  const {
    cartItems,
    setCartItems,
    cartNum,
    setCartNum,
    itemCount,
    setItemCount,
    currentProduct,
    setCurrentProduct,
  } = UserView();

  const others = {
    tax: 10,
    ship: 10,
  };

  let subTotal = cartItems.reduce((total, item) => total + item.pieces, 0);

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => {
      const newCartItems = prevItems.filter(
        (cartItem) => cartItem.id !== itemId
      );
      setCartNum(newCartItems.length);
      return newCartItems;
    });
  };

  return (
    <div>
      <Header />
      <div className="block mt-4 text-2xl px-8 lg:flex lg:justify-between">
        <div className="lg:w-[60%]">
          <h2 className="text-center font-bold text-2xl">Shopping Cart</h2>
          <p className="flex justify-between items-center my-2 text-lg">
            <span>Subtotal</span>
            <span>${subTotal.toFixed(2)}</span>
          </p>
          <table className="w-full ">
            <tbody>
              {cartItems.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-2 text-center border">
                    Your cart is empty.
                  </td>
                </tr>
              ) : (
                <>
                  <tr>
                    <td colSpan={4} className="p-2 text-start text-lg">
                      Cart ({cartItems.length})
                    </td>
                  </tr>
                  {cartItems.map((item, index) => (
                    <tr
                      key={item.id}
                      className={`${
                        index % 2 !== 0 ? "bg-white" : "bg-gray-100"
                      } text-sm mb-2 md:text-xl`}
                    >
                      <td className="w-[30%] py-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="lg:w-40 lg:h-40 md:w-20 w-full m-auto h-20 md:h-20 object-contain"
                        />
                      </td>
                      <td className="p-1 text-sm lg:text-xl text-red-500 break-words lg:w-[50%] text-center">
                        {item.name}
                      </td>
                      <td className="p-2 text-center lg:w-[10%]">
                        {itemCount[item.id]} pc(s)
                      </td>{" "}
                      <td className="p-2 text-center lg:w-[10%]">
                        {item.price}
                      </td>
                      <td className="p-2 text-center lg:w-[15%]">
                        <div className="flex justify-center items-center">
                          <p>${item.pieces.toFixed(2)}</p>
                          <button
                            className="mx-4"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <CiTrash className="text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
        <div
          className="lg:w-[30%] mt-4 lg:mt-0 p-4 lg:text-2xl text-sm"
          style={{ display: cartItems.length === 0 ? "none" : "block" }}
        >
          <h2 className="text-center font-bold text-2xl">Payment Method</h2>
          <div className="border border-gray-400 p-4 rounded-lg">
            <h2 className="font-bold">Order Summary</h2>
            <p className="flex justify-between items-center my-2">
              <span>Subtotal</span>
              <span>${subTotal.toFixed(2)}</span>
            </p>
            <hr className="border border-gray-300" />
            <p className="flex justify-between items-center my-2">
              <span>Shipping estimate</span>
              <span>${others.ship}</span>
            </p>
            <hr className="border border-gray-300" />
            <p className="flex justify-between items-center my-2">
              <span>Tax estimate</span>
              <span>${others.tax}</span>
            </p>
            <hr className="border border-gray-300" />
            <p className="flex justify-between items-center my-2">
              <span>Order total</span>
              <span>${(subTotal + others.ship + others.tax).toFixed(2)}</span>
            </p>
            <hr className="border-2 border-gray-500" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded mt-4">
              Proceed to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
