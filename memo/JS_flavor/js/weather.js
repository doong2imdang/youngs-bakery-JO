const weatherIcon = document.querySelector(".icon");
const weatherCity = document.querySelector(".city");
const minTemp = document.querySelector(".min");
const maxTemp = document.querySelector(".max");

const API_KEY = "7a6a90c96c3f2c1fd8fcfc41c610e8ff";

window.addEventListener("load", () => {
  navigator.geolocation.getCurrentPosition(success, fail);
});

const success = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  getWeather(latitude, longitude);
};

const fail = () => {
  alert("좌표를 받아올 수 없음");
};

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      weatherCity.innerHTML = json.name.split("-")[0].trim();
      minTemp.innerHTML = Math.round(json.main.temp_min);
      maxTemp.innerHTML = Math.round(json.main.temp_max);

      const icon = json.weather[0].icon;
      const iconURL = `images/${icon}.png`;
      console.log(icon, iconURL);
      weatherIcon.setAttribute("src", iconURL);
    })
    .catch((error) => {
      alert(error);
    });
};
