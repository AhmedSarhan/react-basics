import React from "react";

export const PersonDetails = ({ person }) => {
  return (
    <div>
      <h2>
        Person is called {person.name} and he is {person.age} years old
      </h2>
    </div>
  );
};
