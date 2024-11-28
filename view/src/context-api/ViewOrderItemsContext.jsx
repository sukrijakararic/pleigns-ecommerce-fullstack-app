import React, { createContext, useState } from "react";

export const ViewOrderItemsContext = createContext();

export const ViewOrderItemsProvider = ({ children }) => {
  const [viewOrderItems, setViewOrderItems] = useState([]);
  return (
    <ViewOrderItemsContext.Provider
      value={{ viewOrderItems, setViewOrderItems }}
    >
      {children}
    </ViewOrderItemsContext.Provider>
  );
};
