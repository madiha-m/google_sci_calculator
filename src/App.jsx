import Calculator from "./components/Calculator";
import { panelClass } from "./utils/styles";

function App() {
  return (
    <div className={panelClass}>
      <Calculator />
    </div>
  );
}

export default App;
