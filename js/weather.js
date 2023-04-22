const API_KEY = "e70bc2431f2c4ffb506b4c9ee413ccf2";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  //API呼び出しURL
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  //API呼び出し
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //Iconコード
      const weatherIconCode = data.weather[0].icon;

      //HTML Element
      const city = document.querySelector("#weather span:first-child");
      const weatherIcon = document.querySelector("#weather span:nth-child(2)");
      const weather = document.querySelector("#weather span:last-child");

      //HTML ElementへAPI
      city.innerText = data.name;
      weatherIcon.innerHTML = `<img src="./img/icons/${weatherIconCode}.png">`;
      weather.innerText = `${Math.floor(data.main.temp)}℃`;
    });
}
function onGeoError() {
  alert("Can't fine you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
