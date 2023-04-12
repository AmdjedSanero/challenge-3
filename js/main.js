let nav = document.querySelector(".top-header .container .menu .nav");
let ul = document.querySelector(".top-header .container .menu ul");

let navSpan1 = document.querySelector(
  " .top-header .container .menu .nav span:first-child"
);
let navSpan2 = document.querySelector(
  ".top-header .container .menu .nav span:nth-child(2)"
);
let navSpan3 = document.querySelector(
  ".top-header .container .menu .nav span:last-child"
);
const carousel = document.querySelector(".carousel");
const slides = carousel.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let openNav = false;
nav.addEventListener("click", (element) => {
  if (openNav) {
    ul.style.display = "none";
    nav.classList.remove("opened");

    openNav = !openNav;
  } else {
    ul.style.display = "flex";
    openNav = !openNav;
    nav.classList.add("opened");
  }
});

let currentSlide = 1;

function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

function showNextSlide() {
  showSlide(currentSlide + 1);
  console.log("next");
}

function showPrevSlide() {
  showSlide(currentSlide - 1);
  console.log("next");
}

prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);

showSlide(currentSlide);
