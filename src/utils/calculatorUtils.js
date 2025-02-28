export const handleButtonClick = (value, toggleRadDeg, handleButtonClick) => {
  if (value === "Rad | Deg") {
    toggleRadDeg(); // Toggle the state when the button is clicked
  } else {
    handleButtonClick(value); // Handle other button clicks
  }
};
