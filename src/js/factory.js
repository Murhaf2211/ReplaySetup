export const addElement = (parent, elem, text) => {
  const newElement = document.createElement(elem);
  newElement.innerText = text;
  parent.appendChild(newElement);
}

//addElement ( list .LI . A new task was added)
