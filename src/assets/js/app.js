import "../scss/imports.scss";

import resetNav from "./modules/Reset-nav";
import hamburger from "./modules/Hamburger";
import navLinks from "./modules/Nav-links";
import getInTouch from "./modules/Get-in-touch";
import headerScroll from "./modules/Header-scroll";
import revealOnScroll from "./modules/Reveal-on-scroll";

window.addEventListener("load", () => {
  headerScroll();
  hamburger();
  navLinks();
  revealOnScroll();
  getInTouch();
});
