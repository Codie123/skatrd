(function () {
  emailjs.init("pgcuOi7rw3yaEw5Wn");
  console.log("hello friend");
})();

const button = document.querySelector(".submit");
// const toast = document.querySelector(".msg");
// const progress = document.querySelector(".progress");
// const close = document.querySelector(".toast-close");

const SERVICEID = "service_s3rl5yt";
const TEMPLATEID = "template_v04wpfe";

button.addEventListener("click", (e) => {
  e.preventDefault();
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
