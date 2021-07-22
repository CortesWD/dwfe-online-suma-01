const app = document.getElementById('root');

const gifs = [
  'https://media2.giphy.com/media/BzyTuYCmvSORqs1ABM/200.gif?cid=503d8ec7jp32lrryhs7ow5pox2dvhl3wkgz9qqkzc9x2f1ob&rid=200.gif&ct=g',
  'https://media3.giphy.com/media/mlvseq9yvZhba/200.gif?cid=503d8ec7jp32lrryhs7ow5pox2dvhl3wkgz9qqkzc9x2f1ob&rid=200.gif&ct=g',
  'https://media4.giphy.com/media/jpbnoe3UIa8TU8LM13/200.gif?cid=503d8ec7jp32lrryhs7ow5pox2dvhl3wkgz9qqkzc9x2f1ob&rid=200.gif&ct=g'
];

const Img = ({src}) => {
  const element = document.createElement('img');
  element.src = src;
  return element;
}

// app.appendChild(
//   Img({
//     src: gifs[0],
//   })
// )

gifs.forEach(item => {
  app.appendChild(
    Img({
      src: item
    })
  )
});