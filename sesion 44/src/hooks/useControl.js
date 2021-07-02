/**
 * Dependencies
 */
import { useState } from 'react';

/**
 * @description hook to handle string inputs 
 * @param {String} name - field name
 * @param {Object} [validations=null] Object validations
 * @returns {Object} {inputData: string, handleChange: Function, error: Boolean}
 */
export default function useControl(name, validations = {}) {
  const [inputData, setInputData] = useState(name);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setInputData(e.target.value);

    if (validations && inputData !== '') {
      /**
       * For of nos permite recorrer cada key
       * de un objeto, el "const" cb hace referencia al nombre del key
       */
      for (const cb in validations) {
        /**
         * se accede al valor del key de forma dinámica
         */
        const fn = validations[cb];
        /**
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
         * se valida siempre si el key iterado existe en el objeto
         * y en este caso particular que sea una función.
         */
        if (Object.hasOwnProperty.call(validations, cb) && typeof fn === 'function') {
          setError(fn(inputData));
          /**
           * Rompemos el ciclo, pues al ser boolean
           * con que se cambie a true una vez es suficiente
           */
          break;
        }
      }
    }
  };

  return {
    inputData,
    handleChange,
    error
  };
}

