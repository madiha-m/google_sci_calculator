import { useState } from "react";

const useRadDeg = () => {
  const [isRad, setIsRad] = useState(true);

  const toggleRadDeg = () => {
    setIsRad((prev) => !prev); // Toggle between Rad and Deg
  };
  return { isRad, setIsRad };
};

export default useRadDeg;
