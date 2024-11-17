import React from "react";
import Header from "./Header";
import { useState, useContext } from "react";
import { UserView } from "../Context/viewContext.jsx";
import Drinks from "./Drinks.jsx";
const Cart = () => {
  const {
    cartItems,
    setCartItems,
    cartNum,
    setCartNum,
    itemCount,
    setItemCount,
  } = UserView();
  return (
    <div>
      <Header />
      <div className="block mt-4 text-2xl">
        <div className="">
          <h2 className="text-center">Checkout</h2>
          <div className="p-2 flex justify-between mt-6 items-center border-b-2 border-gray-300 pb-4">
            <h2>Product</h2>
            <h2>Name</h2>
            <h2>Quantity</h2>
            <h2>Total</h2>
          </div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.name}
                  className="p-2 flex justify-between mt-6 items-center border-b-2 border-gray-300 pb-4"
                >
                  <div className="w-16 h-16 ">{item.img}</div>
                  <h3>{item.name}</h3>
                  <p> {item.pieces}</p>
                  <p> ${item.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="">
          <h2 className="text-center">Payment Method </h2>
        </div>
      </div>
      <Drinks />
    </div>
  );
};

export default Cart;
