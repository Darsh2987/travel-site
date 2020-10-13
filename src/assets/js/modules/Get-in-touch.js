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

export default getInTouch;
