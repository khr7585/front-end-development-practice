//SELECTORS
//GETELEMENTBYCLASSNAME
//works as an array
// let hello=document.getElementsByClassName("classname");
// hello[0].style.color="red";
// hello[1].style.color="green";
// hello[2].style.color="yellow";


// using loop
// let hello=document.getElementsByClassName("classname");
// for(let i=0;i<hello.length;i++){
//     hello[i].style.color="red";
// }


//specific element
// let hello=document.getElementsByClassName("classname");
// hello[1].style.color="red";


//button click---->change all element
// function changetext(){
    // let text=document.getElementsByClassName("classname");
//     for(let i=0;i<text.length;i++){
//         // text[i].style.color="red";
        // text[i].innerHTML="welcome";
//     }
// }


//hide elements
// function changetext(){
//     let text=document.getElementsByClassName("classname");
//     for(let i=0;i<text.length;i++){
//         text[i].style.display="none";
//     }
// }


//GETELEMENTBYID----->used by only single element
// const hello=document.getElementById("idname");
// hello.style.color="red";


//changetext
// function changetext(){
//     let text=document.getElementById("idname");
//     text.innerHTML="welcome";
// }


//change text color
// function changetext(){
//     const text=document.getElementById("idname1");
//     text.style.color="red";
// }


//hide and show element
// function changetext(){
//     const text=document.getElementById("idname2");
//     text.style.display="none";
// }
// function changetext1(){
//     const text1=document.getElementById("idname2");
//     text1.style.display="block";
// }


//get value from input
// function getname(){
//     let value=document.getElementById("name").value;
//     document.getElementById("output").innerHTML=value;
// }


//change button text
// function changetext(){
//     let text=document.getElementById("chtext");
//     text.innerText="clicked!";
// }


//GET ELEMENT BY TAG NAME----->SHOWS IN ARRAY FORMAT
//change color of tags
// let text=document.getElementsByTagName("h1");
// text[0].style.color="red";


//change first h1 text (or) use functions
// let text=document.getElementsByTagName("h1");
// text[0].innerText="HEMANTH";


//count h1 elements
// function hello(){
// let text=document.getElementsByTagName("h1");
// document.getElementById("result").innerText="total items="+text.length;
// }


//change all button text
// function hello(){
// let text=document.getElementsByTagName("button");
// for(let i=0;i<text.length;i++){
//     text[i].innerText="clicked";
// }
// }


//change color of all elements
// function hello(){
//     let ele=document.getElementsByTagName("div");
//     for(let i=0;i<ele.length;i++){
//         ele[i].style.color="red";
//     }
// }


//QUERY SELECTOR(".btn")---->accessing elements
//select by id
// let text=document.querySelector("#hello");
// text.style.color="red";


//select by class
// let text=document.querySelector(".hello");
// text.style.color="red";


//select by tag name
// let text=document.querySelector("h1");
// text.style.color="red";


//select inside another element
// let text=document.querySelector(".box1 p");
// text.style.color="red";


//select input field
// let text=document.querySelector("input");
// text.value="hemanth";


//select button and add click event
// const text=document.querySelector("button");
// text.addEventListener("click",()=>{
//     alert("button clicked!");
// });


//select using attribute
// let text=document.querySelector('input[type="text"]');
// text.style.border="2px solid";


//QUERYSELECTORALL(".BTN")------>ACCESING BY ARRAY
//select all elements by a class
// let text=document.querySelectorAll(".classname");
// text.forEach(div=>{
// div.style.color="red";
// });

//select all elements by tagname
// let text=document.querySelectorAll("h1");
// text.forEach(h1=>{
//     h1.style.color="red";
// });


//select elements inside another element
// let text=document.querySelectorAll(".box1 p");
// text.forEach(h=>{
//     h.style.color="red";
// });


//select all input fields
// let text=document.querySelectorAll("input");
// text.forEach(input=>{
//     input.style.border="2px solid";
// });


//select using attribute selectors
// let text=document.querySelectorAll('input[type="text"]');
// text.forEach(h=>{
//     h.style.border="2px solid";
// })


//add click event to multiple buttons
// let text=document.querySelectorAll("button");
// text.forEach(h=>{
//     h.addEventListener("click",()=>{
//         alert("button clicked!");
//     });
// });


//change text of all list items
// let text=document.querySelectorAll("h1");
// text.forEach(h=>{
//     // h.innerText="hemanth";
//     h.textContent="hemanth";
// });