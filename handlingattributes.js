//HANDLING ATTRIBUTES
//SET ATTRIBUTE(ATTRIBUTENAME,ATTRIBUTE VALUE)
//set id attribute
// let text=document.getElementById("hello");
// text.setAttribute("id","hello1");


//set class attribute
// let text=document.getElementById("hello");
// text.setAttribute("class","hello1");


//set src attribute for img
// let text=document.getElementById("myimg");
// text.setAttribute("src","image1.jpg");


//set href attribute for link
// let text=document.getElementById("link");
// text.setAttribute("href","https://www.google.com");


//set style attribute
// let text=document.getElementById("hello");
// text.setAttribute("style","color:red;font-size:200%");


//set type attribute for input
// let text=document.getElementById("text");
// text.setAttribute("type","password");


//set custom attribute(data attribute)
// let text=document.getElementById("btn");
// text.setAttribute("data-id","101");


//disable button
// let text=document.getElementById("btn");
// text.setAttribute("disabled","true");


//GET ATTRIBUTE(ATTRIBUTE NAME)
//get id attribute
// let text=document.getElementById("hello");
// let text1=text.getAttribute("id");
// console.log(text1);


//get class attribute
// let text=document.getElementById("hello");
// let teext=text.getAttribute("class");
// console.log(teext);


//get href attribute from link
// let text=document.getElementById("link");
// let teext=text.getAttribute("href");
// console.log(teext);


//get src attribute from image
// let text1=document.getElementById("image");
// let text2=text1.getAttribute("src");
// console.log(text2);


//get type attribute from input
// let text=document.getElementById("password");
// let text2=text.getAttribute("type");
// console.log(text2);


//get style attribute
// let text=document.getElementById("hemanth");
// let text1=text.getAttribute("style");
// console.log(text1);


//get custom data attribute
// let text=document.getElementById("button");
// let text1=text.getAttribute("user");
// console.log(text1);


//check if attribute exists
// let text=document.getElementById("password");
// let text1=text.getAttribute("hello");
// console.log(text1);


//HAS ATTRIBUTE(ATTRIBUTE NAME)
//check if id attribute exists
// let text=document.getElementById("hello");
// console.log(text.hasAttribute("id"));


//check if class attribute exists
// let text=document.getElementById("hello");
// console.log(text.hasAttribute("class"));


//check if href attribute exists
// let text=document.getElementById("link");
// console.log(text.hasAttribute("href"));


//check src attribute in image
// let text=document.getElementById("image");
// console.log(text.hasAttribute("src"));


//check user attribute in button
// let text=document.getElementById("button");
// console.log(text.hasAttribute("user"));


//check hello attribute in input
// let text=document.getElementById("password");
// console.log(text.hasAttribute("hello"));


//REMOVE ATTRIBUTE(ATTRIBUTE NAME)
//remove class attribute
// let text=document.getElementById("hello");
// text.removeAttribute("class");


//remove id attribute
// let text=document.getElementById("hello");
// text.removeAttribute("id");


//remove href from a link
// let text=document.getElementById("link");
// text.removeAttribute("href");


//remove src from image
// let text=document.getElementById("image");
// text.removeAttribute("src");


//enable a disabled button
// let text=document.getElementById("button");
// text.removeAttribute("disabled");


//remove required from input
// let text=document.getElementById("password");
// text.removeAttribute("required");


//remove inline style
// let text=document.getElementById("hemanth");
// text.removeAttribute("style");


//CLASS LIST
//1.ADD(CLASS NAME)
//add single class
// let text=document.getElementById("myimg");
// text.classList.add("img");


//add multiple class names
// let text=document.getElementById("myimg");
// text.classList.add("class1","class2","class3");


//add class on button click
// function changecolor(){
//     let text=document.getElementById("para");
//     text.classList.add("red");
// }


//add class to an image
// let text=document.getElementById("myimg");
// text.classList.add("classname");


//add class for validation
// let text=document.getElementById("email");
// text.classList.add("email");


//add class after checking condition
// let age=20;
// let text=document.getElementById("hello");
// if(age>18){
//     text.classList.add("success");
// }


//add class to many elements
// let text=document.querySelectorAll(".para");
// text.forEach(para=>{
//     para.classList.add("classname");
// });


//REMOVE(CLASSNAME)
//remove a single class
// let text=document.getElementById("hello");
// text.classList.remove("classname");


//remove multiple classes
// let text=document.getElementById("hello");
// text.classList.remove("classname","classname1","classname3");


//remove class on button click
// let text=document.getElementById("btn");
// text.classList.remove("button");


//remove class from image
// let text=document.getElementById("image");
// text.classList.remove("hello");
