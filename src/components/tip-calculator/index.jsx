import { CalculatorForm } from "./calculator";
import styles from "./index.module.css";
import { TipDisplay } from "./tip-display";
import { useReducer } from "react";

const reducerFn = (prevState, newState) => {
  return { ...prevState, ...newState };
};
export const Calculator = () => {
  // const [displayData, setDisplayData] = useState({
  //   billAmount: 0,
  //   peopleCount: 0,
  //   tipPercentage: 15,
  // });

  const [displayData, setDisplayData] = useReducer(reducerFn, {
    billAmount: 0,
    peopleCount: 0,
    tipPercentage: 15,
  });
  return (
    <div className={styles.container}>
      {/* Tip Form */}
      <CalculatorForm setDisplayData={setDisplayData} />
      {/* Tip Display */}
      <TipDisplay
        // billAmount={Number(billAmount)}
        // peopleCount={Number(peopleCount)}
        // tipPercentage={Number(tipPercentage)}
        {...{
          billAmount: displayData.billAmount,
          peopleCount: displayData.peopleCount,
          tipPercentage: displayData.tipPercentage,
        }}
      />
    </div>
  );
};
