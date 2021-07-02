/**
 * Dependencies
 */
import React from "react";

 /**
  * Styles
  */
import "./Input.css";

function Input({
  value,
  onChange,
  error,
  autoComplete,
  placeholder,
  name,
  type,
  errorMessage
}) {
  return (
    <div className="inputContainer">
      <input
        className={`${error ? "input-error" : ""}`}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
      />
      {error && <span className="visible error">{errorMessage}</span>}
    </div>
   );
}

export default Input;
