const baseUrl = "https://jsonplaceholder.typicode.com";

document.getElementById("submitData").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  fetch(`${baseUrl}/posts`, {
    method: "POST",
    body: JSON.stringify({
      marketName: title,
      message: body,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});
