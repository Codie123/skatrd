const sizes = document.querySelectorAll(".size");
// const productSize = document.querySelector("#prSize");
const prName = document.querySelector(".pr-name");
const items = document.querySelectorAll(".items");
const card = document.querySelectorAll(".item");
let activeBtn = "carved";

// categories
items.forEach((x) => {
    showActive("all");
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
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    if (cat === "all") {
      x.style.display = "block";
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
    // productSize.value = e.target.dataset.size;
    // console.log(prName.innerHTML);
    generateLink(e.target.dataset.size, prName.innerHTML);
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

// connect on whatsapp
function generateLink(value, name) {
  const greetings = "Hello%20welcome%20to%20SKATRDCLUB%C2%AE%2C%0a";
  let productName = name.replaceAll(" ", "%20");

  let link = `https://api.whatsapp.com/send?phone=7592020811&text=${greetings}Product%20Name%3D${productName}%0aProduct%20Size%3D${value}%0aExtra 5%OFF`;
  // "https://api.whatsapp.com/send?phone=whatsappphonenumber&text=urlencodedtext"
  console.log(name);
  btnWhatsapp.setAttribute("href", `${link}`);
  console.log(link);
}
const btnWhatsapp = document.querySelector("#btn-app");

btnWhatsapp.addEventListener("click", (e) => {
  let activeSize = false;
  sizes.forEach((x) => {
    // let sizetemp = x.classList.contains("click").dataset.size;
    // console.log(sizetemp);
    if (x.classList.contains("click")) {
      activeSize = true;
    }
  });
  if (!activeSize) {
    alert("Please Select The Size ");
    e.preventDefault();
  }
});
// href="https://api.whatsapp.com/send/?phone=7592020811&amp;text=Hello welcome to skatrd , how can i help you?&amp;app_absent=0"
// ends
