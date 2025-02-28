import React from "react";
import { btnEqualClass, btnRadDegClass, buttonClass } from "../styles";

const Keys = ({ label, keyClass, isRad, onButtonClick }) => {
  return (
    <div
      className={`${buttonClass} ${
        keyClass === "btn-equal"
          ? btnEqualClass
          : keyClass === "btn-rad-deg"
          ? btnRadDegClass
          : ""
      }`}
      onClick={() => onButtonClick(label)}
    >
      {label === "Rad | Deg" ? (
        <>
          <span className={isRad ? "text-blue-500" : "text-white"}>Rad</span>
          <span className="text-gray-400 mx-8">|</span>
          <span className={!isRad ? "text-blue-500" : "text-white"}>Deg</span>
        </>
      ) : (
        label
      )}
    </div>
  );
};

export default Keys;
