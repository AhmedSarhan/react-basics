import { useState } from "react";
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
  const clearHandler = () => {
    setCount(0);
  };
  return (
    <div className={styles["counter"]}>
      <button onClick={() => incrementHandler()} disabled={count > 50}>
        Increment by 1
      </button>
      <span>{count}</span>
      <button onClick={clearHandler} disabled={count < 1}>
        clear
      </button>
    </div>
  );
};

/*
1. make the count increase manually on every second
2. create a button to stop the count 
3. stop the count when it reaches 50 (Bonus) won't resolve in the resolution video
*/

/*
hints:

1. useEffect
2. intervals

*/
