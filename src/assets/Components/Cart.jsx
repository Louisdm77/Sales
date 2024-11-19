import React from "react";
import Header from "./Header";
import { useState, useContext, useEffect } from "react";
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
    total,
    setTotal,
    totall,
    setTotall,
    orderTotal,
    setOrderTotal,
  } = UserView();

  const others = {
    tax: 10,
    ship: 10,
  };

  useEffect(() => {
    const neww = parseFloat(totall) + (others.tax || 0) + (others.ship || 0); // Ensure totall others.tax and others.ship are numbers
    setOrderTotal(neww.toFixed(2)); // Convert to a string with 2 decimal places
  }, [totall, others.tax, others.ship]); // Add others.tax and others.ship to dependencies
  return (
    <div>
      <Header />
      <div className="block mt-4 text-2xl px-8 lg:flex lg:justify-between">
        <div className="lg:w-[60%]">
          <h2 className="text-center font-bold text-2xl">Shopping Cart</h2>

          <table className=" w-full ">
            {/* <thead>
              <tr className="bg-gray-200 text-center">
                <th className="w-[25%] p-2 text-center border">Product</th>
                <th className="w-[25%] p-2 text-center border">Name</th>
                <th className="w-[25%] p-2 text-center border">Quantity</th>
                <th className="w-[25%] p-2 text-center border">Total</th>
              </tr>
            </thead> */}
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
                    <td colSpan={4} className="p-2 text-center border text-lg">
                      You have {cartItems.length} items in your cart.
                    </td>
                  </tr>
                  {cartItems.map((item) => (
                    <tr
                      key={item.id}
                      className="bg-gray-200"
                      style={{ marginBottom: "10px" }}
                    >
                      <td className="p-2 border ">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="lg:w-40 lg:h-40 w-20 m-auto h-20 object-contain"
                        />
                      </td>
                      <td className="p-2 border text-center">{item.name}</td>
                      <td className="p-2 border text-center">{item.pieces}</td>
                      <td className="p-2 border text-center  justify-center">
                        ${(item.price * item.pieces).toFixed(2)}{" "}
                        <button
                          className="mx-4"
                          onClick={() => {
                            setCartNum(cartNum - 1);
                            setCartItems((prevCartItems) => {
                              const newCartItems = prevCartItems.filter(
                                (cartItem) => cartItem.id !== item.id
                              );
                              return newCartItems;
                            });
                            setTotall(totall - item.price);
                          }}
                        >
                          <CiTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
        <div
          className="lg:w-[30%] mt-4 lg:mt-0 p-4"
          style={{
            display: cartItems.length === 0 ? "none" : "block",
          }}
        >
          <h2 className="text-center font-bold text-2xl">Payment Method </h2>

          <div className="border border-gray-400 p-4 rounded-lg">
            <h2 className="font-bold">Order Summary</h2>
            <p className="flex justify-between items-center my-2">
              <span>Subtotal</span>
              <span>${totall}</span>
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
              <span>${orderTotal}</span>
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
