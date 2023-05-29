// size chart
const chart = document.querySelector(".chart");
const chartClose = document.querySelector(".close-btn");
const sizeContainer = document.querySelector(".size-container");
chart.addEventListener("click", () => {
  sizeContainer.classList.add("show");
  document.body.style.overflow = "hidden";
});
chartClose.addEventListener("click", () => {
  sizeContainer.classList.remove("show");
  document.body.style.overflow = "scroll";
});
// ends
