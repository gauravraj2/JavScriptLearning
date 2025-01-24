"use strict"; // treat all JS code as newer version

//alert( 3+3 ) //it works in browser not in node.js

let obj = null;
console.log(obj);

console.log(undefined == null) 
/* Loosely equal because bot represent no value
*/

Number = 2; 
BigInt = 12n;
let nameIs = "Divyanshu"
let nullValue = null;
let isWhat = true;
let name; //undefined
let s = Symbol('foo');

console.log(typeof Number);
console.log(typeof BigInt);
console.log(typeof nameIs);
console.log(typeof nullValue);
console.log(typeof isWhat);
console.log(typeof name);
console.log(s);
console.log(typeof s);

/*
//object
const obj1 = {
    Name: "Divyanshu",
    Age: 21,
}

console.log(obj1);
*/
