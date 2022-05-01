import React, { useState, useEffect } from "react";
import SectionHeader from "../section-header/SectionHeader";
import "./AddSearchKeyword.css";
import CharacterLimit from "./CharacterLimit";
import KeywordBox from "./KeywordBox";

function AddSearchKeyword({ keywordArray, setKeywordArray }) {
  useEffect(() => {
    console.log(keywordArray);
  });
  const [newWord, setNewWord] = useState("");
  const [text, setText] = useState(() =>
    keywordArray.reduce((sum, currentValue) => sum + currentValue, "")
  );

  const handleNewWord = (e) => {
    setNewWord(e.target.value);
  };
  const handleAddNewKeyWord = (e) => {
    let newKeyWordArray = [...keywordArray, newWord];
    setKeywordArray(newKeyWordArray);
    setNewWord("");
    setText(() =>
      keywordArray.reduce((sum, currentValue) => sum + currentValue, "")
    );
  };
  const handleDeleteKeyWord = (index) => {
    alert(index);
    let newKeyWordArray = keywordArray.filter((i) => {
      if (index !== keywordArray.indexOf(i)) {
        //  console.log(index, keywordArray.indexOf(i));
        return i;
      }
    });
    //console.log(newKeyWordArray);
    setKeywordArray(newKeyWordArray);
    setText(() =>
      newKeyWordArray.reduce((sum, currentValue) => sum + currentValue, "")
    );
  };
  return (
    <div>
      <SectionHeader title="Free Word For Company Search" />
      <div className="add-search-keyword-wrapper">
        <div className="add-search-keyword-top-content">
          <div>Search keyword * It may take up to 1 hour to reflect</div>

          <CharacterLimit possibleLength={500} text={text} />
        </div>
        <div className="add-search-keyword-bottom-content">
          <div className="keyword-search-area">
            <div className="keyword-search-area-input">
              <input type="text" value={newWord} onChange={handleNewWord} />
            </div>
            <div className="keyword-search-area-btn">
              <button type="button" onClick={handleAddNewKeyWord}>
                to add
              </button>
            </div>
          </div>
          <div className="keyword-display-area">
            {keywordArray.map((i) => (
              <KeywordBox
                key={keywordArray.indexOf(i)}
                index={keywordArray.indexOf(i)}
                keyword={i}
                deleteKeyWord={handleDeleteKeyWord}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddSearchKeyword;
