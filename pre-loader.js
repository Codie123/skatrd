const view = document.querySelector(".view");
const preContainer = document.querySelector(".preloader");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(close, 2600);
});
function close() {
  preContainer.classList.add("anim-close");
}
