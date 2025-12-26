//HANDLING ELEMENTS
//CREATE ELEMENT("TAG");
//create a paragraph and add to body
// let text=document.createElement("h1");
// text.textContent="hello welcome!";
// document.body.appendChild(text);


//create a div with style
// let text=document.createElement("div");
// text.textContent="this is a div";
// text.style.color="red";
// document.body.appendChild(text);


//create a button and add click event
// let text=document.createElement("button");
// text.textContent="click me";
// text.onclick=function(){
//     alert("button clicked!");
// };
// document.body.appendChild(text);


//create list items dynamically
// let text=document.getElementById("all");
// let text1=document.createElement("li");
// text1.textContent="hello";
// let text2=document.createElement("li");
// text2.textContent="welcome";
// document.body.appendChild(text1);
// document.body.appendChild(text2);


//create input field
// let text=document.createElement("input");
// text.type="text";
// text.placeholder="password";
// document.body.appendChild(text);


//create image element
// let text=document.createElement("img");
// text.src="image1.jpg";
// text.width=200;
// document.body.appendChild(text);


//create element with class and id
// let text=document.createElement("div");
// text.id="div1";
// text.className="div2";
// text.textContent="this is div";
// document.body.appendChild(text);


// //create multiple elements using loop
// for(let i=0;i<=3;i++){
//     let text=document.createElement("p");
//     text.textContent="paragraph"+i;
//     document.body.appendChild(text);
// }


//PREPEND(ELEMENT)
//prepend a paragraph to body
// let text=document.createElement("p");
// text.textContent="hello";
// document.body.prepend(text);


//prepend inside a div
// let text=document.getElementById("all")
// let text1=document.createElement("li");
// text1.textContent="hai";
// text.prepend(text1);


//prepend multiple elements
// let text=document.createElement("p");
// text.textContent="para1";
// let text1=document.createElement("p");
// text1.textContent="para2";
// document.body.prepend(text,text1);


//prepend input field
// let text=document.createElement("input");
// text.type="password";
// text.placeholder="password";
// document.body.prepend(text);


//prepend list item
// let text=document.getElementById("all");
// let text1=document.createElement("li");
// text1.textContent="hai";
// text.prepend(text1);


//prepend text without create element
// document.body.prepend("hai");


//APPEND(ELEMENT)
//append paragraph to body
// let text=document.createElement("p");
// text.textContent="paragraph";
// document.body.append(text);


//append inside a div
// let text=document.getElementById("div");
// let text1=document.createElement("p");
// text1.textContent="hemanth";
// text.append(text1);


//append multiple elements at once
// let text=document.createElement("h1");
// text.textContent="kolla";
// let text1=document.createElement("h2");
// text1.textContent="hemanth";
// let text2=document.createElement("h3");
// text2.textContent="reddy";
// document.body.append(text,text1,text2);


//append text directly
// document.body.append("hemanth");


//append list items
// let text=document.getElementById("all");
// let text1=document.createElement("li");
// text1.textContent="hello";
// let text2=document.createElement("li");
// text2.textContent="welcome";
// text.append(text1,text2);


//append input field
// let text=document.createElement("input");
// text.type="password";
// text.placeholder="password";
// document.body.append(text);


//REMOVE()
//remove a paragraph
// let text=document.getElementById("hai");
// text.remove();


//remove element on button click
let 