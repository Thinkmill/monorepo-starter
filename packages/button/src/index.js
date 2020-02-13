import React from "react";
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;
