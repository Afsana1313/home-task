import React, { useState } from "react";
import ModalInputForm from "./ModalInputForm";

function LinkInsertionModal({ closeModal, text, setSelectedText }) {
  const okBtnStyle = {
    backgroundColor: "#257cb6"
  };
  return (
    <div className="link-insertion-modal-wrapper">
      <div className="link-insertion-modal-container">
        <div className="link-insertion-modal-header">
          <span>Link</span>
          <div className="close-btn" onClick={closeModal}>
            &times;
          </div>
        </div>
        <div className="link-insertion-modal-body">
          <ModalInputForm text={text} setSelectedText={setSelectedText} />
        </div>
        <div className="link-insertion-modal-footer">
          <button style={okBtnStyle} onClick={closeModal}>
            OK
          </button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default LinkInsertionModal;
