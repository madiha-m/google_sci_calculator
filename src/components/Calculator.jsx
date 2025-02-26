import React from "react";
import { bodyClass, buttonGridClass } from "../styles";
import { KEYS } from "../utils/constants";
import Keys from "./Keys";
import Display from "./Display";

const Calculator = () => {
  return (
    <div className={bodyClass}>
      <Display />
      <div className={buttonGridClass}>
        {KEYS.map((item, index) => (
          <Keys
            label={item}
            key={index}
            keyClass={item === "=" ? "btn-equal" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
