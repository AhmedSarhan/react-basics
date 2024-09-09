import "./App.css";
import { Calculator } from "./components/tip-calculator";

function App() {
  return (
    <>
      <Calculator />
    </>
  );
}

export default App;

// ToDos:
// 1. rename the calculator.jsx file to index.jsx
// 2. split the index.jsx file to two files: calculator.jsx and tip-display.jsx
// 3. manage the bill amount state with useState hook
// 5. manage the number of people state with useState hook
// 4. manage the tip percentage state with useState hook
// 5. refactor the tip percentage display to use lists
// 6. add the select percentage class conditionally
// 7. in the index.jsx file create useReducer to collect the data on submit
// 8. add the calculation functionalities required  to the display component
// 9. reflect the calculations on the display component
// 10. add the reset functionality
