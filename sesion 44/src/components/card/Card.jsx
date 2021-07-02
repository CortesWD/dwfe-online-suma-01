/**
 * Dependencies
 */
import React from "react";

/**
 * Styles
 */
import "./Card.css";

function Card({ children, className }) {
  return <div className={`card ${className || ""}`}>{children}</div>;
}

export default Card;
