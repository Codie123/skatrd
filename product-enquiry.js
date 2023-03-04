(function () {
  emailjs.init("FmTw3vk_Mi14SA1sA");
  console.log("hello friend");
})();

const button = document.querySelector(".submit");

const SERVICEID = "service_iqftjeu";
const TEMPLATEID = "template_yyouukd";

button.addEventListener("click", (e) => {
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
