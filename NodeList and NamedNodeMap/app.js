"use strict";

console.log('-------------Start of Node List-------------\n');
const paraList = document.querySelectorAll('p');
const container = document.querySelector('.container');
let childList = container.childNodes;

const four = document.createElement('p');
four.innerHTML = "Four";
container.appendChild(four);

//Non live NodeList since Four is not included
console.log(paraList);
console.log('\n');

//Live NodeList
//White space characters included in childNodes
console.log(childList);
console.log('\n');
//Ignore white space characters and display
for (const elem of childList) {
    if (elem.nodeType !== 3) {
        console.log(elem);
    }
}
console.log('\n');

//Display the first item
console.log(childList.item(0));
console.log('\n');

//Display both key and values
for (const entry of childList.entries()) {
    //Ignore whitespace characters
    if (entry[1].nodeType !== 3) {
        console.log(entry);
    }
}
console.log('\n');

//Using forEach() with callback values
childList.forEach((val, index, listObj) => {
    if (val.nodeType !== 3) {
        console.log(`${index} ${val} ${listObj.length}`);
    }
});
console.log('\n');

//Display only the keys
for (const keys of childList.keys()) {
    console.log(keys);
}
console.log('\n');

//Display only the values
for (const values of childList.values()) {
    if (values.nodeType !== 3) {
        console.log(values);
    }
}
console.log('\n');

//Converting NodeList to Array
const nodeArray = Array.from(childList);
console.log(nodeArray);
console.log('-------------End of Node List-------------\n\n');

console.log('-------------Start of NamedNodeMap-------------\n');
//Getting a NamedNodeMap
const namedNodeMap = container.attributes;

//Display specified attribute
console.log(namedNodeMap.getNamedItem('class'));

//Remove the attrbute
namedNodeMap.removeNamedItem('class');
console.log(namedNodeMap);

//Create an 'Attr' and set it
const classAttr = document.createAttribute('class');
classAttr.value = 'container';
namedNodeMap.setNamedItem(classAttr);
console.log(namedNodeMap);

console.log('-------------End of NamedNodeMap-------------\n\n');
