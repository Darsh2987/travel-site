import resetNav from "./Reset-nav";

// function to show nav overlay when hamburger icon is cliked
function hamburger() {
  document.querySelector("#hamburger").addEventListener("click", () => {
    if (nav.classList.contains("show-nav-mobile")) {
      resetNav();
    } else {
      nav.classList.add("show-nav-mobile");
      document.querySelector(".hamburger").classList.add("hamburger-cross");
    }
  });
}

export default hamburger;
