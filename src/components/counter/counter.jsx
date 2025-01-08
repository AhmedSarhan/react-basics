import React, { useState } from "react";
import styles from "./counter.module.css";
export const Counter = () => {
  let [count, setCount] = useState(0);
  // let count = 0;
  const incrementHandler = () => {
    // let newCount = count + 1;
    setCount(count + 1);
  };
  return (
    <div className={styles["counter"]}>
      <button onClick={incrementHandler}>Increment by 5</button>
      <button onClick={incrementHandler}>Increment is {count}</button>
      <span>{count}</span>
      <button onClick={incrementHandler}>Decrement</button>
      <button onClick={incrementHandler}>Decrement by 5</button>
    </div>
  );
};
