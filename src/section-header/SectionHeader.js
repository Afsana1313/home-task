import React from "react";
import "./section-header.css";
function SectionHeader({ title }) {
  return (
    <div className="section-header-wrapper">
      <div className="red-bar"></div>
      <div className="section-header-title">{title}</div>
      <div className="gray-bar"></div>
    </div>
  );
}

export default SectionHeader;
