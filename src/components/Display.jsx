import React from "react";
import { displayClass, topClass } from "../styles";
import ResetButton from "./ResetButton";
import EquationDisplay from "./EquationDisplay";
import ResultDisplay from "./ResultDisplay";

const Display = () => {
  return (
    <div className={topClass}>
      <div className="flex justify-between items-start">
        <ResetButton />
        <div className={displayClass}>
          <EquationDisplay />
          <ResultDisplay />
        </div>
      </div>
    </div>
  );
};

export default Display;
