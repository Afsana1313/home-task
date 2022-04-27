import React from "react";

function CharacterLimit({ possibleLength, text }) {
  const subText = {
    fontSize: "11px",
    color: text.length == possibleLength ? "red" : "gray",
    textAlign: "right",
    marginBottom: "30px"
  };
  return (
    <div className="image-text-content-area-character-counting" style={subText}>
      {possibleLength - text.length} character
      {possibleLength - text.length == 1 ? " " : "s "}
      of 30 characters are remaining{" "}
    </div>
  );
}

export default CharacterLimit;
