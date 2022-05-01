import React, { useState } from "react";

function ModalInputForm({ text, setSelectedText }) {
  const [linkUrl, setLinkUrl] = useState("");
  const [linkSrcText, setLinkSrcText] = useState("");
  const [title, setTitle] = useState("");
  const [attribute, setAttribute] = useState("none");
  return (
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
              <input value={text} onChange={setSelectedText} />
            </div>
          </div>
          <div className="modal-input-form-item">
            <div className="left">タイトル</div>
            <div className="right">
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
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
  );
}

export default ModalInputForm;
