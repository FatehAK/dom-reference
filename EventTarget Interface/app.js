"use strict";

const first = document.querySelector('.first');

//**addEventListener()
//*usage of 'this' in event listeners
first.addEventListener('click', () => {
    //refers to the Window object for arrow fn
    console.log(this);
}, false);

first.addEventListener('click', function () {
    //refers to the element itself for anonymous fn
    console.log(this);
}, false);

first.addEventListener('click', function one() {
    //refers to the element itself for named fn
    console.log(this);
}, false);

//*effect of duplication of event listeners
const second = document.querySelector('.second');
const third = document.querySelector('.third');

function myFun() {
    const spanElm = document.createElement('span');
    spanElm.innerHTML = "- I am only added once per click";
    second.appendChild(spanElm);
    //refers to the element itself
    console.log(this);
}

//span element appended only once even though two event listerners are attached
//the second event listener is discared
for (let i = 0; i < 2; i++) {
    second.addEventListener('click', myFun, false);
}

//span element is appended twice since two anonyomous function signatures are created
for (let i = 0; i < 2; i++) {
    third.addEventListener('click', () => {
        const spanElm = document.createElement('span');
        spanElm.innerHTML = "- I am added twice per click";
        third.appendChild(spanElm);
    }, {
        capture: true, //event dispatched to registered listener before dispatched to EventTarget
        once: true, //handler executed only once then removed
        passive: true //handler will never call preventDefault() method
    });
}

//*removeEventListener()
const fourth = document.querySelector('.fourth');

fourth.addEventListener('click', function four() {
    fourth.innerHTML += '- I am clicked';
    this.removeEventListener('click', four, {
        capture: false //won't work since capture values not matching
    });
    this.removeEventListener('click', four, {
        capture: true, //works since capture values are matching
        passive: false //other values don't need to match
    });
}, {
    capture: true,
    passive: true
});

//*dispatchEvent()
const fifth = document.querySelector('.fifth');
const event = new Event('myEvt');

fifth.addEventListener('myEvt', function five() {
    console.log('myEvt triggered');
}, true);
fifth.dispatchEvent(event); //invokes the event

//Using CustomEvent interface to pass more data
const cusEvent = new CustomEvent('cusEvt', {
    detail: {
        hello: true
    }
});

fifth.addEventListener('cusEvt', function five(e) {
    console.log('cusEvt triggered ' + e.detail.hello);
}, true);
fifth.dispatchEvent(cusEvent); //invokes the event
