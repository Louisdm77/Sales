import React, { Children, createContext, useContext, useState } from "react";

const ViewContext = createContext();

const ViewContextProvider = ({ children }) => {
  const [viewItem, setViewItem] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    id: "",
    image: "",
    name: "",
    price: "",
    discountPercentage: "",
    pieces: 1,
    description: "",
  });
  return (
    <ViewContext.Provider
      value={{
        viewItem,
        setViewItem,
        currentProduct,
        setCurrentProduct,
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
