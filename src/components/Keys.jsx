import React from "react";
import { btnEqualClass, buttonClass } from "../styles";

const Keys = ({ label, keyClass }) => {
  return (
    <div
      className={`${buttonClass} ${
        keyClass === "btn-equal" ? btnEqualClass : ""
      }`}
    >
      {label}
    </div>
  );
};

export default Keys;
