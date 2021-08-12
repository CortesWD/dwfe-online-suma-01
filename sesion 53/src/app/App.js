/**
 * Dependencies
 */
import React from "react";

/**
 * Context Provider
 */
import { AppProvider } from '../context/AppContext';

/**
 * Components
 */
import Main from '../components/main/Main';

/**
 * Styles
 */
import "../index.css";


export default function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}
