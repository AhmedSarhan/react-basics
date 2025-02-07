import { memo } from "react";
import { useCount } from "../../hooks/use-count";

export const Counter = () => {
  const [count, updateCount] = useCount(0);
  console.log("Rendering Counter...");
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => updateCount(1)}>Increment</button>
    </div>
  );
};

export const MemoizedCounter = memo(Counter)

export const SecondCounter = memo(function SecondCounter() {
  const [count, updateCount] = useCount(0);
  console.log("Rendering 2nd Counter...");
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => updateCount(5)}>
        Increment by 5
      </button>
    </div>
  );
});
