function showMyModal() {
  const myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
  myModal.show();
}

function showToast() {
  const toastEl = document.getElementById("liveToast");
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}

function showoffCanvas() {
  //offcanvasScrolling
  const offcanvas = new bootstrap.Offcanvas(
    document.getElementById("offcanvasScrolling")
  );
  offcanvas.show();
}

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

function showAlert() {
  document.getElementById("alertPlaceHolder").innerHTML =
    '<div class="alert alert-success" role="alert"> This is a bootstrap message! </div>';
}

function toggleHighLight() {
  //toggle helps me to add a class into the classlist if it does not exist
  //and if it exists it will remove it
  console.log(document.getElementById("myText").classList);
  document.getElementById("myText").classList.toggle("text-danger");
  console.log(document.getElementById("myText").classList);
}

function changeColor() {
  const selected = document.getElementById("colorSelect").value;
  console.log(selected);
  const text = document.getElementById("coloredText");
  text.className = "mt-3 text-" + selected;
}
