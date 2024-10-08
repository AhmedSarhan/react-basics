import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("Rendering Counter...");
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export const SecondCounter = () => {
  const [count, setCount] = useState(0);
  console.log("Rendering 2nd Counter...");
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 5)}>
        Increment by 5
      </button>
    </div>
  );
};
