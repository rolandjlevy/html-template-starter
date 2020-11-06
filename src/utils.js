
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const createElement = function(tag, className) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  return element;
}

const delay = (t) => new Promise(resolve => setTimeout(resolve, t));

const randomNum = (max) => Math.floor(Math.random() * Math.floor(max));

const getElement = function(selector) {
  return document.querySelector(selector);
}

const getAllElements = function(selector) {
  return document.querySelectorAll(selector);
}

function isTag(str) {
  return /<[^>]*>/g.test(str);
}

function convertTags(str) {
  return unescape(str).replace(/</g, "&lt;").replace(/>/g, "gt;").trim();
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
  getElement,
  getAllElements,
  isTag,
  convertTags
};