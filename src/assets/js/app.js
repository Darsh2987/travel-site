import "../scss/imports.scss";

window.addEventListener("load", () => {
  // Global Variables
  const nav = document.querySelector("#nav");
  const hamburgerBtn = document.querySelector(".hamburger");

  // Function to remove nav overlay and set hamburger icon to normal when a nav link is clicked
  function resetNav() {
    nav.classList.remove("show-nav-mobile");
    hamburgerBtn.classList.remove("hamburger-cross");
  }

  // function to show nav overlay when hamburger icon is cliked
  function hamburger() {
    document.querySelector("#hamburger").addEventListener("click", () => {
      if (nav.classList.contains("show-nav-mobile")) {
        resetNav();
      } else {
        nav.classList.add("show-nav-mobile");
        hamburgerBtn.classList.add("hamburger-cross");
      }
    });
  }

  hamburger();
});
