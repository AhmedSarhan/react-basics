import styles from "./index.module.css";
export const Calculator = () => {
  return (
    <div className={styles.container}>
      {/* Tip Form */}
      <div className={styles.tipForm}>
        <div className={styles.row}>
          <p>Bill Amount</p>
          <span>EGP</span>
          <input type="number" />
        </div>
        <div className={styles.row}>
          <p>Select Tip</p>
          <ul>
            <li>5%</li>
            <li>10%</li>
            <li className={styles.select}>15%</li>
            <li>25%</li>
            <li>50%</li>
            <input type="number" placeholder="Custom..." />
          </ul>
        </div>
        <div className={styles.row}>
          <p>Number of People</p>
          <input type="number" />
        </div>
      </div>
      {/* Tip Display */}
      <div className={styles.tipDisplay}>
        <div className={styles.row}>
          <div>
            <p>Total Amount</p>
          </div>
          <div>1050&nbsp;EGP</div>
        </div>
        <div className={styles.row}>
          <div>
            <p>Total Tip</p>
          </div>
          <div>250&nbsp;EGP</div>
        </div>
        <div className={styles.row}>
          <div>
            <p>Tip Amount</p>
            <p>/ person</p>
          </div>
          <div>50&nbsp;EGP</div>
        </div>
        <div className={styles.row}>
          <div>
            <p>Total</p>
            <p>/ person</p>
          </div>
          <div>450&nbsp;EGP</div>
        </div>
        <button className={styles.reset}>RESET</button>
      </div>
    </div>
  );
};
