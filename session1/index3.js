//default no parameter and no return
function func1() {
  console.log("this is my first function");
}

func1();

// if we send values as parameters and no return
function func2(a, b) {
  console.log(a);
  console.log(b);

  console.log(a + b);
}

func2(3, 5);

// function that returns a value
function func3(a, b) {
  return a * b;
}

const result = func3(3, 5);
console.log(`func3 result is ${result}`);

//arrow function
// function add(number1, number2) {
//     return number1+ number2;
// }
const add = (number1, number2) => {
  return number1 + number2;
};

// function square(x) {
//   return x * x;
// }
const square = (x) => x * x;

// function power(x, y) {
//   return x ** y;
// }

// const power = (x, y) => {
//   return x ** y;
// };

const power = (x, y) => x ** y;
