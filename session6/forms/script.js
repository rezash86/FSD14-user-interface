document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let valid = true;
  const nameInput = document.getElementById("name");
  if (nameInput.value.trim() === "") {
    nameInput.classList.add("is-invalid");
    valid = false;
  } else {
    nameInput.classList.remove("is-invalid");
    nameInput.classList.add("is-valid");
  }
  const emailInput = document.getElementById("email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailInput.classList.add("is-invalid");
    valid = false;
  } else {
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");
  }

  if (valid) {
    alert("form submitted successfully");
    this.reset();
    document.querySelectorAll(".form-control").forEach((input) => {
      input.classList.remove("is-valid");
    });
  }
});
