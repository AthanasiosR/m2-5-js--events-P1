// Exercise 1.1
let body = document.querySelector("body");
let youwin = document.createTextNode("You Win!");
let youLose = document.createTextNode("You Lose");
let p = document.getElementById("result");
let didYouWin = false;
body.addEventListener("click", trueOrFalse);
function trueOrFalse() {
  didYouWin = true;
}

setTimeout(function () {
  if (didYouWin === false) {
    p.appendChild(youLose);
  } else {
    p.appendChild(youwin);
  }
}, 1000);

console.log("exercise 1.1");
