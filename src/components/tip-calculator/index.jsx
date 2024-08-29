import { useReducer } from "react";
import { TioCalculator } from "./calculator";
import styles from "./index.module.css";
import { TipCalculatorResult } from "./result";

const reducerFn = (prevState, newState) => {
  return { ...prevState, ...newState };
};
export const Calculator = () => {
  // const [tipData, setTipData] = useState({
  //   billAmount: 0,
  //   peopleCount: 0,
  //   currentTip: 15,
  // })
  const [tipData, setTipData] = useReducer(reducerFn, {
    billAmount: 0,
    peopleCount: 0,
    currentTip: 15,
  });
  return (
    <div className={styles.container}>
      <TioCalculator setTipData={setTipData} />
      <TipCalculatorResult tipData={tipData} />
    </div>
  );
};
