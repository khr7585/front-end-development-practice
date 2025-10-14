// SELECTING ELEMENTS
//GETELEMENTBYID
let element=document.getElementById("idname");

//GETELEMENTBYCLASSNAME
let elements=document.getElementsByClassName("classname");

//GETELEMENTBYTAGNAME
let elements=document.getElementsByTagName("tagname");

//QUERYSELECTOR
let element=document.querySelector("cssSelector");

//QUERYSELECTORALL
let elements=document.querySelectorAll("cssSelector");

//MODIFYING ELEMENTS
//innerhtml
element.innerHTML="<b>new html content</b>";

//innertext
element.innerHTML="only text(ignores hidden text)";