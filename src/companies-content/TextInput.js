import React, { useState } from "react";
import LinkInsertionModal from "./LinkInsertionModal";
import { AiOutlineLink } from "react-icons/ai";
import { GrLink, GrUnlink } from "react-icons/gr";
import { htmlToDraft } from "html-to-draftjs";
import { draftToHtml } from "draft-js";

function TextInput() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedText, setSelectedText] = useState();
  const [textContent, setTextContent] = useState();
  const [htmlContent, setHtmlContent] = useState();
  const [startIndex, setStartIndex] = useState();
  const [endIndex, setEndIndex] = useState();

  const [linkUrl, setLinkUrl] = useState("");
  //const [linkSrcText, setLinkSrcText] = useState(text);
  const [title, setTitle] = useState("");
  const [targetAttribute, setTargetAttribute] = useState("none");

  const okBtnStyle = {
    backgroundColor: "#257cb6"
  };

  function GetSelectedText() {
    if (document.getSelection) {
      var sel = document.getSelection();
      // alert(sel.getRangeAt(0));

      // console.log(
      //   "From text input file ",
      //   document.getElementById("__text-editor").textContent
      // );
      // console.log("sel ", sel);
      setStartIndex(sel.anchorOffset);
      setEndIndex(sel.focusOffset);
      console.log(sel.anchorOffset, sel.focusOffset);
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
              data-element="createLink"
              type="button"
              className="link-button"
              onClick={() => {
                console.log(document.getElementById("__text-editor").innerHTML);
                setTextContent(
                  document.getElementById("__text-editor").innerHTML
                );
                setOpenModal(true);
                GetSelectedText();
                // document.execCommand(
                //   "createLink",
                //   false,
                //   "https://youtube.com"
                // );
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
          // value={textContent}
          // onInput={(e) => setTextContent(e.target.value)}
          dangerouslySetInnerHTML={{ __html: textContent }}
        ></div>
        {/* <textarea
          className="text-input-area"
          id="__text-editor"
          value={textContent}
          onChange={(e) => setTextContent(e.target.value)}
        /> */}
      </div>
      {!!openModal && (
        <div className="link-insertion-modal-wrapper">
          <div className="link-insertion-modal-container">
            <div className="link-insertion-modal-header">
              <span>Link</span>
              <div className="close-btn" onClick={() => setOpenModal(false)}>
                &times;
              </div>
            </div>
            <div className="link-insertion-modal-body">
              <div className="modal-input-form-wrapper">
                <div className="modal-input-form">
                  <form>
                    <div className="modal-input-form-item">
                      <div className="left">リンク先URL</div>
                      <div className="right">
                        <input
                          type="url"
                          value={linkUrl}
                          onChange={(e) => setLinkUrl(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="modal-input-form-item">
                      <div className="left">リンク元テキスト</div>
                      <div className="right">
                        <input
                          value={selectedText}
                          onChange={(e) => {
                            setSelectedText(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="modal-input-form-item">
                      <div className="left">タイトル</div>
                      <div className="right">
                        <input
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="modal-input-form-item">
                      <div className="left">ターゲット属性</div>
                      <div className="right">
                        <select
                          defaultValue={targetAttribute}
                          onChange={(e) => setTargetAttribute(e.target.value)}
                        >
                          <option value="none">None</option>
                          <option value="_blank">New Window</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="link-insertion-modal-footer">
              <button
                style={okBtnStyle}
                onClick={() => {
                  let newContent =
                    textContent.slice(0, startIndex) +
                    `<b>` +
                    selectedText +
                    `</b>` +
                    textContent.slice(endIndex, textContent.length);
                  //console.log(textContent, selectedText, startIndex, endIndex);
                  console.log(String(newContent));
                  setTextContent(String(newContent));
                  //document.execCommand("createLink", false, targetAttribute);
                  setSelectedText("");
                  setStartIndex();
                  setEndIndex();
                  setOpenModal(false);
                }}
              >
                OK
              </button>
              <button onClick={() => setOpenModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TextInput;
