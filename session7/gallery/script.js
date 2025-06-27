const accessKey = "rjB75W-Wfyt-FxlCrnb6Cz66KN-UJeJY9Ht5qbuMHN0";

const gallery = document.getElementById("imageGallery");
const baseUrl = "https://api.unsplash.com";
fetch(`${baseUrl}/photos?client_id=${accessKey}&page=2&per_page=16`)
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
