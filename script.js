import { Human } from './src/Human.js';
import { Event } from './src/Event.js';
import { CssVars } from './src/CssVars.js';

const thisYear = (new Date()).getFullYear();

// get and set CSS vars
const css = new CssVars();
let version;
version = css.getVar(document.body, '--version');
console.log({version});
css.setVar(document.body, '--version', 1.2);
version = css.getVar(document.body, '--version');
console.log({version});

// get events based on type
const event = new Event();
let pressing = false;
let counter = 0;

$('.block').addEventListener(event.mouse.down, (e) => {
  pressing = true;
});

$('.block').addEventListener(event.mouse.up, (e) => {
  pressing = false;
});

[event.mouse.down, event.mouse.move].forEach(event => {
  $('.block').addEventListener(event, (e) => {
    if (pressing) {
      console.log('Mousedown & mousemove', counter++);
    }      
  });
});

import {
  createElement,
  $,
  $$
} from './src/utils.js';

// const ella = new Human({name:'Ella', age:'9 months', arms:2, legs:2});
// ella.move({direction:'forward'});
// console.log({ella});