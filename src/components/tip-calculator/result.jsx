import styles from "./index.module.css";

export const TipCalculatorResult = () => {
  return (
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
  );
};
