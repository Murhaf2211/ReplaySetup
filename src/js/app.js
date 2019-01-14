const button = document.querySelector('button');
const list = document.querySelector('ul');
import {addElement} from './factory.js';

button.addEventListener('click', ev =>{
  addElement(list, 'LI', 'A new task was added');

})
