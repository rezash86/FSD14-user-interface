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
