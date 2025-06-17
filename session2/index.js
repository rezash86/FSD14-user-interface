let arr = ["a", "b", "c", "d"];

let newLength = arr.push("e");
console.log(newLength);

console.log(arr.pop());

console.log(arr.slice(1, 3)); // it starts from 0

let newArr = arr.concat(["l", "m"]);

console.log(newArr);

console.log(arr.includes("b", 3));

(element) => element > 10; //anynoumous function can be used as a callback function

// (element) => element > 10
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10); // find gives you the first element that meets the conditon

const foundWithIndex = array1.find((element, idx) => {
  return element > 10 && idx > 2;
}); // find gives you the first element that meets the conditon

const filtered = array1.filter((element) => element > 10); // find gives you all the elements that meet the conditon

console.log(found);
console.log(foundWithIndex);
console.log(filtered);

function anyMethod(a, b) {
  return a + b;
}

(element, idx) => {
  if (a === 3 && b === 4) {
    return element > 10 && idx > 2;
  }
  return a * b;
};

//how we convert this one to arrow function

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));

console.log(inventory.find((frt) => frt.name === "bananas"));

for (f of inventory) {
  console.log(f);
}

inventory.forEach((fruit) => {
  if (fruit.quantity === 0) {
    console.log(`out of stock for ${fruit.name}`);
  }
});
