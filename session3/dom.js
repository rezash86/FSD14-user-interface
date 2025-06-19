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

//I use createElement
function addItem() {
  const ul = document.getElementById("list");
  const li = document.createElement("li");
  let n = ul.getElementsByTagName("li").length;
  li.textContent = `item ${n + 1}`;
  ul.appendChild(li);
}

const removeLastItem = () => {
  const ul = document.getElementById("list");
  if (ul.lastChild) {
    ul.lastChild.remove();
  }
};

const chanegImage = () => {
  let randomNumber = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;
  //   console.log(`https://picsum.photos/${randomNumber}/200`);
  document.getElementById(
    "randomImage"
  ).src = `https://picsum.photos/${randomNumber}/200`;
};

const calcParagraphs = () =>
  alert(
    `The count of paragraphs is ${document.getElementsByTagName("p").length}`
  );

document.getElementById("cardForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("titleInput").value;
  const description = document.getElementById("descInput").value;
  const cardNode = document.createElement("div");
  cardNode.innerHTML = "<h3>" + title + "</h3><p>" + description + "</p>";
  document.getElementById("cardContainer").appendChild(cardNode);
  this.reset();
});
