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

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
