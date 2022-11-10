import { createContext } from "react";

export const TaxContext = createContext();
const tax = 0.25;

export const TaxProvider = ({ children }) => {
  return <TaxContext.Provider value={tax}>{children}</TaxContext.Provider>;
};
