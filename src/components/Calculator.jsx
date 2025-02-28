import React from "react";
import { bodyClass, buttonGridClass } from "../styles";
import { KEYS } from "../utils/constantUtils";
import Keys from "./Keys";
import Display from "./Display";
import { handleButtonClick } from "../utils/calculatorUtils";
import useRadDeg from "../hooks/useRadDeg";

const Calculator = () => {
  const { isRad, toggleRadDeg } = useRadDeg();
  return (
    <div className={bodyClass}>
      <Display />
      <div className={buttonGridClass}>
        {KEYS.map((item, index) => (
          <Keys
            label={item}
            key={index}
            keyClass={
              item === "="
                ? "btn-equal"
                : item === "Rad | Deg"
                ? "btn-rad-deg"
                : ""
            }
            isRad={isRad}
            onButtonClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
