/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./index.module.css";
const TIPS_PERCENTAGES = [5, 10, 15, 25, 50];
export const CalculatorForm = ({ setDisplayData }) => {
  const [billAmount, setBillAmount] = useState(0);
  const [peopleCount, setPeopleCount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(15);
  console.log("billAmount", billAmount);

  const calculateHandler = (e) => {
    e.preventDefault();
    setDisplayData({
      billAmount: Number(billAmount),
      peopleCount: Number(peopleCount),
      tipPercentage: Number(tipPercentage),
    });
  };

  const resetHandler = () => {
    setBillAmount(0);
    setPeopleCount(0);
    setTipPercentage(15);
    setDisplayData({
      billAmount: 0,
      peopleCount: 0,
      tipPercentage: 15,
    });
  };
  return (
    <form className={styles.tipForm} onSubmit={calculateHandler}>
      <div className={styles.row}>
        <p>Bill Amount</p>
        <span>EGP</span>
        <input
          type="number"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <p>Select Tip</p>
        <ul>
          {TIPS_PERCENTAGES.map((percentage) => (
            <li
              key={percentage}
              className={tipPercentage === percentage ? styles.select : ""}
            >
              <button
                type="button"
                onClick={() => setTipPercentage(percentage)}
              >
                {percentage}%
              </button>
            </li>
          ))}

          <input
            type="number"
            placeholder="Custom..."
            value={tipPercentage}
            onChange={(e) => setTipPercentage(e.target.value)}
          />
        </ul>
      </div>
      <div className={styles.row}>
        <p>Number of People</p>
        <input
          type="number"
          value={peopleCount}
          onChange={(e) => setPeopleCount(e.target.value)}
        />
      </div>
      <div className={styles.actions}>
        <button type="submit" className={styles.calculateBtn}>
          Calculate
        </button>
        <button type="button" onClick={resetHandler} className={styles.reset}>
          Reset
        </button>
      </div>
    </form>
  );
};
