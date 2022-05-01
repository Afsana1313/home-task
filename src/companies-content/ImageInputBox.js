import React from "react";
import ImageInput from "./ImageInput";
import ImageTextContentArea from "./ImageTextContentArea";
import fallback from "./fallback.png";

function ImageInputBox({ image }) {
  return (
    <div className="image-input-box-wrapper">
      <ImageInput image={image} width={320} height={240} fallback={fallback} />
      <ImageTextContentArea />
    </div>
  );
}

export default ImageInputBox;
