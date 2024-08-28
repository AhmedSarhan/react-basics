import styles from "./index.module.css";

export const FormComponent = () => {
  return (
    <>
      <h1>Forms in React</h1>
      {/* <h2>Enter UseRef</h2> */}
      <form>
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
      </form>
    </>
  );
};
