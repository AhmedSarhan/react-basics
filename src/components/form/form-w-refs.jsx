import { useRef } from "react";
import styles from "./index.module.css";
const RefForms = () => {
  const name = useRef("");
  const email = useRef("");
  const age = useRef("");
  const password = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({
      name: name.current.value,
      email: email.current.value,
      age: age.current.value,
      password: password.current.value,
    });
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className={styles["form-group"]}>
          <label htmlFor="name">username</label>
          <input type="text" name="name" ref={name} />
          <h3>Name is: {name.current.value}</h3>
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="email">email</label>
          <input type="text" name="email" ref={email} />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="age">age</label>
          <input type="number" min={1} max={200} name="age" ref={age} />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">password</label>
          <input type="password" name="password" ref={password} />
        </div>

        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default RefForms;
