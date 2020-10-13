import resetNav from "./Reset-nav";

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

export default navLinks;
