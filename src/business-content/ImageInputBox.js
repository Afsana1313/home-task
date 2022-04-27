import React from "react";
import ImageInput from "./ImageInput";
import ImageTextContentArea from "./ImageTextContentArea";
function ImageInputBox() {
  return (
    <div className="image-input-box-wrapper">
      <ImageInput />
      <ImageTextContentArea />
    </div>
  );
}

export default ImageInputBox;
