import React, { useState } from "react";
import CharacterLimit from "./CharacterLimit";

function ImageTextContentArea({ possibleLength = 30 }) {
  const [text, setText] = useState("");
  const textAreaStyle = {
    width: "100%",
    margin: "20px 0 10px",
    padding: "10px"
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="image-text-content-area-wrapper">
      <div className="image-text-content-area">
        <textarea
          value={text}
          onChange={handleChange}
          row="20"
          col="100"
          maxLength={possibleLength}
          style={textAreaStyle}
        ></textarea>
      </div>
      <CharacterLimit possibleLength={possibleLength} text={text} />
    </div>
  );
}

export default ImageTextContentArea;
