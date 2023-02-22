import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ConfirmationModal({ onConfirm, onCancel }) {
  return (
    <Modal>
      <div>
        <div>Are you sure?</div>
        <div>
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmationModal;
