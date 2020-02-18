import React from "react";

const Button = ({ onClick, children }) => (
  <button
    style={{
      border: 0,
      backgroundColor: "#48821E",
      padding: "12px 24px"
    }}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
