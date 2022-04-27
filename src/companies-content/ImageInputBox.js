import React from "react";
import ImageInput from "./ImageInput";
import ImageTextContentArea from "./ImageTextContentArea";
function ImageInputBox({ image }) {
  return (
    <div className="image-input-box-wrapper">
      <ImageInput image={image} />
      <ImageTextContentArea />
    </div>
  );
}

export default ImageInputBox;
