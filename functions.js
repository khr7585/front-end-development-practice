//function declaration(named)
function add(a,b){
    return a+b;
}
console.log(add(2,3));
// 5


//function expression (must be defined before use)
const add=function(a,b){
    return a+b;
};
console.log(add(2,3));
// 5


//anonymous function(no name)
setTimeout(function(){
    console.log("hello");
});
// hello


//immediately invoked function expression(iife)-excutes immediately after definition
(function(){
    console.log("hello");
})();
// hello


//function with default parameters
function greet(name="guest"){
    return "hello,"+name;
}
console.log(greet());
// hello,guest


//arrow functions
const greet=(name)=>"hello,"+name;
console.log(greet("hemanth"));
// hello,hemanth

