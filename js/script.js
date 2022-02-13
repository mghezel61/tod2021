let hamBtn = document.querySelector("#hamburger_btn");
let hamBtnSpans = hamBtn.querySelectorAll("span");
let mainNav = document.querySelector("#main_nav");
let navLinks = mainNav.querySelectorAll("a");
let sliderToTop = document.querySelector("#scrollToTop");
let body = document.querySelector("body");
console.log(navLinks);

// toggle the navigation #########################
hamBtn.addEventListener("click", toggle);
navLinks.forEach((link) => link.addEventListener("click", toggle));
// toggle function
function toggle() {
  mainNav.classList.toggle("show");
  hamBtnSpans.forEach((span) => {
    span.classList.toggle("clicked");
  });
}
// ###############################################

// scroll the page to the top ######################
window.addEventListener("scroll", slideTop);
function slideTop() {
  let currentScrollPos = window.scrollY;
  if (currentScrollPos > 20) {
    sliderToTop.classList.add("up");
  } else {
    sliderToTop.classList.remove("up");
  }
  sliderToTop.addEventListener("click", function () {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  });
}

// ##################################################
