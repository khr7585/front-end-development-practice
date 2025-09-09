// variables
// 1.declaring variables
// var
var x=10;
y=50;
// let(es6)
let y=10;
y=20;
// const(es6)
const z=10;
const arr=[1,2];
arr.push(3);


// 2.variable scope
if(true){
    var a=10;
    let b=20;
    const c=30;
}
// ouput:-10

// 3.hoisting
console.log(x);
var x=5;
// output:-undefined


// dataypes
// 1.primitive
let name="hemanth reddy" // string
let age=21 // number
let price=12.21 // number
console.log(Number.MAX_SAFE_INTEGER); // bigint
console.log(70342515374981413536784098765n); //bigint
let isloggedin=true // boolean
let iscomplete=false //boolean


//2.non-primitive
// object
const object={
    "name":"hemanth",
    "profession":"engineer"
}
 
const array=["hemanth","reddy",20,7585n,[64,"33"],{"name":"hello"}] // array

// function
function hello() {
    console.log("hi, everyone");
}
hello();


// type coversion
// 1.implicit :-automatic
console.log("5"+2); // output:-"52" // 2 becomes string then concat
console.log("5"-3); // string becomes number
console.log("5"*"3"); // both numbers coverted to string
console.log("5"/3); // string becomes number

//special cases
console.log(true+1); // 2 //true becomes 1
console.log(false+1); // 1 //false becomes 0
console.log("10"-true); // 9 //10-1
console.log("10"+true); // "10true" //converted to string
console.log(null+5); // 5 //null is treated as 0
console.log(undefined+5); // NaN(not a number) //undefined cannot be converted


// 2.explicit :-manual
// a)to string
//   String(value)
//   value.toString()
//   Concatenation with ""
console.log(string(123)); // "123"
console.log((123).toString()); // "123"
console.log(true.toString()); // "true" 
console.log(null+""); // "null"

//b)to number
// Number(value)
// parseInt(value)->converts to integer
// parseFloat(value)->coverts to float
// Unary+value
console.log(Number("123")); // 123
console.log(Number("123abc")); // NaN
console.log(parseInt("123.4656")); // 123
console.log(parseFloat("123.56")); // 123.56
console.log(+"100"); // 100
console.log(+true);  // 1
console.log(+false); // 0
console.log(+null); // 0
console.log(+undefined); // NaN


//c)to boolean
//true:-non empty values,non zero values,objects{},arrays[]
//false:-0,"",null,undefined,NaN,false
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean([])); // true
console.log(Boolean(null)); // false
console.log(Boolean(!!"test")); // true


//equality
console.log(5=="5"); // true (converted to number)
console.log(5==="5"); // false
console.log(null==underdefined); // true
console.log(null===underdefined); // false
console.log("0"==false); // true (both becomes 0)
console.log("0"===false); //false