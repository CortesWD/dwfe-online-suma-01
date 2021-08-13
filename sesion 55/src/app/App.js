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
import Header from '../components/header/Header';

export default function App() {
  return (
    <AppProvider>
      <Header />
      <Main />
    </AppProvider>
  );
}
