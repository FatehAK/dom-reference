'use strict';

const bubbleParent = document.querySelector('.bubbleParent'); //The default mode is bubbling
const captureParent = document.querySelector('.captureParent');

const first = document.querySelector('.first');
const second = document.querySelector('.second');

//*Bubbling
//bubbling starts firing events from child --> parent
bubbleParent.addEventListener(
  'click',
  e => {
    alert('Alert from bubbleParent Element');
    console.log('Bubble Parent');
    console.log('BUBBLE: ' + e.eventPhase);
    console.log(e.eventPhase);
    console.log(e.bubbles);
    console.log(e.cancelable);
    console.log(e.composed);
    console.log(e.currentTarget, this); //this gives window object in arrow function
    console.log(e.target);
    console.log(e.defaultPrevented);
    console.log(e.type);
    console.log(e.timeStamp);
    console.log(e.isTrusted);
  },
  false
);

first.addEventListener(
  'click',
  e => {
    alert('Alert from First Element');
    console.log('Bubble Child');
    console.log('AT_TARGET: ' + e.eventPhase);
  },
  false
);

//*Capturing
//capturing starts firing events from parent --> child
captureParent.addEventListener(
  'click',
  function (e) {
    alert('Alert from captureParent Element');
    console.log('Capture Parent');
    console.log('CAPTURE: ' + e.eventPhase);
    console.log(e.bubbles);
    console.log(e.cancelable);
    console.log(e.composed);
    console.log(e.currentTarget, this); //this gives actual element being refrenced
    console.log(e.target);
    console.log(e.type);
    console.log(e.timeStamp);
    console.log(e.isTrusted);
  },
  true
);

second.addEventListener(
  'click',
  e => {
    alert('Alert from Second Element');
    console.log('Capture Child');
    console.log('AT_TARGET: ' + e.eventPhase);
  },
  true
);

//*Stop Propogating the events
const myParent = document.querySelector('.myParent');
const third = document.querySelector('.third');

myParent.addEventListener(
  'click',
  () => {
    alert('Alert from myParent');
  },
  false
);

third.addEventListener(
  'click',
  e => {
    //add stopPropogation() to the event object which you want to run and rest are not reached
    alert('Alert from Third element');
    //prevents going to parent event object in case of bubbling and vice versa for capturing
    e.stopPropagation();
  },
  false
);

//*Event Delegation
const delegateParent = document.querySelector('.delegateParent');

//add shared event listener to all 'LI' elements instead of seperate ones
delegateParent.addEventListener('click', e => {
  if (e.target.nodeName === 'LI') {
    alert(e.target.innerHTML + ' is clicked');
    console.log(e.currentTarget); //the element to which listener is attached
    console.log(e.target); //the element which is clicked
    console.log(e.composedPath());
  }
});

//*Event.preventDefault()
//prevent default action of the element
const myText = document.querySelector('.myText');

myText.addEventListener(
  'keypress',
  e => {
    //or use e.key.match("/regexp/")
    if (e.key.charCodeAt() < 97 || e.key.charCodeAt() > 122) {
      console.log(e.key);
      console.log(e.code);
      console.log(e.charCode); //obsolete
      console.log(e.keyCode); //obsolete
      e.preventDefault();
    }
  },
  false
);

//*Event.stopImmediatePropogation()
const testElement = document.querySelector('.testElement');

testElement.addEventListener(
  'click',
  () => {
    alert('I am first listener');
  },
  false
);

testElement.addEventListener(
  'click',
  e => {
    alert('I am second listener');
    //stops propagating further to same event on same element
    e.stopImmediatePropagation();
    //has no effect can only be used to propagation in capture and bubbling phases
    //e.stopPropagation();
  },
  false
);

testElement.addEventListener(
  'click',
  () => {
    alert('I am third listener');
  },
  false
);
