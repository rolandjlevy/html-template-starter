import { Human } from './src/Human.js';
import {
  createElement,
  getElement,
  getAllElements
} from './src/utils.js';

const ella = new Human({name:'Ella', age:'9 months', arms:2, legs:2});
ella.move({direction:'forward'});

console.log({ella});