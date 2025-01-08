import { useState, Fragment } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const renderAgeMessage = (age) => {
  if (age === 25) {
    return <h3>Hurray! you lived quarter a decade!</h3>;
  } else if (age < 25) {
    return <h3>Not 25 yet</h3>;
  }
  return <h3>getting old</h3>;
};

const App = () => {
  const [count, setCount] = useState(0);

  let person = { age: 27, name: "John Doe" };

  // if (person.age === 25) {
  //   return <h3>Hurray! you lived quarter a decade!</h3>;
  // }
  return (
    <Fragment>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        Person Name is {person.name} and he is {person.age} years old
      </div>
      {renderAgeMessage(person.age)}
      {/* {person.age === 25 ? (
        <h3>Hurray! you lived quarter a decade!</h3>
      ) : (
        <h3>Not 25 anymore / yet</h3>
      )} */}
    </Fragment>
  );
};

export default App;
