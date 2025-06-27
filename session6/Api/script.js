function loadData() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then(
      (data) => (document.getElementById("lameJoke").innerText = data.value)
    );
}

async function loadDataAsync() {
  let result = await fetch("https://api.chucknorris.io/jokes/random");
  let data = await result.json();
  console.log(data.value);
}

function showRandomDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById(
        "imageRandomDog"
      ).innerHTML = `<img src="${data.message}"/>`;
    })
    .catch((error) => {
      console.log(error);
    });
}
