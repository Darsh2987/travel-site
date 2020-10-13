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

export default headerScroll;
