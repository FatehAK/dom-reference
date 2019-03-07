"use strict";

const container = document.querySelector('.container');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

//Properties
console.log(container.baseURI);
console.log(container.childNodes);
console.log(container.firstChild);
console.log(container.lastChild);
console.log(first.nextSibling);
console.log(third.previousSibling);

//Part of NonDocumentTypeChildNode Interface
console.log(first.nextElementSibling);
console.log(third.previousElementSibling);

console.log(container.nodeName);
console.log(container.nodeType);
console.log(container.nodeValue);
console.log(container.ownerDocument);
console.log(first.parentNode);
console.log(first.parentElement);
console.log(first.textContent = 'First Paragraph');

//Methods
//appendChild() vs append()
const fourth = document.createElement('p');
fourth.innerHTML = 'Fourth';
fourth.id = 'parafour';
//Returns the appended Node object
console.log(container.appendChild(fourth));
//Returns Undefined
console.log(container.append(fourth));
//Existing Node moved to a new position
container.appendChild(second);
//Same opeeration as above
container.appendChild(second);
// Has no effect only first element is appended
container.appendChild(first, second, third);
//Possible to append multiple elements at once in append()
container.append(first, second, third, fourth);
//Not possible to append DOM Strings in appendChild
try {
    container.appendChild("Hello from appendChild");
} catch (e) {
    console.error(e);
}
//Possible in append
container.append("Hello from append");

//Cloning a node with boolean deep value (check id's of both nodes)
const cloneFour = fourth.cloneNode(true);
cloneFour.innerHTML = "I'm a clone of fourth para";
container.append(cloneFour);

console.log(container.contains(fourth));
// DOM root or Shadow root
console.log(container.getRootNode());
console.log(container.hasChildNodes());

//insertBefore(newNode, referenceNode)
const newPara1 = document.createElement('p');
newPara1.innerHTML = 'I\'m inserted before fourth para';
container.insertBefore(newPara1, fourth);
const newPara2 = document.createElement('p');
newPara2.innerHTML = 'I\'m inserted after the fourth para';
//Simulating insertAfter()
container.insertBefore(newPara2, fourth.nextSibling);

//not equal due to change in text content and attributes
console.log(first.isEqualNode(second));
//same
console.log(first.isSameNode(first));

//before normalization
console.log(container.childNodes.length);
// combine all the text nodes
container.normalize();
//after normalization
console.log(container.childNodes.length);

//Remove a node
const removedNode = container.removeChild(second);
//Now add it back
container.insertBefore(removedNode, third);

//Replace with same node
container.replaceChild(first, first);
