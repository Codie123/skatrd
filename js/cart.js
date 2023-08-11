const cartBt = document.querySelectorAll("#cart-btn");
const cartClose = document.querySelector(".cart-close");
const cartMenu = document.querySelector(".cart-container");

// product details
const pr = document.querySelector(".pr-name");
const sz = document.querySelectorAll(".size");
const price = document.querySelector(".price");
const prImg = document.querySelector(".prImg");

// ends

// whatsApp
const whatsApp = document.querySelector("#btn-app");
// ends

const cartItemContainer = document.querySelector(".cart-item");
const cartParent = document.querySelector(".cart-checkout");

// initialization ends here......

// event for id updation
window.addEventListener("load", (e) => {
  console.log("page loaded");
  updateId();
});
// ends
// cart btn event
cartBt.forEach((x) => {
  x.addEventListener("click", (e) => {
    e.preventDefault();

    cartMenu.classList.add("show");
    updateCart();
  });
});
// ends

// close btn event
cartClose.addEventListener("click", () => {
  cartMenu.classList.remove("show");

  sz.forEach((x) => {
    if (x.classList.contains("click")) {
      x.classList.remove("click");
    }
  });
  cartItemContainer.innerHTML = "";
});

// close ends

// size event
let counter = 0;
sz.forEach((x) => {
  x.addEventListener("click", (e) => {
    let name = pr.innerHTML;
    let value = price.dataset.price;
    let size = x.classList.contains("click")
      ? x.dataset.size
      : console.log("not  found");

    // id bugfix

    // if (localData) {
    //   console.log("data found");
    // } else {
    //   console.log("data not found");
    // }
    // ends

    let img = prImg.getAttribute("src");
    generateCart(name, value, size, img);
    generateLink(e.target.dataset.size, prName.innerHTML);
  });
});
// ends

// generate function

function generateCart(name, value, size, img) {
  counter++;
  const items = (() => {
    const fieldValue = localStorage.getItem("cart");
    return fieldValue === null ? [] : JSON.parse(fieldValue);
  })();

  items.push({
    id: counter,
    name: name,
    price: value,
    size: size,
    img: img,
  });

  localStorage.setItem("cart", JSON.stringify(items));
}
// ends

function updateCart() {
  let dataLocal = JSON.parse(localStorage.getItem("cart"));

  for (let i = 0; i < dataLocal.length; i++) {
    const div = document.createElement("div");
    const totalEle = document.querySelector(".total");

    div.classList.add("item");

    div.setAttribute("data-id", `${dataLocal[i].id}`);

    div.innerHTML = `
      <div class="item-img">
          <img src= ${dataLocal[i].img} alt="" />
      </div>
      <div class="item-desc">
          <h3>${dataLocal[i].name}</h3>
          <div class="item-size">
              <span class="">Size: ${dataLocal[i].size}</span>
          </div>
          <p class="cart-price">${dataLocal[i].price}</p>
      </div>
      <div class="item-rm"><i class="fa-solid fa-xmark"></i></div>
      `;

    // totalEle.innerHTML = ` `;

    cartItemContainer.appendChild(div);
    // cartParent.appendChild(totalEle);
  }
  const updatedPrice = document.querySelectorAll(".cart-price");
  let subTotal = 0;
  let temp = [];
  updatedPrice.forEach((x) => {
    temp.push(parseInt(x.innerHTML));
    subTotal += parseInt(x.innerHTML);
  });

  // remove item starts
  const removeItem = document.querySelectorAll(".item-rm");
  removeItem.forEach((x) => {
    x.addEventListener("click", (e) => {
      let rmId = e.target.parentElement.parentElement.dataset.id;
      let itemEle = e.target.parentElement.parentElement;
      let currentData = JSON.parse(localStorage.getItem("cart"));
      let filtered = currentData.filter((item) => item.id !== parseInt(rmId));
      // item.id !== rmId

      localStorage.setItem("cart", JSON.stringify(filtered));
      itemEle.remove();
    });
  });
  // ends here

  // total price
  updateTotal(temp);

  // ends
}

function generateLink(value, name) {
  const greetings = "Hello%20welcome%20to%20SKATRDCLUB%C2%AE%2C%0a";
  let productName = name.replaceAll(" ", "%20");

  let link = `https://api.whatsapp.com/send?phone=7592020811&text=${greetings}Product%20Name%3D${productName}%0aProduct%20Size%3D${value}%0aExtra 5%OFF`;
  // "https://api.whatsapp.com/send?phone=whatsappphonenumber&text=urlencodedtext"

  btnWhatsapp.setAttribute("href", `${link}`);
}

function updateId() {
  let localData = JSON.parse(localStorage.getItem("cart"));
  if (localData) {
    for (let i = 0; i < localData.length; i++) {
      let lastEle = localData.length - 1;

      counter = localData[lastEle].id;
    }
    console.log(`Counter value  = ${counter}`);
  } else {
    counter = 0;
  }
}

// total calculation
function updateTotal(data) {
  const myRequest = "../js/coupon.json";
  let crtCp;
  fetch(myRequest)
    .then((response) => response.json())
    .then((data) => {
      crtCp = data;
      // console.log(crtCp);
    });

  const sellingPr = document.querySelector(".Selling-price");
  const discountPr = document.querySelector(".discount-code");
  const totalPr = document.querySelector(".total");
  const couponCode = document.querySelector(".coupon");
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  sellingPr.innerHTML = sum;
  if (couponCode.value) {
    discountPr.innerHTML = couponCode.value;
  } else {
    discountPr.innerHTML = "No Coupon Code";
  }
  console.log(crtCp);
}
// ends
