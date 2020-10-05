let div = document.querySelectorAll(".main");

div.forEach(function (element) {
  element.addEventListener("click", colorChange);
  function colorChange() {
    element.style.backgroundColor = "darkgreen";
  }
  element.style.top = `${setRandom()}px`;
  element.style.left = `${setRandom()}px`;
});

function setRandom() {
  return Math.floor(Math.random() * 900);
}
