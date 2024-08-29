import { useState, useReducer } from "react";
import styles from "./index.module.css";

const reducerFn = (prevState, newState) => {
  return {
    ...prevState,
    ...newState,
  };
};
export const StateForm = () => {
  const [formData, setFormData] = useReducer(reducerFn, {
    name: "",
    email: "",
    age: 0,
    password: "",
  });

  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     age: 0,
  //     password: "",
  //   });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log({
      name: formData.name,
      email: formData.email,
      age: formData.age,
      password: formData.password,
    });
  };

  const changeHandler = (e) => {
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [e.target.name]: e.target.value,
    // }));
    setFormData({
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className={styles["form-group"]}>
          <label htmlFor="name">username</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={changeHandler}
          />
          <h3>Name is: {formData.name}</h3>
          {formData.name.length <= 5 && (
            <p style={{ color: "red" }}>Name is too short</p>
          )}
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
          {name.current?.value?.length <= 5 && (
            <p style={{ color: "red" }}>Name is too short</p>
          )}
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="age">age</label>
          <input
            type="number"
            min={1}
            max={200}
            name="age"
            value={formData.age}
            onChange={changeHandler}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          />
        </div>

        <button type="submit">Send</button>
      </form>
    </>
  );
};
