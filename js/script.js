const sizes = document.querySelectorAll(".size");
const productSize = document.querySelector("#prSize");
const items = document.querySelectorAll(".items");
const card = document.querySelectorAll(".item-inner");
let activeBtn = "carved";

// categories
items.forEach((x) => {
  x.addEventListener("click", () => {
    showActive(x.id);
    items.forEach((y) => {
      if (y.classList.contains("add")) {
        y.classList.remove("add");
      }
    });
    x.classList.add("add");
  });
});
function showActive(cat) {
  console.log(cat);
  card.forEach((x) => {
    if (x.classList.contains(cat)) {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
    if (cat === "all") {
      x.style.display = "flex";
    }
  });
}

// ends

// product inner page
sizes.forEach((x) => {
  x.addEventListener("click", (e) => {
    sizes.forEach((y) => {
      if (y.classList.contains("click")) {
        y.classList.remove("click");
      }
    });
    e.target.classList.add("click");
    productSize.value = e.target.dataset.size;
  });
});
// ends

// customized hamburger
const head = document.querySelector(".header");
const hamMenu = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (scrollY > 100) {
    head.classList.add("v-none");
  } else if (scrollY < 100) {
    head.classList.remove("v-none");
  }
});
hamMenu.addEventListener("click", () => {
  if (navbar.classList.contains("black")) {
    navbar.classList.remove("black");
  } else {
    navbar.classList.add("black");
  }
});

// films

// ends
// product listing page categories
// const categorybtn = document.querySelector(".ct-menu-btn");
// const categoriesMenu = document.querySelector(".categories");
// categorybtn.addEventListener("click", () => {
//   console.log("hello found you ");
//   if (categoriesMenu.classList.contains("op")) {
//     categoriesMenu.classList.remove("op");
//   } else {
//     categoriesMenu.classList.add("op");
//   }
// });
// ends
