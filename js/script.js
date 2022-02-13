let body = document.querySelector("body");
let header = body.querySelector("header");
let mobileNavBackground = body.querySelector("#mobile_nav_background");
let hamBtn = document.querySelector("#hamburger_btn");
let hamBtnSpans = hamBtn.querySelectorAll("span");
let mainNav = document.querySelector("#main_nav");
let navLinks = mainNav.querySelectorAll("a");
let sliderToTop = document.querySelector("#scrollToTop");

// toggle the navigation #########################
hamBtn.addEventListener("click", toggle);
mobileNavBackground.addEventListener("click", toggle);
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // prevent add the show class in Desktop Mode
    if (window.innerWidth < 876) {
      toggle();
    }
    let TargetSecHeight = body.querySelector(
      link.attributes[0].value
    ).offsetTop;
    window.scrollTo({ top: TargetSecHeight, left: 0, behavior: "smooth" });
  });
});
// toggle function
function toggle() {
  mainNav.classList.toggle("show");
  mobileNavBackground.classList.toggle("show");
  hamBtnSpans.forEach((span) => {
    span.classList.toggle("clicked");
  });
}
// ###############################################

// scroll the page to the top /TOGGLE THE NAVBAR IN DESKTOP MODE ######################
let lastYPos = 0;
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
  // hide the header in Desktop mode
  if (currentScrollPos > 200) header.classList.add("hide");
  // show the header in Desktop mode
  if (currentScrollPos < lastYPos) header.classList.remove("hide");
  // save the last position
  lastYPos = currentScrollPos;
}
// ##################################################
