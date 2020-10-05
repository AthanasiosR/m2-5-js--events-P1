// Exercise 1.0
// ------------
console.log("exercise-1");

let body = document.querySelector("body");

//Creating P Element
let p = document.createElement("p");
let pTextNode = document.createTextNode("You Win!");
p.appendChild(pTextNode);

//Function That Shows The P Element
let youWin = () => {
  body.appendChild(p);
};

//Event Listener
body.addEventListener("click", youWin);
