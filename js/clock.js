"use strick";

const hoursClock = document.querySelector(".hours span");
const minutesClock = document.querySelector(".minutes span");
const secondsClock = document.querySelector(".seconds span");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  hoursClock.innerText = hours;
  minutesClock.innerText = minutes;
  secondsClock.innerText = seconds;
}

getClock();
setInterval(getClock, 1000);
