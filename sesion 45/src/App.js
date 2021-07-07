/**
 * Dependencies
 */
import React from "react";

/**
 * Components
 */
import Header from './components/header/Header';
import Pages from './pages/Pages';

/**
 * Styles
 */
import "./index.css";

export default function App() {
  return (
    <div className="App centered column">
      <Header />
      <Pages />
    </div>
  );
}
