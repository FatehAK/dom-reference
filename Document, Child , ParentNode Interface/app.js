'use strict';

//Ways to set the text of an element
const para = document.querySelector('.container > p');
para.textContent = 'textContent';
para.innerHTML = 'innerHTML';
para.innerText = 'innerText';
const textNode = document.createTextNode(' textNode');

//Creation of new Element
const newNode = document.createElement('p');
newNode.innerHTML = 'P Element created';

//Ways to set attribute of an element
const anchor = document.createElement('a');
anchor.innerHTML = 'Link';
//Attr interface
const linkAttr = document.createAttribute('href');
linkAttr.value = 'https://www.google.co.in/';
anchor.setAttributeNode(linkAttr);
//or
anchor.href = 'https://www.google.com/gmail/about/new/';
//or
anchor.setAttribute('href', 'https://forum.xda-developers.com/oneplus-x');

//ChildNode interface
const childNode = document.createElement('p');
childNode.innerHTML = "Inserted after the 'p' node -- I'm in the new para";
para.after(childNode, "Yo I'm inserted after the new para");

//Creation of document fragment
const docFrag = document.createDocumentFragment();
docFrag.appendChild(textNode);
docFrag.appendChild(newNode);
docFrag.appendChild(anchor);

//ParentNode interface
const parentNodeA = document.createElement('p');
parentNodeA.innerHTML = "Para added after 'a' since it is last child";
docFrag.append(parentNodeA);
const parentNodeB = document.createElement('p');
parentNodeB.innerHTML = "Para added before first 'textNode' since it is first child";
docFrag.prepend(parentNodeB);
para.appendChild(docFrag);

//CommentNode
const commentNode = document.createComment('YOLO');
console.log(commentNode.nodeValue);

console.log(document.anchors);
console.log(document.body);
console.log(document.characterSet);
console.log(document.compatMode);
console.log(document.contentType);
console.log(document.documentURI);
console.log(document.doctype);
console.log(document.documentElement);
console.log(document.fonts);
console.log(document.head);
console.log(document.links);
console.log(document.scripts);
console.log(document.scrollingElement);
console.log(document.cookie);
console.log(document.defaultView);
console.log(document.activeElement);
console.log(document.styleSheets);
