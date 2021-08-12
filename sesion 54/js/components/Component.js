const Component = (el, props) => {
  const {text = '', src = '', children = [] } = props || {};
  const element = document.createElement(el);

  src ? element.src = src : null;
  text ? element.innerHTML = text : null;

  if (children) {
    children.forEach(child => {
      element.appendChild(child);
    });
  }
  return element;
}

export default Component;