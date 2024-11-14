import React from "react";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";
import { ProductProvider } from "./ProductContext";

export const ContextProviders = ({ children }) => {
  return (
    <div>
      <AuthProvider>
        <ProductProvider>
        <UserProvider>{children}</UserProvider>
        </ProductProvider>
      </AuthProvider>
    </div>
  );
};
