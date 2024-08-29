/* eslint-disable react/prop-types */
import styles from "./index.module.css";

export const TipCalculatorResult = ({ tipData }) => {
  const tipAmount = (tipData.billAmount * tipData.currentTip) / 100;
  const totalAmount = tipData.billAmount + tipAmount;
  const tipPerPerson = tipAmount / tipData.peopleCount || 0;
  const totalPerPerson = totalAmount / tipData.peopleCount || 0;
  console.log(
    "tipData:",
    tipData,
    tipAmount,
    totalAmount,
    tipPerPerson,
    totalPerPerson
  );
  return (
    <div className={styles.tipDisplay}>
      <div className={styles.row}>
        <div>
          <p>Total Amount</p>
        </div>
        <div>{totalAmount}&nbsp;EGP</div>
      </div>
      <div className={styles.row}>
        <div>
          <p>Total Tip</p>
        </div>
        <div>{tipAmount}&nbsp;EGP</div>
      </div>
      <div className={styles.row}>
        <div>
          <p>Total</p>
          <p>/ person</p>
        </div>
        <div>{totalPerPerson}&nbsp;EGP</div>
      </div>
      <div className={styles.row}>
        <div>
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <div>{tipPerPerson}&nbsp;EGP</div>
      </div>
      <button className={styles.reset}>RESET</button>
    </div>
  );
};
