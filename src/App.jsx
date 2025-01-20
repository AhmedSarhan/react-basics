import { Fragment, useLayoutEffect, useRef } from "react";

import "./App.css";
import { FormWState } from "./components/forms-in-react/form-w-state";
import { FormWRef } from "./components/forms-in-react/form-w-ref";

const App = () => {
  const headlineRef = useRef();
  useLayoutEffect(() => {
    headlineRef.current.style.backgroundColor = "#eb4d4b";
    headlineRef.current.style.color = "#fff";
    headlineRef.current.style.padding = "5px";
    headlineRef.current.innerText = "React Basics course with قعدة نقاشين";
  }, []);

  return (
    <Fragment>
      <div className="container">
        <h1 ref={headlineRef}>React Basics Course</h1>
        <h3 style={{ fontSize: "35px", marginBlock: "5px" }}>Forms in React</h3>
        {/* <FormWState /> */}
        <FormWRef />
      </div>
    </Fragment>
  );
};

export default App;
