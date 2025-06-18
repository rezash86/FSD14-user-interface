let pElement = document.getElementById("demo");
pElement.textContent = "hello world";
document.getElementById("demo").textContent = "second change";
document.querySelector(".box").style.backgroundColor = "red";
console.log(document.getElementsByClassName("warning").length);
document.getElementsByClassName("warning")[2].style.backgroundColor = "blue";
document.getElementsByTagName("button")
  ? (document.getElementsByTagName("button")[0].textContent = "some new data")
  : document.getElementsByTagName("button");
//   document.getElementById("hoverbox").style.backgroundColor = "red";

const newBtn = document.createElement("button");
newBtn.textContent = "new button";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "blue";

document.getElementById("generateButton").appendChild(newBtn);
let obj = document.getElementById("testme");
obj.remove();

document.getElementById("generateButton").removeChild(newBtn);

/// EVENTS
document.getElementById("hideBtn").addEventListener("click", function () {
  //   alert("This is a message");
  console.log("the button clicked");
  console.log(this); //returns me the node
  this.style.display = "none";
});

// document.getElementById("showAlert").addEventListener("click", function () {
//   let value = document.getElementById("alert").value;
//   //   console.log(document.getElementById("alert"));
//   alert(value);
// });

function showAlert() {
  let value = document.getElementById("alert").value;
  alert(value);
}

function mouseOver() {
  document.getElementById("showAlert").style.backgroundColor = "green";
}

function mouseLeave() {
  document.getElementById("showAlert").style.backgroundColor = "blue";
}
