import RefForms from "./form-w-refs";
import { StateForm } from "./form-w-state";

export const FormComponent = () => {
  return (
    <>
      <h1>Forms in React</h1>
      <h2>Enter useReducer</h2>
      <StateForm />
      {/* <RefForms /> */}
    </>
  );
};
