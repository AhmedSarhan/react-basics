import { useState, useEffect } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./index.module.css";
export const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [amount, setAmount] = useState(1);
  const [output, setOutput] = useState(0);

  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.converter}>
          <div className={styles.amount}>
            <h3>Amount</h3>
            <input
              type="text"
              placeholder="Enter the amount"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          </div>
          <div className={styles["from-curency"]}>
            <h3>From</h3>
            <select
              onChange={(e) => {
                setFromCurrency(e.target.value);
              }}
              value={fromCurrency}
              placeholder="From"
            >
              {currencies.map((curency) => (
                <option key={curency} value={curency}>
                  {curency}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.switch}>
            <FontAwesomeIcon
              icon={faArrowRightArrowLeft}
              fontSize="30px"
              onClick={() => {
                flip();
              }}
            />
          </div>
          <div className={styles["to-currency"]}>
            <h3>To</h3>
            <select
              onChange={(e) => {
                setToCurrency(e.target.value);
              }}
              value={toCurrency}
              placeholder="To"
            >
              {currencies.map((curency) => (
                <option key={curency} value={curency}>
                  {curency}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          onClick={() => {
            convert();
          }}
        >
          Convert
        </button>
      </div>
      <div className={styles.result}>
        <h2>Converted Amount:</h2>
        <p>
          {amount +
            " " +
            fromCurrency +
            " = " +
            output.toFixed(2) +
            " " +
            toCurrency}
        </p>{" "}
      </div>
    </>
  );
};
