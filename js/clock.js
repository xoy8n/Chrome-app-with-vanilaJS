const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  // 콘솔창이 아닌 화면에 보여지게 하기 위해 innerText를 사용
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// website가 로드 되자마자(로드되고 1초후를 기다리지 않고) 매초마다 실행
// getclock을 사용하지 않으면 새로고침하고 1초동안 00:00:00을 출력함
getClock();
// 매 초마다 새로운object를 만들고 있음
setInterval(getClock, 1000);
