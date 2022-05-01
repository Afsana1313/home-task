import React from "react";
import ImageInput from "./ImageInput";
import banner from "./banner.png";
import fallback from "./banner-fallback.png";
function CompaniesBanner() {
  return (
    <div>
      <ImageInput image={banner} width={980} height={400} fallback={fallback} />
    </div>
  );
}

export default CompaniesBanner;
