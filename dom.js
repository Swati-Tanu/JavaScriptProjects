//window vs document
//window: main container or global object & any operation related to entire browser window. We don't need to refer the window object if we want to use its property as it is by default. Eg, we write alert() not window.alert() or setTimeout() not window.setTimeout().
//document: DOM is a child of window object. In case of DOM we need to refer the document if we want to use document objects, methods or properties. Eg, we need to write document.queryselector or document.getElementById().

//window has - BOM, DOM, Javascript
//DOM vs BOM
//BOM stands for Browser Object Model. It deals with browser components aside from document, like history, location, navigator, screen etc.
//DOM stands for Document Object Model. It all about document related.

//Windows has: 1. methods(setTimeout(),setInterval()), 
//2.properties(innerHeight, innerWidth) and 
//3. object(Document).

alert(location.href)
if(confirm("Want to visit Youtube")){
    location.href("https://www.youtube.com/")
}

//DOM Navigation
document.documentElement //<html>...</html>: The root element of document.
document.head //<head>...</head>
document.body //<body>...</body>
document.body.childNodes //NodeList(n) [text, div.className, text, script, text etc]: returns all the Nodes with count and name. In this text means tab, enter and whitespace.
document.body.children //HTMLCollection(n) [div.className, script]: returns only the tags used.
document.body.children.length
document.body.hasChildNodes() //true/false: checks if the body has any child or not.
document.body.firstElementChild //represents the first child. firstChild() mostly returns text i.e.,tab,enter,whitespace.
document.body.parentElement //returns parent element
document.body.parentNode
document.body.nextElementSibling //returns siblings 
document.body.nextSibling //returns siblings  with whitespace
document.body.previousSibling
document.body.previousElementSibling

//How to search the Elements and the referances of the element.

//By Search -  getElementByTagName(), getElementByName(), getElementById(), getElementsByClass(), querySelector(), querySelectorAll(), innerHTML, etc.
//By Referance - By taking a variable and the changing the innerHTML.

//querySelector() vs querySelectorAll() 
//querySelectorAll() : It returns the NodeList of applicable elements.
//querySelector() : It returns the element with expected change in the very first applicable element it finds and ignores others.

//querySelector() vs getElementById()
//getElementById() returns a reference to the element by its ID. If not found it returns null.
//querySelector() returns the first element within the document that matches a specifies group of selectors. If not found it returns null.
//<li id="search">PHP<li> 
//<li>HTML</li>
//<li class="getit">JS</li>
//Similarity: We can catch the desired result using both i.e.,PHP.
//Main diffrence: What if we want to get content of third li?
//It can be achieved by querySelector() but not by getElementById() since there is no ID. 

//Event Object: It is the parent object of the event object. Eg: MouseEvent, focusEvent, KeyboardEvent, etc. There are 4 ways of writing Events in Js.
//1. Using alert()
//2. By calling a function
//3. Using Inline events: varName.onclick = function(){}
//4. Using Event Listeners : addEventListener("click",() => {})
//The difference between 3rd and 4th is that the function gets overwritten in 3rd, means if it's called with more than one event then only bottom event will be executed.

console.log(event);
console.log(event.target);
console.log(event.type);
console.log(event.key);

//Mouse Event: mouseUp, mouseEnter, mouseLeave, mouseDown, mouseOut, mouseOver, mouseClick.

//Keyboard Event: onkeypress, onkeydown, onkeyup;

//Input Events: onchange

//Time based event: setTimeout(), setInterval(), clearTimeout(), clearInterval().









