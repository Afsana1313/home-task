import React, { useState } from "react";
//import fallback from "./fallback.png";

function ImageInput({ image, width, height, fallback }) {
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState(image);
  const [showImage, setShowImage] = useState(true);

  function handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let uploadedFile = e.target.files[0];

    reader.onloadend = () => {
      setFile(uploadedFile);
      setImagePreviewUrl(reader.result);
      setShowImage(true);
    };

    reader.readAsDataURL(uploadedFile);
  }
  const handleReUpload = () => {
    // setFile("");
    // setImagePreviewUrl("");
    setShowImage(false);
  };
  const handleReturnToOrigin = () => {
    setShowImage(true);
  };
  const imageArea = {
    width: width + `px`,
    height: height + `px`
  };
  const deleteBtnStyle = {
    display: file == "" || image ? "block" : "none",
    transition: "all 0.3s ease-in",
    opacity: showImage ? "1" : "0",
    fontWeight: "bold",
    color: "#fff",
    fontSize: "20px",
    backgroundColor: "#000",
    height: "30px",
    padding: "0 5px",
    margin: "0 auto",
    zIndex: "1000000"
  };
  const uploadedImageStyle = {
    transition: "all 0.3s ease-in",
    transformOrigin: "bottom right",
    transform: !showImage ? "scale(0.5)" : "none",
    zIndex: !showImage ? 0 : 100
  };
  let $imagePreview = null;
  if (imagePreviewUrl) {
    $imagePreview = <img src={imagePreviewUrl} />;
  } else {
    $imagePreview = (
      <div className="previewText">Please select an Image for Preview</div>
    );
  }
  return (
    <div className="image-input-wrapper">
      <div className="image-input-container" style={imageArea}>
        <img style={imageArea} src={fallback} alt="Fallback Image" />
        <button className="return-btn" onClick={handleReturnToOrigin}>
          Return to the original
        </button>
        <input
          className="select-image-btn"
          type="file"
          onChange={(e) => handleImageChange(e)}
        />
        <div className="image-preview-container" style={uploadedImageStyle}>
          <img className="uploaded-image" src={imagePreviewUrl} alt="" />
          <span
            className="delete-btn"
            onClick={handleReUpload}
            style={deleteBtnStyle}
          >
            &times;
          </span>
        </div>
      </div>
    </div>
  );
}

export default ImageInput;
