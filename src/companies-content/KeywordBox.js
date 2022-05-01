import React from "react";

function KeywordBox({ keyword, index, deleteKeyWord }) {
  return (
    <div className="keyword-box-wrapper">
      {keyword}
      <button onClick={() => deleteKeyWord(index)}>&times;</button>
    </div>
  );
}

export default KeywordBox;
