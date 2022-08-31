import { useState } from "react";
import { createContext } from "react";

export const ModalContext = createContext({
  modal: false,
  setModal: () => {},
  
});
export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);


  const value = {
    modal,
    setModal,

  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
