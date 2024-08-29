/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./index.module.css";

const TIP_PERCENTAGES = [5, 10, 15, 25, 50];
export const TioCalculator = ({ setTipData }) => {
  const [billAmount, setBillAmount] = useState(0);
  const [peopleCount, setPeopleCount] = useState(0);
  const [currentTip, setCurrentTip] = useState(15);

  const handleReset = () => {
    setBillAmount(0);
    setPeopleCount(0);
    setCurrentTip(15);
    setTipData({
      billAmount: Number(0),
      peopleCount: Number(0),
      currentTip: Number(15),
    });
  };

  const calculateHandler = (e) => {
    e.preventDefault();
    console.log("billAmount:", billAmount);
    console.log("peopleCount:", peopleCount);
    console.log("currentTip:", currentTip);
    setTipData({
      billAmount: Number(billAmount),
      peopleCount: Number(peopleCount),
      currentTip: Number(currentTip),
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
          onChange={(e) => {
            setBillAmount(e.target.value);
          }}
        />
      </div>
      <div className={styles.row}>
        <p>Select Tip</p>
        <ul>
          {TIP_PERCENTAGES.map((percentage) => (
            <li
              key={percentage}
              className={currentTip === percentage ? styles.select : ""}
            >
              <button type="button" onClick={() => setCurrentTip(percentage)}>
                {percentage}%
              </button>
            </li>
          ))}
          <input type="number" placeholder="Custom..." />
        </ul>
      </div>
      <div className={styles.row}>
        <p>Number of People</p>
        <input
          type="number"
          value={peopleCount}
          onChange={(e) => {
            setPeopleCount(e.target.value);
          }}
        />
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.calculateBtn}>
          Calculate
        </button>
        <button type="button" onClick={handleReset} className={styles.reset}>
          Reset
        </button>
      </div>
    </form>
  );
};
