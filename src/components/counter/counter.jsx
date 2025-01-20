import { useEffect, useRef, useState } from "react";
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

  const interval = useRef(null);
  useEffect(() => {
    interval.current = setInterval(() => {
      incrementHandler();
    }, 1000);

    if (count >= 50) {
      clearInterval(interval.current);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [count]);

  const stopHandler = () => {
    // ToDo: fix this
    clearInterval(interval.current);
  };
  const clearHandler = () => {
    setCount(0);
  };
  return (
    <div className={styles["counter"]}>
      {/* <button onClick={() => incrementHandler()} disabled={count > 50}>
        Increment by 1
      </button> */}
      <span>{count}</span>
      <button onClick={stopHandler} disabled={count < 1}>
        Stop Count
      </button>
      <button onClick={clearHandler} disabled={count < 1}>
        clear
      </button>
    </div>
  );
};

/*
1. make the count increase manually on every second
2. stop the count when it reaches 50 
3. create a button to stop the count (Bonus) won't resolve in the resolution video
*/

/*
hints:

1. useEffect
2. intervals

*/
