import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("count is starting");
  }, []);

  useEffect(() => {
    console.log("count in increasing", count);
    if (count === 10) {
      alert("count is now 10");
    }
  }, [count]);
  return (
    <>
      <h1>Side Effects</h1>
      <h2>Enter UseEffect</h2>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
