//.length()
let array=[1,2,3,4,3];
console.log(array.length);
// 5

//.indexof(element)
console.log(array.indexOf("tigor"));// -1
console.log(array.indexOf(3));// 2

//.lastIndexOf(element)
console.log(array.lastIndexOf(3));// 5

//.includes(element)
console.log(array.includes(5));// false

//Array.isArray(value)
Array.isArray(100);// false
Array.isArray(array);// true

//.psuh(element)-insert element at end
array.push(5);
console.log(array);// [1,2,3,4,3,5]

//.unshift(element)-insert element at beginning
array.unshift(0);
console.log(array);// [0,1,2,3,4,3,5]

//.pop()-remove and return last element
console.log(array.pop());// 5
console.log(array);// [0,1,2,3,4,3]

//.shift()-remove and return first element
console.log(array.shift());// 0

//.tostring()
let strArray=array.toString()
console.log(strArray);// "1,2,3,4,3"

//.join(separator)
console.log(array.join("%"));// "1%2%3%4%3"

//.reverse()
array.reverse();
console.log(array);// 3,4,2,1

//.sort()
let arr2 = [4, 9, 1, 3]
let arr3 = ["tiGor", "bOb", "bhAAi"]
arr2.sort();
arr3.sort();
console.log(arr2); // output:- [1, 3, 4, 9]
console.log(arr3); // output:- ["bhAAi", "bOb", "tiGor"]

//.slice(startingIndex,endingIndex)
let array4 = [23, 47, 29, 33, 46]
console.log(array4.slice()); // returns the copy of whole array.
// output:- [23, 47, 29, 33, 46]
console.log(array4.slice(2)); // considers given index as starting and last element as ending
// output:- [29, 33, 46]
console.log(array4.slice(2, 4)); // output:- [29, 33]