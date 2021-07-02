/**
 * Dependencies
 */
import React from "react";

/**
 * Components
 */
import Card from "./../card/Card";
import Input from "./../input/Input";
import Button from "../button/Button";

/**
 * Hooks
 */
import useWindowWidth from '../../hooks/useWindowWidth';
import useControl from '../../hooks/useControl';

/**
 * Styles
 */
import "./LoginForm.css";

function LoginForm() {
  const valLength = (val) => val.length < 6;
  const validations = {
    length: valLength,
    name: (val) => val.toLowerCase() === 'nombre',
  };

  const name = useControl('', validations);
  
  const width = useWindowWidth();

  return (
    <div className="flex-container centered">
      <Card className={width < 400 ? 'bg-green' : ''}>
        <form className="form">
          <Input
            onChange={name.manejarCambio}
            placeholder="UserName"
            autoComplete="off"
            name="name"
            value={name.inputData}
            type="text"
            error={name.error}
            errorMessage="fallo validacion"
          />
          <Button
            disabled
            type="button"
          >
            login
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default LoginForm;
