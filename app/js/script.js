const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const link = document.querySelector(".link");

btnHamburger.addEventListener("click", function () {
  header.classList.toggle("open");
  overlay.classList.toggle("fade-in");
  overlay.classList.toggle("fade-out", !overlay.classList.contains("fade-in"));
  // Overflow hidden
  if (header.classList.contains("open")) {
    body.classList.add("noscroll");
  } else {
    body.classList.remove("noscroll");
  }
});

document.onclick = function (e) {
  if (e.target.classList == "link") {
    header.classList.toggle("open");
    overlay.classList.toggle("fade-in");
    overlay.classList.toggle("fade-out", !overlay.classList.contains("fade-in"));

    // Overflow hidden
    if (header.classList.contains("open")) {
      body.classList.add("noscroll");
    } else {
      body.classList.remove("noscroll");
    }
  }
};
