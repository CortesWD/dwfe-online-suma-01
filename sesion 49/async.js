const app = document.getElementById('root');

function request(param) {
  return fetch(`https://api.giphy.com/v1/gifs/search?api_key=ErT4SajFmJKTRMjhTi1xTIYDMEm4DJED&q=${param}&limit=5`);
};

const Img = ({ src }) => {
  const element = document.createElement('img');
  element.src = src;
  return element;
};

async function getGifs(param) {
  const getCat = await request(param);
  if(!getCat.ok) throw new Error('cannot fulfilled');
  
  try {
    const { data } = await getCat.json();

    //Recorremos los datos para apender el elemento
    (data || []).forEach(gif => {
      // optional chaining para evitar break por key no encontrado
      const src = gif.images?.fixed_height?.url || '';
  
      app.appendChild(
        Img({ src })
      );
    });
  
  } catch (error) {
    console.error(error);
    app.innerHTML = "Ocurrio un error";
  }
}

getGifs('cat');