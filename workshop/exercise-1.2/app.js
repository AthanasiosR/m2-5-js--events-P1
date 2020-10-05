// Exercise 1.2
// ------------

let youwin = document.createTextNode("You Win!");
let youLose = document.createTextNode("You Lose");
let p = document.getElementById("result");
let didYouWin = false;

let min = 1000;
let max = 5000;

let seconds = Math.random() * (max - min + 1) + min;
let fixedTime = time / 1000;
document.getElementById("time").innerText = (seconds / 1000).toFixed(2);

setTimeout(function () {
  if (didYouWin === false) {
    p.appendChild(youLose);
  } else {
    p.appendChild(youwin);
  }
}, seconds);

document.body.addEventListener("click", trueOrFalse);
function trueOrFalse() {
  didYouWin = true;
}

console.log("exercise 1.2");
