import React, { useState } from "react";

function ModalInputForm() {
  const [linkUrl, setLinkUrl] = useState("");
  const [linkSrcText, setLinkSrcText] = useState("");
  const [title, setTitle] = useState("");
  const [attribute, setAttribute] = useState("none");
  return (
    <div className="modal-input-form-wrapper">
      <div className="modal-input-form">
        <form>
          <div className="modal-input-form-item">
            <div className="left">Link Url</div>
            <div className="right">
              <input
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-input-form-item">
            <div className="left">Link Source Text</div>
            <div className="right">
              <input
                value={linkSrcText}
                onChange={(e) => setLinkSrcText(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-input-form-item">
            <div className="left">Title</div>
            <div className="right">
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
          </div>
          <div className="modal-input-form-item">
            <div className="left">Target Attribute</div>
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
