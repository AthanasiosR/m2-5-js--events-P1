let div = document.querySelectorAll(".main");

div.forEach(function (element) {
  element.addEventListener("click", colorChange);
  function colorChange() {
    element.style.backgroundColor = "darkgreen";
  }
});
