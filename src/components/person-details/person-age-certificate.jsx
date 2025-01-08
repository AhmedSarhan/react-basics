import React from "react";

export const PersonAgeCertificate = ({ isAdult }) => {
  return (
    <div>
      {isAdult ? <h2>Person is an adult</h2> : <h2>Person is not an adult</h2>}
    </div>
  );
};
