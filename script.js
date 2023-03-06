const nav = document.querySelector(".header");
const body = document.body;
const main = document.querySelector("main");

const sizes = document.querySelectorAll(".size");
const productSize = document.querySelector("#prSize");
const items = document.querySelectorAll(".items");
const card = document.querySelectorAll(".card");
let activeBtn = "carved";

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

// categories
function resetActive() {}
function showActive(newmenubtn) {
  activeBtn = newmenubtn;
  card.forEach((card) => {
    if (card.classList.contains(activeBtn)) {
      card.style.display = "flex";
    } else if (activeBtn == "all") {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
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
