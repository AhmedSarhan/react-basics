import React from "react";
import styles from "./person-details.module.css";
export const PersonDetailsForm = () => {
  return (
    <div className={styles["person-form"]}>
      <div className={styles["form-group"]}>
        <label htmlFor="name">Person Name</label>
        <input type="text" name="name" />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="age">Person age</label>
        <input type="number" name="age" />
      </div>
    </div>
  );
};
