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
