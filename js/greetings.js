"use strick";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector(".greeting-text span");

//뒤로가기 방지 코드
history.pushState(null, null, location.href);
window.onpopstate = function () {
  history.go(1);
};

// 1. input value를 local storage에 저장하기
function onLoginSubmit() {
  const usernameInput = loginInput.value;
  localStorage.setItem("username", usernameInput);
  paintGreeting(usernameInput);
}

// 2. local storage에서 get item 해오기
function paintGreeting(username) {
  greeting.innerText = `${username}님의 우주에 오신 것을 환영합니다.`;
}

savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
