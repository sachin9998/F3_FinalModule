let city = document.querySelector("#city");
let button = document.querySelector("#button");

button.addEventListener("click", fn);
let cities = [];
function fn() {
  let curr = city.value;
  console.log(curr);
  creatediv(curr);
  city.value = "";
}

let apikey = "9997dac2d837752f990c600fb9568687";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function creatediv(city) {
  cities.push(city);
  let response = await fetch(apiUrl + city + `&appid=${apikey}`);
  let file = await response.json();
  console.log(file);
  createcard(file);
}
let container = document.querySelector(".container");
function createcard(file) {
  let card = document.createElement("div");
  card.classList.add("card");
  if (file.weather[0].description == "fog") {
    src = "img/Moon.png";
  } else if (file.weather[0].description == "mist") {
    src = "img/mist.png";
  } else if (file.weather[0].description == "haze") {
    src = "img/415.png";
  } else if (file.weather[0].description == "clear sky") {
    src = "img/base.png";
  } else if (file.weather[0].description == "broken clouds") {
    src = "img/Tornado.png";
  } else {
    src = "img/415.png";
  }

  card.innerHTML = `
      <div class="one o">
      <h1 class="temp white">${file.main.temp + "°"}</h1>
      <div class="box"><p class="mid white">${file.main.humidity + "°"},${
    file.main.pressure + "°"
  }</p>
          <h1 class="one1 white">${file.name}</h1>
      </div>
     </div>
     <div class="one pi">
      <img src=${src} alt="pic" class="img1 ">
      <h1 class="one2 white">${file.weather[0].description}</h1>
     </div>`;

  container.appendChild(card);
}
// fog , mist , haze , clear sky , scattered clouds , broken clouds , scattered clouds  ...
