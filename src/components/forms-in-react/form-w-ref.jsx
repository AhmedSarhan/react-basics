import React, { useRef } from "react";
import styles from "./index.module.css";

export const FormWRef = () => {
  const formRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const resetFormHandler = (event) => {};
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
