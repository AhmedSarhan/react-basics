import { useState, Fragment } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let person = { age: 20, name: "John Doe" };
  return (
    <Fragment>
      {/* <div> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        Person Name is {person.name} and he is {person.age} years old
      </div>
      {/* </div> */}
    </Fragment>
  );
}

export default App;
