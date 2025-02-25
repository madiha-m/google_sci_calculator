import React from "react";
import { bodyClass, gridLayoutKeysClass } from "../styles";
import { KEYS } from "../utils/constants";
import Keys from "./Keys";
import Display from "./Display";

const Calculator = () => {
  return (
    <div className={bodyClass}>
      <Display />
      <div className={gridLayoutKeysClass}>
        {KEYS.map((item, index) => (
          <Keys
            label={item}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
