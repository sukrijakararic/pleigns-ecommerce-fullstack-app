import React, { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderList, setOrderList] = useState([]);
  return (
    <div>
      <OrderContext.Provider value={{ orderList, setOrderList }}>
        {children}
      </OrderContext.Provider>
    </div>
  );
};