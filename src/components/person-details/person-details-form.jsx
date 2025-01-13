import React from "react";
import styles from "./person-details.module.css";
export const PersonDetailsForm = ({ person, setPerson }) => {
  console.log("person", person);
  const onNameChange = (e) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      name: e.target.value,
    }));
  };

  const onAgeChange = (e) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      age: Number(e.target.value),
    }));
  };
  return (
    <div className={styles["person-form"]}>
      <div className={styles["form-group"]}>
        <label htmlFor="name">Person Name</label>
        <input
          type="text"
          name="name"
          value={person.name}
          onChange={onNameChange}
        />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="age">Person age</label>
        <input
          type="number"
          name="age"
          value={person.age}
          onChange={onAgeChange}
        />
      </div>
    </div>
  );
};
