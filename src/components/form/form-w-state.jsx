import { useState } from "react";
import styles from "./index.module.css";

export const StateForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      age,
      password,
    });
  };
  return (
    <>
      {/* <h2>Enter UseRef</h2> */}
      <form onSubmit={submitHandler}>
        <div className={styles["form-group"]}>
          <label htmlFor="name">username</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h3>Name is: {name}</h3>
          {name.length <= 5 && (
            <p style={{ color: "red" }}>Name is too short</p>
          )}
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={age}
            onChange={(e) => setAge(e.target.value)}
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
    </>
  );
};
