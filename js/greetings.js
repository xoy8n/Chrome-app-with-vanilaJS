const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//string만 포함된 변수는 대문자로 작성!
const HIDDEN_CLASSNAME = "hidden";
// 이렇게 string을 변수명으로 작성해야 자바스크립트는 오류를 지적해주므로 const 지정!!
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // 1. event가 하는 행동을 멈춤 (페이지 새로고침을 막아줌)
  loginForm.classList.add(HIDDEN_CLASSNAME); //2. form을 다시 숨겨줌
  const username = loginInput.value; // 3. loginInput.value를 username이라는 변수로 저장
  localStorage.setItem(USERNAME_KEY, username); // 4. username 값을 username이라는 key와 함께 local storage에 저장
  paintGreetings(username); //5. paintgreetings 함수를 호출(username이라는 하나의 인자를 받음)
}

//greeting.innerText = `Hello ${savedUsername}`; greeting.classList.remove(HIDDEN_CLASSNAME);가 반복되므로 paintGreetings 함수를 만들어서 반복을 줄여줌
function paintGreetings(username) {
  //1. paintgreetings는 username이라는 하나의 인자를 받음
  greeting.innerText = `Hello ${username}`; //2. 비어있는 h1 요소 안에 `Hello${username}`이라는 텍스트를 추가
  greeting.classList.remove(HIDDEN_CLASSNAME); //3. h1요소로부터 "hidden"이라는 클래스명을 제거
}

// savedUsername은 null이거나 nico이다.
const savedUsername = localStorage.getItem(USERNAME_KEY);

//form과 h1 모두 hidden이라는 class를 가지고 시작하기 때문에 savedusername이 null이라면 form의 hiddenclass명을 지워줄것이다.
//nico를 입력하게 되면 if는 거짓이 되므로 els
if (savedUsername === null) {
  //localstorage에 유저정보가 없을 때 show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //localstorage에 유저정보가 있을 때 show the greetings
  paintGreetings(savedUsername);
}
