function countParagraphs() {
  const count = document.getElementsByTagName("p").length;
  openModal(`The count of paragraphs is ${count}`);
}

function defaultModalCall() {
  openModal();
}

function openModal(message = "This is a custom modal!") {
  document.getElementById("modalText").textContent = message;
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function changeColor() {
  let mainHeader = document.getElementById("main-title");
  mainHeader.style.color =
    mainHeader.style.color === "red" ? "darkblue" : "red";
}

function addNewParagraph() {
  const parElement = document.createElement("p");
  parElement.textContent = "this is new ";
  parElement.className = "para";
  document.body.appendChild(parElement);
}
