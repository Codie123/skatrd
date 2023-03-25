(function () {
  emailjs.init("pgcuOi7rw3yaEw5Wn");
  console.log("hello friend");
})();

const button = document.querySelector(".submit");

const SERVICEID = "service_s3rl5yt";
const TEMPLATEID = "template_gfxj3mi";

button.addEventListener("click", (e) => {
  e.preventDefault();
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    product: document.getElementById("product").value,
    size: document.getElementById("prSize").value,

    message: document.getElementById("message").value,
  };
  console.log(params);
  emailjs
    .send(SERVICEID, TEMPLATEID, params)
    .then((res) => {
      (document.getElementById("name").value = ""),
        (document.getElementById("email").value = ""),
        // (document.getElementById("size").value = ""),
        (document.getElementById("message").value = ""),
        console.log(res);
      //   toastActive();
    })
    .catch((err) => {
      console.log(err);
    });
});
