import React, { useState } from "react";
import LinkInsertionModal from "./LinkInsertionModal";
import { AiOutlineLink } from "react-icons/ai";
import { GrLink, GrUnlink } from "react-icons/gr";

function TextInput() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedText, setSelectedText] = useState();
  const [textContent, setTextContent] = useState();
  const [startIndex, setStartIndex] = useState();
  const [endIndex, setEndIndex] = useState();
  function GetSelectedText() {
    if (document.getSelection) {
      var sel = document.getSelection();
      // alert(sel.getRangeAt(0));
      setTextContent(document.getElementById("__text-editor").textContent);
      console.log(document.getElementById("__text-editor").textContent);
      setStartIndex(sel.anchorOffset);
      setEndIndex(sel.focusOffset);
      // console.log(sel.anchorOffset, sel.focusOffset);
      setSelectedText(sel.toString());
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
                GetSelectedText();
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
          start={startIndex}
          end={endIndex}
          closeModal={() => setOpenModal(false)}
          text={selectedText}
          textContent={textContent}
          setSelectedText={(e) => setSelectedText(e.target.value)}
          setTextContent={(newContent) => setTextContent(newContent)}
        />
      )}
    </div>
  );
}

export default TextInput;
