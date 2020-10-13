import "../scss/imports.scss";

import resetNav from "./modules/Reset-nav";
import hamburger from "./modules/Hamburger";
import navLinks from "./modules/Nav-links";
import getInTouch from "./modules/Get-in-touch";
import headerScroll from "./modules/Header-scroll";

window.addEventListener("load", () => {
  // // function to reveal mywork and projects items on scroll
  // function revealOnScroll() {
  //   let itemsToReveal = document.querySelectorAll(".projects__grid-item");

  //   window.addEventListener("scroll", () => {
  //     itemsToReveal.forEach((el) => {
  //       let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100;
  //       if (scrollPercent < 75) {
  //         el.classList.add("reveal-item-is-visible");
  //       } else {
  //         el.classList.remove("reveal-item-is-visible");
  //       }
  //     });
  //   });
  // }

  headerScroll();
  hamburger();
  navLinks();
  // revealOnScroll();
  getInTouch();
});
