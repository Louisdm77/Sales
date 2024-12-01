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
  } = UserView();

  const others = {
    tax: 10,
    ship: 10,
  };
  let subTotal = 0;

  for (let x = 0; x < cartItems.length; x++) {
    subTotal += cartItems[x].total;
  }

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
          <table className=" w-full ">
            <tbody>
              {cartItems.length === 0 ? (
                <tr className="border-separate">
                  <td colSpan={4} className="p-2 text-center border">
                    Your cart is empty.
                  </td>
                </tr>
              ) : (
                <>
                  <tr>
                    <td colSpan={4} className="p-2 text-start  text-lg">
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
                      <td className="py-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="lg:w-40 lg:h-40 w-20 m-auto h-20 md:h-20 md:w-20 md:text-2xl object-cover"
                        />
                      </td>
                      <td className="p-1 text-sm lg:text-2xl text-red-500  text-center">
                        {item.name}
                      </td>
                      <td className="p-2  text-center">{item.pieces}pc(s)</td>
                      <td className="p-2  text-center   justify-center">
                        <div className="flex justify-center items-center">
                          <p>${(item.price * item.pieces).toFixed(2)}</p>{" "}
                          <button
                            className="mx-4"
                            onClick={() => {
                              setCartNum(cartNum - 1);
                            }}
                          >
                            <CiTrash
                              className="text-red-500"
                              // onClick={() => {
                              //   setCartItems((prevItems) => {
                              //     const newCartItems = prevItems.filter(
                              //       (cartItem) => cartItem.id !== item.id
                              //     );
                              //     setCartNum(newCartItems.length); // Update cartNum based on new item count
                              //     return newCartItems;
                              //   });
                              // }}
                              onClick={() => {
                                setCartItems((prevItems) => {
                                  let newCartItems = prevItems.filter(
                                    (cartItems) => cartItems.id !== item.id
                                  );
                                  setCartNum(newCartItems.length);
                                  return newCartItems;
                                });
                              }}
                            />
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
          style={{
            display: cartItems.length === 0 ? "none" : "block",
          }}
        >
          <h2 className="text-center font-bold text-2xl">Payment Method </h2>

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
