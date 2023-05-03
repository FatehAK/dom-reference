'use strict';

const para1 = document.querySelector('.para1');

//**Inline Style Modification
console.log('Inline Style Modification\n');
console.log('==============================================');

//add inline style
para1.style.color = 'crimson';
console.log(para1.style.color);

//no fontSize inline style defined since fontSize in defined in external css file
console.log(para1.style.fontSize);

//get all styles assigned to element including initial styles
//returns a CSSStyleDeclaration read-only object
console.log(window.getComputedStyle(para1));

//'dot notation' method to get particular style
console.log(window.getComputedStyle(para1).background);
//'square bracket[]' method
console.log(window.getComputedStyle(para1)['background']);
//'getPropertyValue()' method
console.log(window.getComputedStyle(para1).getPropertyValue('background'));
//get styles applied to pseudo elements
console.log(window.getComputedStyle(para1, '::first-letter').color);

////These methods are a part of CSSStyleDeclaration Interface which is exposed through Element.style
//properties modifies through inline styles
//setProperty() --inline
para1.style.setProperty('background', 'lightgrey');

//getPropertyValue() --inline
para1.innerHTML += ` My color is ${para1.style.getPropertyValue('color')}`;

//removeProperty() --inline
para1.style.fontWeight = 'bold';
para1.style.removeProperty('font-weight');

//item() --inline
console.log(para1.style);
console.log(para1.style.item(0));
console.log(para1.style.item(1));
console.log(para1.style.item(2));

//getPropertyPriority() --inline
para1.style.setProperty('letter-spacing', '2px', 'important');
//works for js defined inline style
console.log(para1.style.getPropertyPriority('letter-spacing'));
//works for html defined inline style
console.log(para1.style.getPropertyPriority('font-variant'));
//does not work for external css defined style
console.log(para1.style.getPropertyPriority('font-style'));

//**External Style Modification
console.log('External StyleSheet Modification\n');
console.log('====================================================');

//*Stylesheet Interface
//properties
console.log(document.styleSheets.length);
console.log(document.styleSheets[1]);
console.log(document.styleSheets[1].disabled);
console.log(document.styleSheets[1].href);
console.log(document.styleSheets[1].ownerNode);
console.log(document.styleSheets[1].title);
console.log(document.styleSheets[1].type);
console.log(document.styleSheets[1].parentStyleSheet);

//*CSS Rule Interface
//get the stylesheet
const mySheet = document.styleSheets[1];
const myRules = mySheet.cssRules;
console.log(myRules);
//view the first css style
console.log(myRules[0].cssText); //readonly
//view the second css style
console.log(myRules[1].cssText);
//type of css rule
//since it's of type 1 it's a CSS Style Rule
console.log(myRules[1].type);
//CSS Style Rule Interface
//only for STYLE_RULE
console.log(myRules[0].selectorText);
//gives CSS StyleDeclaration Object
console.log(myRules[0].style);

//*CSS StyleDeclaration Interface
const para2 = document.querySelector('.para2');
const styleObj = document.styleSheets[1].cssRules[2].style;
styleObj.cssText = `font-size: 1.6em;
    background: #fbd399;
    font-style: italic !important;
    font-variant: small-caps;`;
console.log(styleObj.cssText);
console.log(styleObj.length);
console.log(styleObj.parentRule);

//properties modified on external stylesheet
//setProperty() --external
styleObj.setProperty('color', 'grey');
//getPropertyValue() --external
para2.innerHTML += ` My color is ${styleObj.getPropertyValue('color')}`;

//removeProperty() --external
styleObj.removeProperty('text-align');

//item() --external
console.log(styleObj.item(0));
console.log(styleObj.item(1));
console.log(styleObj.item(2));

//getPropertyPriority() --external
console.log(styleObj.getPropertyPriority('letter-spacing'));

//*CSS StyleSheet Interface
//properties
console.log('====Properties====');
console.log(document.styleSheets[1]);
console.log(document.styleSheets[1].cssRules[0]);
console.log(document.styleSheets[1].ownerRule);

//methods
//insertRule('rule', index)
document.styleSheets[1].insertRule('p { border: 2px solid black', 1);

console.log('\n====The rules are====');
for (let i = 0; i < document.styleSheets[1].cssRules.length; i++) {
  console.log(document.styleSheets[1].cssRules[i]);
}

//deleteRule(index)
//3rd rule is deleted
document.styleSheets[1].deleteRule(2);

console.log('\n====The rules after deletion are====');
for (let i = 0; i < document.styleSheets[1].cssRules.length; i++) {
  console.log(document.styleSheets[1].cssRules[i]);
}

//*CSS Interface

//supports(property, value)
console.log(CSS.supports('display', 'flex'));
console.log(CSS.supports('text-align', 'center'));
console.log(
  CSS.supports(`(transform-style: preserve) or (-moz-transform-style: preserve) or
(-o-transform-style: preserve) or (-webkit-transform-style: preserve)`)
);
