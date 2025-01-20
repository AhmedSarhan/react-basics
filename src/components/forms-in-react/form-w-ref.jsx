import React, { useRef } from "react";
import styles from "./index.module.css";

export const FormWRef = () => {
  // const nameRef = useRef();
  // const emailRef = useRef();
  // const ageRef = useRef();
  // const passwordRef = useRef();

  const formRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    // const formData = {
    //   name: nameRef.current.value,
    //   email: emailRef.current.value,
    //   age: ageRef.current.value,
    //   password: passwordRef.current.value,
    // };

    const formData = {
      name: formRef.current.elements.name.value,
      email: formRef.current.elements.email.value,
      age: formRef.current.elements.age.value,
      password: formRef.current.elements.password.value,
    };

    const eventFormData = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      age: event.target.elements.age.value,
      password: event.target.elements.password.value,
    };
    // event.target.reset();
    formRef.current.reset();
    console.log("formData", formData, eventFormData);
  };

  const resetFormHandler = (event) => {
    formRef.current.reset();
  };
  return (
    <>
      <form ref={formRef} onSubmit={submitHandler}>
        <div className={styles["form-group"]}>
          <label htmlFor="name">username</label>
          <input type="text" name="name" />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="email">email</label>
          <input type="text" name="email" />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="age">age</label>
          <input type="number" min={1} max={200} name="age" />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">password</label>
          <input type="password" name="password" />
        </div>

        <button type="submit">Send</button>
        <button type="button" onClick={resetFormHandler}>
          Reset
        </button>
      </form>
      <div></div>
    </>
  );
};
