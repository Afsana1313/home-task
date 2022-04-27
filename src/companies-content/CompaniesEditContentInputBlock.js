import React, { useState } from "react";
import "./content-input-style.css";
import TextInput from "./TextInput";
import ImageInputBox from "./ImageInputBox";
import ImageInput from "./ImageInput";
import SectionHeader from "../section-header/SectionHeader";
function CompaniesEditContentInputBlock({ title, imageOne, imageTwo }) {
  return (
    <div className="content-input-block-wrapper">
      <SectionHeader title={title} />
      <div className="content-input-block">
        <div className="left-block">
          <TextInput />
        </div>
        <div className="right-block">
          <ImageInputBox image={imageOne} />
          <ImageInputBox image={imageTwo} />
        </div>
      </div>
    </div>
  );
}

export default CompaniesEditContentInputBlock;
