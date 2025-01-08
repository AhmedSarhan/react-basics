import React, { useState } from "react";
import styles from "./counter.module.css";
export const Counter = () => {
  let [count, setCount] = useState(0);
  // let count = 0;
  const incrementHandler = (value = 1) => {
    console.log("value", value);
    // let newCount = count + 1;
    setCount((prevCount) => prevCount + value);
    // setCount((prevCount) => prevCount + value);
  };
  const decrementHandler = (value = 1) => {
    setCount(count - value);
  };
  return (
    <div className={styles["counter"]}>
      <button onClick={(e) => incrementHandler(5)} disabled={count > 50}>
        Increment by 5
      </button>
      <button onClick={() => incrementHandler()} disabled={count > 50}>
        Increment
      </button>
      <span>{count}</span>
      <button onClick={() => decrementHandler()} disabled={count < 1}>
        Decrement
      </button>
      <button onClick={() => decrementHandler(5)} disabled={count < 5}>
        Decrement by 5
      </button>
    </div>
  );
};
