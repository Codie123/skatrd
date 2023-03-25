const images = [
  { src: "./assets/Look-book/s424.jpg" },
  { src: "./assets/Look-book/s425.jpg" },
  { src: "./assets/Look-book/s426.jpg" },
  { src: "./assets/Look-book/s454.jpg" },
  { src: "./assets/Look-book/s455.jpg" },
  { src: "./assets/Look-book/band.jpg" },
  { src: "./assets/Look-book/flannel.jpg" },
  { src: "./assets/Look-book/STRIPE.jpg" },
  { src: "./assets/Look-book/fullsleeve.jpg" },
  { src: "./assets/Look-book/ov-zip-pocket.jpg" },
];

const imageContainer = document.querySelectorAll(".cuz-h");

imageContainer.forEach((x, id) => {
  x.src = `${images[id].src}`;
  // x.style.backgroundImage = `url(${images[id].src})`;
});
