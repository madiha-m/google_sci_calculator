import { useState } from "react";
import Calculator from "./components/Calculator";
import { BASE_UI, panelClass } from "./utils/styles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={panelClass}>
      <Calculator />
    </div>
  );
}

export default App;
