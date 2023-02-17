const menu = document.querySelector(".ham-menu");
const mobileMenu = document.querySelector(".mb-nav");
menu.addEventListener("click", () => {
  let temp = false;
  if (menu.classList.contains("anime")) {
    temp = false;
    menu.classList.remove("anime");
  } else {
    temp = true;
    menu.classList.add("anime");
  }

  temp
    ? mobileMenu.classList.add("active")
    : mobileMenu.classList.remove("active");
});
