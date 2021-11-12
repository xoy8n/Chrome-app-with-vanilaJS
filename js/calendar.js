"use strick";

const calendarText = document.querySelector(".calendar span");

function getCalendar() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", {
    weekday: "long",
  });
  calendarText.innerText = `오늘은 ${dateString} ${dayName}입니다.`;
}

getCalendar();
