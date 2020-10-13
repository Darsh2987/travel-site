// function to reveal mywork and projects items on scroll
function revealOnScroll() {
  let itemsToReveal = document.querySelectorAll(".feature, .testimonial");

  window.addEventListener("scroll", () => {
    itemsToReveal.forEach((el) => {
      let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100;
      if (scrollPercent < 75) {
        el.classList.add("reveal-item-is-visible");
      } else {
        el.classList.remove("reveal-item-is-visible");
      }
    });
  });
}

export default revealOnScroll;
