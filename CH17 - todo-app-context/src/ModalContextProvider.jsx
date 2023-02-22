import { useState } from "react";
import { ModalContext } from "./ModalContext";

const ModalContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const showModalAndSelectId = (id) => {
    setSelectedId(id);
    showModal();
  };

  const value = {
    show,
    selectedId,
    showModalAndSelectId,
    closeModal
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalContextProvider;
