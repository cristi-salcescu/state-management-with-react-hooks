import React from "react";

const modalStyle = {
  position: "fixed",
  zIndex: 1,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

function ConfirmationModal({ onConfirm, onCancel }) {
  return (
    <div style={modalStyle}>
      <div>
        <div>Are you sure?</div>
        <div>
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
