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

  // function to call resetNav function and smooth scroll when a nav link is clicked

  function navLinks() {
    const navLinks = document.querySelectorAll("#nav a");
    navLinks.forEach((i) => {
      i.addEventListener("click", (e) => {
        const el = document.getElementById(e.target.getAttribute("linkHook"));
        resetNav();
        el.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

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

  // function for the get in touch buttons to reveal model
  function getInTouch() {
    const getInTouchBtn = document.querySelectorAll(".get-in-touch");
    const model = document.querySelector(".model");

    getInTouchBtn.forEach((i) => {
      i.addEventListener("click", () => {
        model.classList.add("model--show");
      });
    });

    const modeCloseBtn = document.querySelector(".model--close");
    modeCloseBtn.addEventListener("click", () => {
      model.classList.remove("model--show");
    });
  }

  // make header solid on scroll
  function headerScroll() {
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".header");
      const headerLogo = document.querySelector(".header--logo");
      if (window.scrollY > 0) {
        header.style.backgroundColor = "rgba(47, 85, 114, 0.95)";

        header.classList.add("header--justify-space-between");
        headerLogo.classList.add("header--logo-scale-down");
      } else {
        header.style.backgroundColor = "";
        header.classList.remove("header--justify-space-between");
        headerLogo.classList.remove("header--logo-scale-down");
      }
    });
  }

  headerScroll();
  hamburger();
  navLinks();
  revealOnScroll();
  getInTouch();
});
