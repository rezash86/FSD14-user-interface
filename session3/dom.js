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
