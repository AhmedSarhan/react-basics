import React, { useReducer, useState } from "react";
import styles from "./index.module.css";

const initialData = {
  name: "",
  email: "",
  age: "",
  password: "",
};
const reducerFn = (prevState, newState) => {
  return {
    ...prevState,
    ...newState,
  };
};
export const FormWState = () => {
  // const [formData, setFormData] = useState(initialData);
  const [formData, setFormData] = useReducer(
    reducerFn,
    null,
    () => initialData
  );
  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("formData", formData);
  };

  const inputChangeHandler = (event) => {
    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   [event.target.name]: event.target.value,
    // }));
    setFormData({
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <form onSubmit={submitFormHandler}>
        <div className={styles["form-group"]}>
          <label htmlFor="name">username</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="age">age</label>
          <input
            type="number"
            min={1}
            max={200}
            name="age"
            value={formData.age}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={inputChangeHandler}
          />
        </div>

        <button type="submit">Send</button>
      </form>
      <div>
        <h3>{formData.name}</h3>
        <h3>{formData.email}</h3>
      </div>
    </>
  );
};
