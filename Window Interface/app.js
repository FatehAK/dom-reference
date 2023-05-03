'use strict';

const container = document.querySelector('.container');
const para = document.querySelector('.container > p');

//Properties
console.log(window.crypto);
console.log(window.document);
console.log(window.event);
console.log(window.frames);
console.log(window.history);
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.location);
console.log('\n');

//LocalStorage
//try commenting this part we see values are retained after closing the page
const local = window.localStorage;
local.setItem('1', 'This is Window interface');
local.setItem('2', 'This is LocalStorage');
console.log(local.getItem('1'));
console.log(local.getItem('2'));
local.removeItem('1');
console.log(local.key(0));
console.log(window.localStorage);
//local.clear();
console.log('\n');

//SessionStorage
//try commenting this part we see that values are lost once we close the page
const session = window.sessionStorage;
session.setItem('1', 'This is Window interface');
session.setItem('2', 'This is Session Storage');
console.log(session.getItem('1'));
console.log(session.getItem('2'));
session.removeItem('1');
console.log(session.key(0));
console.log(window.sessionStorage);
//session.clear();
console.log('\n');

console.log((window.name = 'myWindow'));
console.log(window.navigator);
console.log(window.opener);
console.log(window.outerWidth);
console.log(window.outerHeight);
console.log(window.parent);
console.log(window.performance.now());
console.log(window.screen);
console.log(window.scrollX);
console.log(window.scrollY);
console.log(screenX);
console.log(screenY);
console.log('\n');

//Methods
//window.alert('Hi');
//window.confirm('Sure?');
//window.prompt("What is your name?");
window.blur();
//window.close();
window.focus();
console.log(window.find('Interface'));
console.log(window.getComputedStyle(container));
console.log(window.getSelection());

//window.open("abc.html");
//window.moveBy(10, -10);
//window.moveTo(100, 100);
//window.resizeTo(5, 5);
//window.resizeBy(4, 3);
//window.print();

//window.scroll(0, 100);
//or
// window.scroll({
//     top: 100,
//     left: 100,
//     behavior: 'smooth'
// });
//or
//Absolute Scrolling
window.scrollTo(100, 100);
//Relaive Scrolling
window.scrollBy(-100, -100);

//stop page loading
//window.stop();

let string = 'Hello';
//string to base64 string
let encoded = window.btoa(string);
console.log(encoded);
//base64 string to string
let decoded = window.atob(encoded);
console.log(decoded);

const timeout = window.setTimeout(
  bg => {
    para.style.background = bg;
  },
  500,
  'palegoldenrod'
);

//window.clearTimeout(timeout);

const interval = window.setInterval(
  (color1, color2) => {
    para.style.color = para.style.color === color2 ? color1 : color2;
  },
  500,
  'crimson',
  'purple'
);

//window.clearInterval(interval);
