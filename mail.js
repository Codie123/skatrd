(function () {
  emailjs.init("FmTw3vk_Mi14SA1sA");
  console.log("hello friend");
})();

const button = document.querySelector(".submit");
// const toast = document.querySelector(".msg");
// const progress = document.querySelector(".progress");
// const close = document.querySelector(".toast-close");

const SERVICEID = "service_iqftjeu";
const TEMPLATEID = "template_vzqoc8x";

button.addEventListener("click", (e) => {
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send(SERVICEID, TEMPLATEID, params)
    .then((res) => {
      (document.getElementById("name").value = ""),
        (document.getElementById("email").value = ""),
        (document.getElementById("message").value = ""),
        console.log(res);
      //   toastActive();
    })
    .catch((err) => {
      console.log(err);
    });
});

// function toastActive() {
//   toast.classList.add("active");
//   progress.classList.add("active");

//   setTimeout(() => {
//     toast.classList.remove("active");
//   }, 5000);

//   setTimeout(() => {
//     progress.classList.remove("active");
//   }, 5300);
// }
// close.addEventListener("click", () => {
//   toast.classList.remove("active");

//   setTimeout(() => {
//     progress.classList.remove("active");
//   }, 300);
// });
