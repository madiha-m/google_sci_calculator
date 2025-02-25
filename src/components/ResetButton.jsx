import React from "react";
import { resetBtnClass, resetIconClass } from "../styles";
import { GrPowerReset } from "react-icons/gr";

const ResetButton = () => {
  return (
    <div className={resetBtnClass}>
      <GrPowerReset className={resetIconClass} />
    </div>
  );
};

export default ResetButton;
