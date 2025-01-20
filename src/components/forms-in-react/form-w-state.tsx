import React, { useState } from "react";
import styles from "./index.module.css";

export const FormWState = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("formData", name, email, age, password);
  };
  return (
    <>
      <form onSubmit={submitFormHandler}>
        <div className={styles["form-group"]}>
          <label htmlFor="name">username</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="age">age</label>
          <input
            type="number"
            min={1}
            max={200}
            name="age"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Send</button>
      </form>
      <div>
        <h3>{name}</h3>
      </div>
    </>
  );
};
