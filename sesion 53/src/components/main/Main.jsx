/**
 * Dependencies
 */
import React, { useContext } from "react";
import { AppContext } from '../../context/AppContext';

/**
 * Components
 */
import Button from '../button/Button';
import Grid from '../grid/Grid';
import withLayout from '../hoc/withLayout/WithLayout';

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
        <Button.Icon name="cualquier-cosa" />
      </Button>
      <Button
        icon="zoom"
        position="left"
        
      ></Button>
      <Grid
        className="main-container"
        aside={<Button>Click</Button>}
        section={<div>soy un div</div>}
      />
    </div>
  )
}

/**
 * High Order Component Pattern
 */
export default withLayout(Main, 'una-class');