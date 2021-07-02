import { useState } from 'react';

export default function useControl(name, validations = null) {
  const [inputData, setInputData] = useState(name);
  const [error, setError] = useState(false);

  const manejarCambio = (e) => {
    setInputData(e.target.value);

    if(validations && inputData !== '') {
      for (const cb in validations) {
        if (Object.hasOwnProperty.call(validations, cb)) {
          const fn = validations[cb];
          setError(fn(inputData))
          break;
        }
      }
    }
  };

  return {
    inputData,
    manejarCambio,
    error
  };
}

