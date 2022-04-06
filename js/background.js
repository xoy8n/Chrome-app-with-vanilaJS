const images = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

const quotebox = document.querySelector(".quote");

bgImage.src = `img/${chosenImage}`;

document.quotebox.appendChild(bgImage);
