import React from "react";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";
import { ProductProvider } from "./ProductContext";
import { CartProvider } from "./CartContext";
import { OrderProvider } from "./OrderContext";
import { ViewOrderItemsProvider } from "./ViewOrderItemsContext";
export const ContextProviders = ({ children }) => {
  return (
    <div>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <OrderProvider>
              <ViewOrderItemsProvider>
                <UserProvider>{children}</UserProvider>
              </ViewOrderItemsProvider>
            </OrderProvider>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </div>
  );
};
