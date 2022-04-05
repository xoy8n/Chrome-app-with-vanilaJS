"use strick";

const API_KEY = "696aafc893ad3d047f07b3a9321a508e";

function getWeatherCurrent(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const city = document.querySelector(".weather-city #city");
      const weatherTemp = document.querySelector(".weather-temp #temp");
      const weatherIconImg = document.querySelector(".weather-icon #icon");
      const weatherMain = document.querySelector(".weather-main #main");

      const weatherIcon = data.weather[0].icon;
      const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

      city.innerText = data.name;
      weatherIconImg.setAttribute("src", weatherIconUrl);
      weatherMain.innerText = data.weather[0].main;
      weatherTemp.innerText = `${Math.floor(data.main.temp)}°`;
    });
}

const onGeoSuccess = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  getWeatherCurrent(currentUrl);
};
const onGeoError = () => {
  alert("지역을 찾을 수 없습니다.");
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
