import { useState } from "react";
import styles from "./index.module.css";

// const TIP_PERCENTAGES = [5, 10, 15, 25, 50];
export const TioCalculator = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [peopleCount, setPeopleCount] = useState(0);

  return (
    <div className={styles.tipForm}>
      <div className={styles.row}>
        <p>Bill Amount</p>
        <span>EGP</span>
        <input type="number" value={billAmount} onChange={setBillAmount} />
      </div>
      <div className={styles.row}>
        <p>Select Tip</p>
        <ul>
          <li>
            <button>5%</button>
          </li>
          <li>
            <button>10%</button>
          </li>
          <li className={styles.select}>
            <button>15%</button>
          </li>
          <li>
            <button>25%</button>
          </li>
          <li>
            <button>50%</button>
          </li>
          {/* {tipPercentages.map((percentage) => (
            <li key={percentage} className={styles.select}>
              {percentage}%
            </li>
          ))} */}
          <input type="number" placeholder="Custom..." />
        </ul>
      </div>
      <div className={styles.row}>
        <p>Number of People</p>
        <input type="number" value={peopleCount} onChange={setPeopleCount} />
      </div>

      <button type="submit" className={styles.calculateBtn}>
        Calculate
      </button>
    </div>
  );
};
