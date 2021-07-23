const app = document.getElementById('root');

/**
 * @param {String} term - string term to query
 * @returns {Promise} fetch Promise
 */
function request(term) {
  return fetch(`https://api.giphy.com/v1/gifs/search?api_key=ErT4SajFmJKTRMjhTi1xTIYDMEm4DJED&q=${term}&limit=5`);
};

/**
 * @description Image wrapper node creator
 * @param {Object} props - element attributes
 * @param {String} props.src - element attributes
 * @returns {Node}
 */
const Img = ({ src }) => {
  const element = document.createElement('img');
  element.src = src;
  return element;
};

/**
 * @description Async function to resolve requests
 * @param {String} param - query term
 */
async function getGifs(param) {
  try {
    const getCat = await request(param);
    const { data } = await getCat.json();

    /**
     * Recorremos los datos para apender el elemento
     */
    (data || []).forEach(gif => {
      /**
       * Se usa optional chaining para evitar error en app por key no encontrado
       * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
       */
      const src = gif.images?.fixed_height?.url || '';
  
      app.appendChild(
        Img({ src })
      );
    });
  } catch (error) {
    console.error(error);
    app.innerHTML = "Ocurrio un error";
  } finally {
    /**
     * finally es una operación final opcional
     * que se ejecuta sea ok o error nuestra promesa.
     */
    console.log('termine la operacion')
  }
}

getGifs('cat');