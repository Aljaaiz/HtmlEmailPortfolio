let hamburger = document.getElementById("hamburger");
let mobile_nav = document.querySelector(".mobile-nav");
let close = document.getElementById("close-hamburger");
let navItem = document.querySelectorAll(".nav-list-item");

hamburger.addEventListener("click", function () {
  mobile_nav.classList.toggle("active");
});
close.addEventListener("click", function () {
  mobile_nav.classList.remove("active");
});
navItem.forEach(function (item) {
  item.addEventListener("click", function () {
    mobile_nav.classList.remove("active");
  });
});
