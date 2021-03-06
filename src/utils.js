
const $ = selector => document.querySelector(selector);

const $$ = selector => document.querySelectorAll(selector);

const createElement = function(tag, className) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  return element;
}

const getArrayOfNumbers = (max) => {
  return [...Array(max).keys()];
}

const delay = (t) => new Promise(resolve => setTimeout(resolve, t));

const randomNum = (max) => Math.floor(Math.random() * Math.floor(max));

const shuffle = (a) => a.sort(() => Math.random() - 0.5);

const isTag = (str) => /<[^>]*>/g.test(str);

function convertTags(str) {
  return unescape(str).replace(/</g, "&lt;").replace(/>/g, "gt;").trim();
}

const shuffleArray = function(arr) {
  const clone = [...arr];
  const shuffled = [];
  while (clone.length) {
    const random = Math.floor(Math.random() * clone.length);
    let removed = clone.splice(random, 1).shift();
    shuffled.push(removed);
  }
  return shuffled;
}

// input.addEventListener('keyup', (e) => {
//   if (isTag(e.target.value)) {
//     e.target.value = '';
//     console.log('No tags allowed');
//     button.disabled = true;
//     return;
//   }
//   button.disabled = !e.target.value.length;
// });

// const tag = '<this is a test>';
// const converted = convertTags(tag);
// console.log(converted);

export {
  createElement,
  $,
  $$,
  isTag,
  convertTags
};