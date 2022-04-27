import React, { useState } from "react";
import "./content-input-style.css";
import TextInput from "./TextInput";
import ImageInputBox from "./ImageInputBox";
import ImageInput from "./ImageInput";

function BusinessContentInputBlock() {
  return (
    <div className="content-input-block-wrapper">
      <div className="content-input-block">
        <div className="left-block">
          <TextInput />
        </div>
        <div className="right-block">
          <ImageInputBox />
          <ImageInputBox />
        </div>
      </div>
    </div>
  );
}

export default BusinessContentInputBlock;
