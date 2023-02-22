import { createContext, useContext } from "react";

const ModalContext = createContext({});

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Missing ContextProvider");
  }
  return context;
};

export { ModalContext, useModalContext };
