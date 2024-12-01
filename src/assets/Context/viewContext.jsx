import React, { Children, createContext, useContext, useState } from "react";

const ViewContext = createContext();

const ViewContextProvider = ({ children }) => {
  const [fix, setFix] = useState(false);
  const [viewItem, setViewItem] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartNum, setCartNum] = useState(0);
  const [itemCount, setItemCount] = useState({});
  const [itemNum, setItemNum] = useState(1);
  const [currentProduct, setCurrentProduct] = useState({
    id: "",
    image: "",
    name: "",
    price: "",
    discountPercentage: "",
    pieces: 0,
    description: "",
    total: 1,
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
        itemNum,
        setItemNum,
        fix,
        setFix,
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
