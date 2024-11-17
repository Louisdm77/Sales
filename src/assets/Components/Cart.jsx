import React from "react";
import Header from "./Header";
import { useState, useContext } from "react";
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
  return (
    <div>
      <Header />
      <div className="block mt-4 text-2xl px-8">
        <div className="">
          <h2 className="text-center">Checkout</h2>

          <table className="lg:w-[100%]  border-collapse">
            <thead>
              <tr className="bg-gray-200 text-center">
                <th className="w-[25%] p-2 text-center border">Product</th>
                <th className="w-[25%] p-2 text-center border">Name</th>
                <th className="w-[25%] p-2 text-center border">Quantity</th>
                <th className="w-[25%] p-2 text-center border">Total</th>
              </tr>
            </thead>
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
                    <tr key={item.id} className="bg-gray-200 mt-4 mb-4">
                      <td className="p-2 border ">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="lg:w-60 lg:h-60 w-30 m-auto h-30 object-contain"
                        />
                      </td>
                      <td className="p-2 border text-center">{item.name}</td>
                      <td className="p-2 border text-center">{item.pieces}</td>
                      <td className="p-2 border text-center  justify-center">
                        ${(item.price * item.pieces).toFixed(2)}{" "}
                        <button
                          className="mx-4"
                          onClick={() => {
                            setCartItems(
                              cartItems.filter(
                                (cartItem) => cartItem.id !== item.id
                              )
                            );
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
        <div className="">
          <h2 className="text-center">Payment Method </h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
