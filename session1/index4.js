// Function to Calculate the Area of a Rectangle
function area(x, y) {
  return x * y;
}

//const area = (x, y) => x * y;

// Function to Convert Celsius to Fahrenheit
function convert(celc) {
  // (cel * 9 ) / 5 + 32
  let fahrenheit = (celc * 9) / 5 + 32;
  return fahrenheit;
}

const converArrow = (celc) => {
  let fahrenheit = (celc * 9) / 5 + 32;
  return fahrenheit;
};
// Function to Check if a Number is Positive, Negative, or Zero
const check = (num) => {
  if (num > 0) {
    return 1;
  } else if (num < 0) {
    return -1;
  } else return 0;
};
// Function to Capitalize the First Letter of a Word
function capitalize(word) {
  //   let x = "temp";
  return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
}

const capitalizeArrow = (word) =>
  word.replace(word.charAt(0), word.charAt(0).toUpperCase());

// Function to Greet a User (Using Template Literals)
const greet = (user) => console.log(`hello and welcome  : ${user}`);

console.log(`the area of rectangle is ${area(4, 6)}`);
console.log(`conversion of celc to fahr of 35 is ${convert(35)}`);
console.log(`check number of ${check(0)}`);
console.log(`the capitalize of first char ${capitalize("my code ")}`);
greet("JAC Students");
