"use strict";

const para = document.querySelector('.main > p');
// para replaced by new para
para.outerHTML = "<p id=\"summary\" style=\"color: crimson;\">Hello!!</p>";
// select that new para
const newPara = document.querySelector('.main > p');
// Add or Modify Classes
newPara.classList.add('classA', 'classB', 'classC');
newPara.classList.remove('classA', 'classB');
console.log(newPara.classList.contains('classC'));
console.log(newPara.classList.contains('classA'));
//toggled off
newPara.classList.toggle('classC');
let i = 5;
//toggled on with condition
newPara.classList.toggle('classC', i < 10);
//'old', 'new'
newPara.classList.replace('classC', 'classA');
//Another way
newPara.className = 'classC';

//Custom Elements & Shadow DOM
class AnotherElement extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({
            mode: 'open'
        });
        const style = document.createElement('style');
        const customPara = document.createElement('p');
        customPara.innerHTML = "I'm a shadow custom paragraph";
        style.innerHTML = `:host(.yo) {color: blue; font-style: italic; background: yellow; display: block;}`;
        shadow.appendChild(style);
        shadow.appendChild(customPara);
        console.log(this.shadowRoot);
    }
}
customElements.define('another-element', AnotherElement);

//Properties
console.log(newPara.attributes);
console.log(newPara.classList);
console.log(newPara.clientHeight);
console.log(newPara.clientWidth);
console.log(newPara.clientLeft);
console.log(newPara.clientTop);
console.log(newPara.id);
console.log(newPara.localName);

//Methods
console.log("\n");
console.log(newPara.closest('div'));
console.log(newPara.getAttribute('style'));
console.log(newPara.getAttributeNames());
console.log(newPara.getAttributeNode('id').value);
console.log(newPara.getBoundingClientRect());
console.log(newPara.getClientRects());
console.log(newPara.hasAttribute('id'));
console.log(newPara.hasAttributes());
//possible values 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
newPara.insertAdjacentText('beforebegin', 'Inserted Before Begin');
newPara.insertAdjacentHTML('afterbegin', '<p>Inserted After Begin</p>');
const pElem = document.createElement('p');
pElem.innerHTML = "Inserted Before end";
newPara.insertAdjacentElement('beforeend', pElem);
newPara.insertAdjacentHTML('afterend', '<p>Inserted After End</p>');

console.log(newPara.matches('#summary'));
newPara.removeAttribute('id');
console.log(newPara.attributes);
newPara.setAttribute('id', 'finalPara');
console.log(newPara.attributes);
