const accessKey = "rjB75W-Wfyt-FxlCrnb6Cz66KN-UJeJY9Ht5qbuMHN0";

const gallery = document.getElementById("imageGallery");
const baseUrl = "https://api.unsplash.com";

fetch(`${baseUrl}/photos?client_id=${accessKey}&per_page=16`)
  .then((res) => res.json())
  .then((data) => {
    // data.array.forEach((element) => {
    //   console.log(element);
    // });
    data.forEach((element) => {
      const col = document.createElement("div");
      col.className = "col-md-3";
      col.innerHTML = `<img src="${element.urls.small}" class="gallery-img" alt=${element.alt_description} />`;
      gallery.appendChild(col);
    });
  });

document.querySelectorAll("#filterButtons button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const queryType = btn.getAttribute("umb");
    //use the value to fetch the images
    fetch(
      `${baseUrl}/search/photos?query=${queryType}&client_id=${accessKey}&per_page=16`
    )
      .then((res) => res.json())
      //   .then((data) => console.log(data.results));
      .then((data) => {
        gallery.innerHTML = "";
        data.results.forEach((element) => {
          const col = document.createElement("div");
          col.className = "col-md-3";
          col.innerHTML = `<img src="${element.urls.small}" class="gallery-img" alt=${element.alt_description} />`;
          gallery.appendChild(col);
        });
      });
  });
});
