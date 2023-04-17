// const preloader = document.querySelector(".video");

// window.addEventListener("load", function () {
//   // preloader.setAttribute("autoplay", "");
// });

const view = document.querySelector(".view");
const preContainer = document.querySelector(".preloader");
window.addEventListener("load", () => {
  if (view.paused) {
    view.play();
    window.scrollTo(0, 0);
    setTimeout(close, 2600);
  } else {
    view.pause();
  }
  // console.log(view.paused);
});

function close() {
  console.log("Hello Friend ");
  preContainer.classList.add("anim-close");
}
