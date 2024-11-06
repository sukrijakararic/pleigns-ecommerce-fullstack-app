import React from "react";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";

export const ContextProviders = ({ children }) => {
  return (
    <div>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </div>
  );
};
