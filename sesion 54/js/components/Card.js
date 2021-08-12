import Component from './Component.js'

const Card = ({name, desc, topic, children}) => {
  const title = Component('h3', { text: name });
  const description = Component('p', {text: desc});
  const topicText = Component('p', {text: topic});

  const containerText = Component('div', {children: [title, description, topicText]} );
  containerText.classList.add('card-container-description');
  
  const childrens = [containerText, children];
  const card = Component('div', {children: childrens} );
  card.classList.add('card-container');

  return card;
}

export default Card;