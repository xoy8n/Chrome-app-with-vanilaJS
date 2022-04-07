// const images = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// const quotebox = document.querySelector(".quote");

// bgImage.src = `img/${chosenImage}`;

// document.quotebox.appendChild(bgImage);

const imgBox = document.querySelector(".quote");

function random() {
  let images = [],
    index = 0;

  images[0] = "img/bg1.jpg";
  images[1] = "img/bg2.jpg";
  images[2] = "img/bg3.jpg";
  images[3] = "img/bg4.jpg";

  index = Math.floor(Math.random() * images.length);
  imgBox.style.background = `url('${images[index]}') no-repeat center center / cover`;
}

setInterval(random, 5000);
