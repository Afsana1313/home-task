import React, { useState } from "react";
import LinkInsertionModal from "./LinkInsertionModal";

function TextInput() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="text-input-wrapper">
      <div className="text-input-container">
        <div className="text-input-top-bar">
          <div
            className="text-input-top-bar-box"
            onClick={() => setOpenModal(true)}
          >
            link
          </div>
          <div className="text-input-top-bar-box">unlink</div>
        </div>
        <div className="text-input-area"></div>
      </div>
      {!!openModal && (
        <LinkInsertionModal closeModal={() => setOpenModal(false)} />
      )}
    </div>
  );
}

export default TextInput;
