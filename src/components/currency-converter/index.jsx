import { useState, useEffect, useReducer } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./index.module.css";
import { getCurrencies } from "../../api/get-currencies";
import { convertCurrencies } from "../../api/convert-currencies";

const reducerFn = (prevState, newState) => {
  return { ...prevState, ...newState };
};
export const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("CHF");
  const [amount, setAmount] = useState(1);

  const [displayData, setDisplayData] = useReducer(reducerFn, {
    fromCurrency,
    toCurrency,
    input: 0,
    output: 0,
  });
  const getCurrenciesHandler = async () => {
    const apiCurrencies = await getCurrencies();
    setCurrencies(apiCurrencies);
  };

  useEffect(() => {
    getCurrenciesHandler();
  }, []);

  const convertCurrenciesHandler = async () => {
    const convertedCurrency = await convertCurrencies("EGP", "SAR", "amount");
    setDisplayData({
      fromCurrency,
      toCurrency,
      input: amount,
      output: convertedCurrency,
    });
  };

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
                <option key={curency.code} value={curency.code}>
                  {`${curency.name} (${curency.symbol_native})`}
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
                <option key={curency.code} value={curency.code}>
                  {/* {`${curency.name} (${curency.symbol_native})`} */}
                  {curency.name} ({curency.symbol_native})
                </option>
              ))}
            </select>
          </div>
        </div>
        <button onClick={convertCurrenciesHandler}>Convert</button>
      </div>
      <div className={styles.result}>
        <h2>Converted Amount:</h2>
        <p>
          {displayData.input +
            " " +
            displayData.fromCurrency +
            " = " +
            displayData.output.toFixed(2) +
            " " +
            displayData.toCurrency}
        </p>{" "}
      </div>
    </>
  );
};
