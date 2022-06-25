import React, { createContext, useContext, useEffect, useState } from "react";
import Link from 'next/link'
const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {

  return (
    <MenuContext.Provider >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    console.log("Error using Context");
  }
  return context;
};
