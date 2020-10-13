// Global Variables
const nav = document.querySelector("#nav");
const hamburgerBtn = document.querySelector(".hamburger");

// Function to remove nav overlay and set hamburger icon to normal when a nav link is clicked
function resetNav() {
  nav.classList.remove("show-nav-mobile");
  hamburgerBtn.classList.remove("hamburger-cross");
}

export default resetNav;
