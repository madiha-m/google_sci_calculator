import React from "react";
import { buttonClass } from "../styles";

const Keys = ({ label }) => {
  return <div className={`${buttonClass}`}>{label}</div>;
};

export default Keys;
