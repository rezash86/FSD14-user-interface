const accessKey = "rjB75W-Wfyt-FxlCrnb6Cz66KN-UJeJY9Ht5qbuMHN0";
const baseUrl = "https://api.unsplash.com";
const gallery = document.getElementById("imageGallery");

const fetchData = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/photos?client_id=${accessKey}&per_page=16`
    );
    //console.log(response.data);
    gallery.innerHTML = "";
    response.data.forEach((element) => {
      const col = document.createElement("div");
      col.className = "col-md-3";
      col.innerHTML = `<img src="${element.urls.small}" class="gallery-img" alt=${element.alt_description} />`;
      gallery.appendChild(col);
    });
  } catch (error) {
    console.log(error);
  }
};

const fetchDataByFilter = async (type) => {
  try {
    const response = await axios.get(
      `${baseUrl}/search/photos?query=${type}&client_id=${accessKey}&per_page=16`
    );
    //console.log(response.data);
    gallery.innerHTML = "";
    response.data.results.forEach((element) => {
      const col = document.createElement("div");
      col.className = "col-md-3";
      col.innerHTML = `<img src="${element.urls.small}" class="gallery-img" alt=${element.alt_description} />`;
      gallery.appendChild(col);
    });
  } catch (error) {
    console.log(error);
  }
};

document.querySelectorAll("#filterButtons button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const queryType = btn.getAttribute("umb");
    //use the value to fetch the images
    fetchDataByFilter(queryType);
  });
});

fetchData();
