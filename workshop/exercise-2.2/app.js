let div = document.querySelectorAll(".main");

div.forEach(function (element) {
  element.addEventListener("click", colorChange);
  function colorChange() {
    if (element.style.backgroundColor === "darkgreen") {
      element.style.backgroundColor = "darkred";
    } else {
      element.style.backgroundColor = "darkgreen";
    }
  }
});
