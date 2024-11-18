import React from "react";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";
import { ProductProvider } from "./ProductContext";
import { CartProvider } from "./CartContext";
export const ContextProviders = ({ children }) => {
  return (
    <div>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <UserProvider>{children}</UserProvider>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </div>
  );
};
