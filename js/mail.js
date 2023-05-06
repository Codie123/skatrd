(function () {
  emailjs.init("pgcuOi7rw3yaEw5Wn");
})();

const button = document.querySelector(".submit");
const toast = document.querySelector(".cuz-toast");
const toastClose = document.querySelector(".close");

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
        activeToast(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
toastClose.addEventListener("click", () => {
  if (toast.classList.contains("active")) {
    toast.classList.remove("active");
  }
});
function activeToast(data) {
  console.log(data.status);
  if (data.status === 200) {
    toast.classList.add("active");
  } else {
    toast.classList.remove("active");
  }
}
