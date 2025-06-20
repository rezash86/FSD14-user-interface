// let tweetForm = document.querySelector("#tweetForm");
let tweetForm = document.getElementById("tweetForm");
let tweetPanel = document.getElementById("tweets");

tweetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(e.target);
  //   console.log(e.target[0].value);
  //   console.log(e.target[1].value);

  let username = e.target[0].value; //Node
  let tweet = e.target[1].value; //Node

  //call a function to add these values to the tweetPanel
  addTweet(username, tweet);

  e.target.reset();
});

const addTweet = (userName, tweet) => {
  const newTweet = document.createElement("li");
  let bTag = document.createElement("b");
  //<b>username</b>
  bTag.append(userName);
  newTweet.append(bTag);
  newTweet.append(`--->${tweet}`);
  tweetPanel.append(newTweet);
};
