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

document.getElementById("nameInput").addEventListener("input", (event) => {
  console.log(event.target.value);
});
