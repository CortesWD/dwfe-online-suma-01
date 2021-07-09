/**
 * Dependencies
 */
import React from "react";

/**
 * Styles
 */
import "./Button.css";

function Button({ type, children, className, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`btn ${className || ""}`}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
