let name = "jack"; // this is a variable => interpreted as typeof string
const aa = 12; // it is not changable => number
let message = "hello"; // it is string
let num = 5; // it is a number
let isOn = true; // boolean
let NULL = null; // null object
let und; // undefined

//console.log(aa);
console.log(" typeof name is " + typeof name);
console.log(" typeof aa is " + typeof aa);
console.log(" typeof message is " + typeof message);
console.log(" typeof num is " + typeof num);
console.log(" typeof isOn is " + typeof isOn);
console.log(" typeof NULL is " + typeof NULL);
console.log(" typeof und is " + typeof und);

//array
let fruits = ["banana", "apples", "kiwi"];
//loop, filter, map, foreach
//object
let user = { name: "reza", city: "montreal" };
// similar to class concept

//function
function myMethod(x) {
  // function body
}

myMethod("reza");

let myType = myMethod; //callback Arrow functions

let json = { x: 1 };
let e; //undefined
let f = null;

console.log("type fruit " + typeof fruits);
console.log("type json " + typeof json);
console.log("type e " + typeof e);
console.log("type f " + typeof f);
