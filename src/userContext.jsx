import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext({
  isAllow: false,
  setIsAllow: () => {},
});

export const UserProvider = ({ children }) => {
    const [isAllow, setIsAllow]= useState()
  const value = {
    isAllow,
    setIsAllow,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
