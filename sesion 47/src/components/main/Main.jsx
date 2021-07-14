/**
 * Dependencies
 */
import React, { useContext } from "react";
import { AppContext } from '../../context/AppContext';

/**
 * Components
 */
import Button from '../button/Button';

function Main() {
  /**
   * se usa el contexto definido
   * para extraer ya sea el valor o el setValue
   */
  const {setStore} = useContext(AppContext);

  return (
    <div className="App centered column">
      <Button onClick={() => setStore('hola')}>
        Click me!
      </Button>
    </div>
  )
}

export default Main;