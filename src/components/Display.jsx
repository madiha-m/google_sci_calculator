import React from "react";
import {
  displayClass,
  equationDisplayClass,
  resetBtnClass,
  resultDisplayClass,
  topClass,
} from "../styles";

const Display = () => {
  return (
    <div className={topClass}>
      <div className="flex justify-between items-start">
        <div className={resetBtnClass}>ResetButton</div>
        <div className={displayClass}>
          <div className={equationDisplayClass}>Equation Display</div>
          <div className={resultDisplayClass}>Result Display</div>
        </div>
      </div>
    </div>
  );
};

export default Display;
