let x = 12;
let num = new Number(50);
console.log(typeof num);
console.log(num);
console.log(typeof x);
console.log(x);

let s = new String("FSD");
let str = "my code";
console.log(typeof str);
console.log(str);
console.log(typeof s);
console.log(s);

let b = new Boolean(false);

// set has unique elements in its structure
// and will ignore repetetive values
let mySet = new Set([1, 2, 3, 4, 5, 4, 5]);
console.log(mySet);

//Map only takes unique key
//and if you try to add value to the same key
//it will override the value
let myMap = new Map();
myMap.set("1", "A");
myMap.set("2", "B");
myMap.set("3", "C");
myMap.set("4", "D");
myMap.set("4", "E");
console.log(myMap);

let date = new Date();

console.log(date.toISOString());
console.log(date.toLocaleTimeString());
console.log(date.toUTCString());
console.log(date.getFullYear());

//MATH
console.log(Math.floor(Math.random() * 10)); // between 1 to 10
console.log(Math.floor(Math.random() * 100)); // 1 to 100
console.log(Math.floor(Math.random() * 100) + 100); // 100 to 200

let j = { a: 1, b: 2 };
console.log(j);
console.log(typeof j);

let result = JSON.stringify({ a: 1, b: 2 });
console.log(result);
console.log(typeof result);
