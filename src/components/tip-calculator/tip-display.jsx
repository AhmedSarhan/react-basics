/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import styles from "./index.module.css";

export const TipDisplay = ({ billAmount, peopleCount, tipPercentage }) => {
  const totalTip = (billAmount * tipPercentage) / 100;
  const personTip = totalTip / peopleCount;
  const totalAmount = billAmount + totalTip;
  const personAmount = totalAmount / peopleCount;

  //   const [totalAmount, setTotalAmount] = useState(0);
  //   const [totalTip, setTotalTip] = useState(0);
  //   const [personTip, setPersonTip] = useState(0);
  //   const [personAmount, setPersonAmount] = useState(0);
  //   useEffect(() => {
  //     const tipAmount = (billAmount * tipPercentage) / 100;
  //     const personTipVal = tipAmount / peopleCount;
  //     const totalAmountPaid = billAmount + tipAmount;
  //     const personPay = totalAmountPaid / peopleCount;
  //     setTotalTip(tipAmount);
  //     setTotalAmount(totalAmountPaid);
  //     setPersonTip(personTipVal);
  //     setPersonAmount(personPay);
  //   }, [billAmount, peopleCount, tipPercentage]);
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
        <div>{totalTip}&nbsp;EGP</div>
      </div>
      <div className={styles.row}>
        <div>
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <div>{isFinite(personTip) ? personTip : 0}&nbsp;EGP</div>
      </div>
      <div className={styles.row}>
        <div>
          <p>Total</p>
          <p>/ person</p>
        </div>
        <div>{isFinite(personAmount) ? personAmount : 0}&nbsp;EGP</div>
      </div>
    </div>
  );
};
