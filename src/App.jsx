
import { CurrencyConverter } from "./components/currency-converter";

import "./App.css";

function App() {
 
  return (
    <div className="app">
      <h1 style={{ textAlign: "center" }}>React Project #2</h1>
      <h2 style={{ textAlign: "center" }}>Currency Converter</h2>
     <CurrencyConverter />
    </div>
  );
}

export default App;
