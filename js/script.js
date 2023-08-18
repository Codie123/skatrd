const sizes = document.querySelectorAll(".size");
// const productSize = document.querySelector("#prSize");
const prName = document.querySelector(".pr-name");
const items = document.querySelectorAll(".items");
const card = document.querySelectorAll(".item");

let activeBtn = "carved";
showActive("all");

// categories
items.forEach((x) => {
  if (x.classList.contains("add")) {
    showActive(x.id);
  }
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
    // generateLink(e.target.dataset.size, prName.innerHTML);
  });
});
// ends

// customized hamburger
const head = document.querySelector(".header");
const hamMenu = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar");
// window.addEventListener("scroll", () => {
//   if (scrollY > 100) {
//     head.classList.add("v-none");
//   } else if (scrollY < 100) {
//     head.classList.remove("v-none");
//   }
// });
// hamMenu.addEventListener("click", () => {
//   if (navbar.classList.contains("black")) {
//     navbar.classList.remove("black");
//   } else {
//     navbar.classList.add("black");
//   }
// });
// ends
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

function generateLink() {
  const greetings = "Hello%20welcome%20to%20SKATRDCLUB%C2%AE%2C%0a";
  let productName = prName.innerHTML.replaceAll(" ", "%20");
  let code = coupon.value;
  let selectedSize = [];
  const cp1 = "munz10";

  sizes.forEach((x) => {
    if (x.classList.contains("click")) {
      selectedSize.push(x.dataset.size);
    }
  });

  console.log(selectedSize);
  let link = `https://api.whatsapp.com/send?phone=7592020811&text=${greetings}Product%20Name%3D${productName}%0aProduct%20Size%3D
  ${!selectedSize ? "Size%20Not%20Found" : selectedSize}${
    code != cp1 ? "" : `%0aDiscount%20Code%3d${code}`
  }`;
  // "https://api.whatsapp.com/send?phone=whatsappphonenumber&text=urlencodedtext"
  // console.log(name);
  // btnWhatsapp.setAttribute("href", `${link}`);
  return link;
}

const btnWhatsapp = document.querySelector("#btn-app");
const coupon = document.querySelector(".coupon");
const cpContainer = document.querySelector(".cp-container");
const cpBtn = document.querySelector(".check-btn");
if (coupon) {
  coupon.addEventListener("keyup", (e) => {
    if (!e.target.value) {
      cpContainer.classList.remove("vrf");
      cpContainer.classList.remove("err");
    }
  });

  cpBtn.addEventListener("click", () => {
    const cp1 = "MUNZ10";
    let temp = coupon.value.toUpperCase();

    if (temp === cp1) {
      if (cpContainer.classList.contains("err")) {
        cpContainer.classList.remove("err");
      }
      cpContainer.classList.add("vrf");
    } else {
      if (cpContainer.classList.contains("vrf")) {
        cpContainer.classList.remove("vrf");
      }
      cpContainer.classList.add("err");
    }

    // console.log(e.target.value);
  });
  btnWhatsapp.addEventListener("click", (e) => {
    e.preventDefault();
    let target = generateLink();
    // console.log(target);
    // location.href = target;
    window.open(target, "_blank");
  });
}

// ends

// creating session for user experience

// ends
