document
  .querySelector(".accordion-button")
  .addEventListener("click", function () {
    console.log("it is clicked");
  });

function showToast() {
  const toast = new bootstrap.Toast(document.getElementById("liveToast"));
  toast.show();
  //how can I make it disapperead
  setTimeout(() => toast.hide(), 3000);
}

function nextSlide() {
  const carousel = bootstrap.Carousel.getOrCreateInstance(
    document.getElementById("carouselExample")
  );
  carousel.next();
}

function prevSlide() {
  const carousel = bootstrap.Carousel.getOrCreateInstance(
    document.getElementById("carouselExample")
  );
  carousel.prev();
}

function addItem() {
  const input = document.getElementById("itemInput");
  const inputText = input.value.trim();
  if (!inputText) return;
  //you need to add the value dynamically into the ul itmeList
  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `${inputText} <button class="btn btn-danger btn-sn" onclick="this.parentElement.remove()">Delete</button>`;
  document.getElementById("itmeList").appendChild(li);
  input.value = "";
}
console.log(window);

console.log(window.document.title);

window.addEventListener("scroll", () => {
  const brand = document.getElementById("brandName");
  brand.classList.toggle("text-danger", window.scrollY > 50);
});
