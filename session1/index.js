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

let a = 12;
let b = 13;
let c = a + b; //expression
// operators -> + - / * %

c = a ** b; // exponent

c += a;
c -= b;

console.log(c);

// --- condition Operators
let number = 45;
if (number > 10) {
  console.log("number is more than 10");
  //Any operation based on the value of number
} else if (number < 5) {
} else {
}

//short circuit
let x = 15;
if (x > 10 && x % 3 === 0) {
  console.log("true");
}

if (x > 10) {
  if (x % 3 === 0) {
  }
}

if (x > 10 || x % 3 === 0) {
}

// Logical and
// Logical or

let flag = true;
console.log(!flag);

// --- string operators
let firstName = "Reza";
let lastName = "Shalchian";

let fullName = firstName + " " + lastName; // concat
console.log(fullName);

// My firstname is Reza and my last name is Shalchian
console.log(
  "My firstname is " + firstName + " and my last name is " + lastName
);

console.log(`My firstname is ${firstName}  and my last name is ${lastName}`); //this is cleaner, newer and more stylish

//case sensitivity matters
console.log("A" > "a"); // false

//please provide the following string in your console
// yourname and student number are 2 different string variable
// My name is "<yourname>" and my student number is <student number>

let studentNumber = "444444";
console.log(`My name is ${fullName} and my student number is ${studentNumber}`);

// -string method
let favFruit = "apple"; // String is mutable
let modifiedValue = favFruit.replace("le", "jj");
console.log(modifiedValue);
console.log(favFruit); //the original value is not changing

console.log(favFruit.toUpperCase()); // methods are called DO NOT FORGET ()
console.log(favFruit.indexOf("le")); // it starts with 0 and index of le is 3

const fruitName = "banana";
switch (fruitName) {
  case "banana":
    console.log("Monkey food");
    break;
  case "watermelon":
    console.log("juicy");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitName}.`);
}

//ternary operator <TRUE value> ? < Do this> : <otherwise do this>
fruitName === "banana"
  ? console.log("I like juice")
  : console.log("I don't like");

let isLoggidIn = true;
let welcomeMessage = isLoggidIn ? "welcome" : "Please log in";
console.log(welcomeMessage);

const drinkingAge = 18;
let myAge = 20;
if (myAge > drinkingAge) {
  console.log("cheers");
} else {
  console.log("Not for you, sorry");
}
