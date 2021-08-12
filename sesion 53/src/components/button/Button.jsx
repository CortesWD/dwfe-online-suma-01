/**
 * Dependencies
 */
import React from "react";

/**
 * Components
 */
import ButtonIcon from './components/icon/Icon';

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

/**
 * Dot notation Pattern
 */
Button.Icon = ButtonIcon;

export default Button;
