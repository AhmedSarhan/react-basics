import RefForms from "./form-w-refs";
import { StateForm } from "./form-w-state";

export const FormComponent = () => {
  return (
    <>
      <h1>Forms in React</h1>
      {/* <h2>Enter UseRef</h2> */}
      <StateForm />
      <h3>فاصل</h3>
      <RefForms />
    </>
  );
};
