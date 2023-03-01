const nav = document.querySelector(".header");
const body = document.body;
const main = document.querySelector("main");

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
    } else {
      card.style.display = "none";
    }
  });
}
// ends
