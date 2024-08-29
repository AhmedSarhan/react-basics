import { TioCalculator } from "./calculator";
import styles from "./index.module.css";
import { TipCalculatorResult } from "./result";
export const Calculator = () => {
  return (
    <div className={styles.container}>
      <TioCalculator />
      <TipCalculatorResult />
    </div>
  );
};
