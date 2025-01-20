/* eslint-disable react/display-name */
import React, { forwardRef } from "react";

export const PersonAgeCertificate = forwardRef(({ isAdult }, ref) => {
  return (
    <div className="card">
      <h2 ref={ref}></h2>
    </div>
  );
});
