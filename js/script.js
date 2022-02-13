let hamBtn = document.querySelector("#hamburger_btn");
let hamBtnSpans = hamBtn.querySelectorAll("span");
let mainNav = document.querySelector("#main_nav");
let navLinks = mainNav.querySelectorAll("a");
console.log(navLinks);

// toggle the navigation
hamBtn.addEventListener("click", toggle);
navLinks.forEach((link) => {
  link.addEventListener("click", toggle);
});

// toggle function
function toggle() {
  mainNav.classList.toggle("show");
  hamBtnSpans.forEach((span) => {
    span.classList.toggle("clicked");
  });
}
