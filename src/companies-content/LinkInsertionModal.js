import React, { useState } from "react";
import ModalInputForm from "./ModalInputForm";

function LinkInsertionModal({
  closeModal,
  text,
  setSelectedText,
  textContent,
  setTextContent,
  start,
  end
}) {
  const [linkUrl, setLinkUrl] = useState("");
  const [linkSrcText, setLinkSrcText] = useState(text);
  const [title, setTitle] = useState("");
  const [attribute, setAttribute] = useState("none");
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
          <div className="modal-input-form-wrapper">
            <div className="modal-input-form">
              <form>
                <div className="modal-input-form-item">
                  <div className="left">リンク先URL</div>
                  <div className="right">
                    <input
                      value={linkUrl}
                      onChange={(e) => setLinkUrl(e.target.value)}
                    />
                  </div>
                </div>
                <div className="modal-input-form-item">
                  <div className="left">リンク元テキスト</div>
                  <div className="right">
                    <input
                      value={linkSrcText}
                      onChange={(e) => setLinkSrcText(e.target.value)}
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
                    <select onChange={(e) => setAttribute(e.target.value)}>
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
                textContent.slice(0, start) +
                linkSrcText +
                textContent.slice(end, textContent.length);
              console.log(textContent, text, start, end);
              console.log(linkSrcText);
              setTextContent(newContent);
              closeModal();
            }}
          >
            OK
          </button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default LinkInsertionModal;
