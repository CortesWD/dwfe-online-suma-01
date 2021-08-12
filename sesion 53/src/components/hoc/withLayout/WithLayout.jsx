/**
 * Dependencies
 */
import React from "react";

/**
 * Components
 */
import Header from '../../header/Header';

const withLayout = (Component, className = null) => (props) => {
  return (
    <main className={`main ${className || ''}`}>
      <Header />
      <Component {...props} />
      <footer>Mi footer</footer>
    </main>
  )
};

export default withLayout;