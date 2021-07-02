/**
 * Dependencies
 */
import React from "react";

/**
 * Components
 */
import LoginForm from "./components/loginForm/LoginForm";
import Card from './components/card/Card';

/**
 * Hooks
 */
import useWindowWidth from './hooks/useWindowWidth';

/**
* Styles
*/
import "./index.css";

export default function App() {
  const width = useWindowWidth();
  return (
    <div className="App centered column">
      <LoginForm />
      <div className="flex-container centered">
        <Card className={width > 400 ? 'bg-green' : ''}>Para más información llamar al: 123</Card>
      </div>
    </div>
  );
}
