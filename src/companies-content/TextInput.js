import React, { useState } from "react";
import LinkInsertionModal from "./LinkInsertionModal";
import { AiOutlineLink } from "react-icons/ai";
import { GrLink, GrUnlink } from "react-icons/gr";

function TextInput() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedText, setSelectedText] = useState();
  const [textContent, setTextContent] = useState();

  function GetSelectedText() {
    if (document.getSelection) {
      var sel = document.getSelection();
      // alert(sel.getRangeAt(0));
      alert(sel.anchorOffset);
      return sel;
    } else {
      if (document.selection) {
        var textRange = document.selection.createRange();
        return textRange.text;
      }
    }
  }

  return (
    <div className="text-input-wrapper">
      <div className="text-input-container">
        <div className="text-input-top-bar">
          <div className="text-input-top-bar-box">
            <button
              type="button"
              className="link-button"
              onClick={() => {
                setOpenModal(true);
                setSelectedText(GetSelectedText());
              }}
            >
              <GrLink />
            </button>
            {/* <input type="button" value="ok" /> */}
          </div>
          <div className="text-input-top-bar-box rotate">
            <button type="button" className="link-button">
              <GrUnlink />
            </button>
          </div>
        </div>
        <div
          className="text-input-area"
          id="__text-editor"
          contentEditable
          onInput={(e) => setTextContent(e.target.value)}
        >
          {/* {textContent} */}
        </div>
      </div>
      {!!openModal && (
        <LinkInsertionModal
          closeModal={() => setOpenModal(false)}
          text={selectedText}
          setSelectedText={(e) => setSelectedText(e.target.value)}
        />
      )}
    </div>
  );
}

export default TextInput;
