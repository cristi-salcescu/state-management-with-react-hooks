import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

function Example() {
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div>
      <button onClick={showModal}>Show</button>
      {show && <ConfirmationModal onCancel={closeModal} />}
    </div>
  );
}

export default Example;
