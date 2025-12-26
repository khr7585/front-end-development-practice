//DOM NAVIGATION
//PARENT ELEMENT
//access parent element
// let text=document.getElementById("para");
// console.log(text.parentElement);


//change parent element color
// let text=document.getElementById("para");
// text.parentElement.style.color="red";


//add class to parent element
// let text=document.getElementById("para");
// text.parentElement.classList.add("parent");


//remove parent element
// let text=document.getElementById("para");
// text.parentElement.remove();


//parent of a button
// let text=document.getElementById("btn");
// text.parentElement.style.border="3px solid yellow";


//check parent element exists
// let text=document.getElementById("para");
// if(text.parentElement!==null){
//     console.log("parent element exists");
// }


//PREVIOUS ELEMENT SIBLING 
//basic usage
// let text=document.getElementById("btn");
// console.log(text.previousElementSibling);


//change previous sibling color
// let text=document.getElementById("btn");
// text.previousElementSibling.style.color="red";


//add class to previous sibling
// let text=document.getElementById("btn");
// text.previousElementSibling.classList.add("class");


//button affects previous element
// let text=document.getElementById("btn");
// text.previousElementSibling.style.border="2px solid blue";


//check if previous sibling exists
// let text=document.getElementById("btn");
// if(text.previousElementSibling!==null){
//     console.log("sibling exists");
// }else{
//     console.log("does not exists");
// }


//using inside a list
// let text=document.getElementById("hello");
// text.previousElementSibling.style.color="red";


//NEXT ELEMENT SIBLING
// basic usage
// let text=document.getElementById("para");
// console.log(text.nextElementSibling);


//change next sibling color
// let text=document.getElementById("para");
// text.nextElementSibling.style.color="red";


//add class to next sibling
// let text=document.getElementById("para");
// text.nextElementSibling.classList.add("class");


//button affects next sibling
//same as above second one


//check if next sibling exists
// let text=document.getElementById("para");
// if(text.nextElementSibling!==null){
//     console.log("exists");
// }else{
//     console.log("does not exists");
// }


//using inside a list
// let text=document.getElementById("hello");
// text.nextElementSibling.style.color="red";


//CHILDREN
//get all children
// let text=document.getElementById("all");
// console.log(text.children);


//access specific child by index
// let text=document.getElementById("all");
// console.log(text.children[2]);


//loop through children
// let text=document.getElementById("all");
// for(let i=0;i<text.children.length;i++){
//     text.children[i].style.color="red";
// }


//children inside a list
// let text=document.getElementById("all");
// text.children[1].style.color="red";


//convert children to array
// let text=document.getElementById("all");
// let arr=Array.from(text.children);
// arr.forEach(children=>{
//     children.style.color="red";
// });


//check number of children
// let text=document.getElementById("all");
// console.log(text.children.length);


//FIRST ELEMENT CHILD
//basic usage
// let text=document.getElementById("all");
// console.log(text.firstElementChild);


//change first child color
// let text=document.getElementById("all");
// text.firstElementChild.style.color="red";


//add class to first child
// let text=document.getElementById("all");
// text.firstElementChild.classList.add("class");


//using with list
// let text=document.getElementById("all");
// text.firstElementChild.style.color="red";


//check if first child exists
// let text=document.getElementById("all");
// if(text.firstElementChild!==null){
//     console.log("exists");
// }
// else{
//     console.log("not exists");
// }


//first child of body
// document.body.firstElementChild.style.color="red";

//LAST ELEMENT CHILD
//SAME AS FIRST ELEMENT CHILD
// let text=document.getElementById("all");
// text.lastElementChild.style.color="red";