// For Loop

for (let i = 0; i < 5; i++) {
  //do something
  console.log("the counter is " + i);
}

let myName = "reza";
// having length of the string as the starting point of counter
for (let i = myName.length; i > 0; i--) {
  console.log("the counter of string is " + i);
}
// while loop
let i = 0;
while (i < 5) {
  console.log("the counter of while is " + i);
  i++;
}

// do while
i = 0;
do {
  console.log("the counter of do while is " + i);
  i++;
} while (i < 5);

//looping through Arrays
let colors = ["red", "blue", "purple"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]); //index out of bound exception
}

//it loops through the values of array
for (let color of colors) {
  console.log(color);
}

//it loop through the key/values of an object
let person = { name: "Jack", age: 20, city: "Rome" };
for (let ky in person) {
  console.log(ky + " : " + person[ky]);
}
