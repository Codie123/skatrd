const btn = document.querySelectorAll(".item");
const cards = document.querySelectorAll(".card");

btn.forEach((x) => {
  x.addEventListener("click", () => {
    console.log("clicked");
    update(x.id);

    btn.forEach((y) => {
      if (y.classList.contains("add")) {
        y.classList.remove("add");
      }
    });
    x.classList.add("add");
  });
});

function update(newCat) {
  console.log("inside the function ");
  cards.forEach((x) => {
    if (x.classList.contains(newCat)) {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }

    if (newCat === "all") {
      x.style.display = "flex";
    }
  });
}
