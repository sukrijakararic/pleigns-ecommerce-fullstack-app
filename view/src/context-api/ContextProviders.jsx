import React from "react";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";
import { ProductProvider } from "./ProductContext";
import { CartProvider } from "./CartContext";
import { OrderProvider } from "./OrderContext";
export const ContextProviders = ({ children }) => {
  return (
    <div>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <OrderProvider>
              <UserProvider>{children}</UserProvider>
            </OrderProvider>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </div>
  );
};
