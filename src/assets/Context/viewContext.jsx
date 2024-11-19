import React, { Children, createContext, useContext, useState } from "react";

const ViewContext = createContext();

const ViewContextProvider = ({ children }) => {
  const [viewItem, setViewItem] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartNum, setCartNum] = useState(0);
  const [itemCount, setItemCount] = useState(1);
  const [total, setTotal] = useState([]);
  const [totall, setTotall] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);
  const [currentProduct, setCurrentProduct] = useState({
    id: "",
    image: "",
    name: "",
    price: "",
    discountPercentage: "",
    pieces: itemCount,
    description: "",
  });
  return (
    <ViewContext.Provider
      value={{
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
        orderTotal,
        setOrderTotal,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};
export default ViewContextProvider;

export const UserView = () => {
  return useContext(ViewContext);
};
