/**
 * Dependencies
 */
import React from "react";

/**
* Styles
*/
import './Grid.css';

/**
 * Slot/layout children as prop pattern
 */
function Grid({ aside, section, className }) {
  return (
    <div className={`grid-container ${className || ''}`}>
      <aside>{aside}</aside>
      <section>{section}</section>
    </div>
  )
}

export default Grid;