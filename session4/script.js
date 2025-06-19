document.getElementById("clickBtn").addEventListener("click", function () {
  alert("a message");
});

document
  .getElementById("dblClickBtn")
  .addEventListener("dblclick", function () {
    alert("a message for double click");
  });

document.getElementById("hoverBox").addEventListener("mouseover", () => {
  console.log("the mouse moved");
});

document.getElementById("nameInput").addEventListener("input", () => {
  //console.log(event.target.value);
  console.log("some one typed");
});

document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault(); // you have a controlled form
  console.log(event.target[0].value);
  console.log(event.target[1].value);
});

document.getElementById("keyInput").addEventListener("keydown", function (e) {
  console.log(e.key);
});

document.getElementById("focusInput").addEventListener("focus", function () {
  console.log("foucus happened    ");
});

const password = document.querySelector('input[type="password"]');

password.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
  //   password.style.background = "pink";
});

password.addEventListener("blur", (event) => {
  event.target.style.background = "";
});

//change event
document.getElementById("selectBox").addEventListener("change", function (e) {
  console.log(e.target.value + " has been chosen");
});

// copy
document.getElementById("copyText").addEventListener("copy", function () {
  console.log("user copied something");
});
