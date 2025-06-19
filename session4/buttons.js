//const buttons = document.querySelectorAll("button");
const buttons = document.getElementsByTagName("button");

function makeRandomColor() {
  //using random numbers to generate
  //red, green, blue
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g}, ${b})`;
}
//introduce the function if you want to call the reference
//arrow function not a good idea !!!
function colorize() {
  this.style.backgroundColor = makeRandomColor();
  this.style.color = makeRandomColor();
}

for (let button of buttons) {
  //add an event listner
  button.addEventListener("click", colorize);
}
