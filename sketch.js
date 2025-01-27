let currentTemp, dayNight, snowFall, cloudCover, windSpeed;
let weather_api = "https://api.open-meteo.com/v1/forecast?latitude=39.1422&longitude=117.1767&current=temperature_2m,is_day,snowfall,cloud_cover,wind_speed_10m&forecast_days=1"
let Tianjin;
let Moon;
let Sun;
let Snow;
let Cloud;

function preload(){
  Tianjin = loadImage('images/Tianjin.jpg');
  Moon = loadImage('images/Moon.png');
  Sun = loadImage('images/Sun.png');
  Snow = loadImage('images/Snow.gif');
  Cloud = loadImage('images/Cloud.png');
}

async function getWeather(){
  let data = await fetch(weather_api);
  let j_data = await data.json();
  currentTemp = j_data.current.temperature_2m;
  dayNight = j_data.current.is_day;
  snowFall = j_data.current.snowfall;
  cloudCover = j_data.current.cloud_cover;
  windSpeed = j_data.current.wind_speed_10m
}

function setup() {
  createCanvas(800, 600);
  noFill();
  strokeWeight(8);
  rect(0, 0, 800, 600);

  getWeather();
}

function draw() {
  image(Tianjin, 20, 20, 760, 560);
  fill(255);
  textSize(18);
  text("Current tempreture is: " + currentTemp + "°C", 40, 540);
  // text("Day or night? " + dayNight, 20, 260);
  // text("Snow fall? " + snowFall, 20, 280);
  text("Cloud cover: " + cloudCover + "%", 40, 520);
  text("Wind speed: " + windSpeed + "km/h", 40, 560);
  text("China, Tianjin", 40, 500);

  if(dayNight == 0){
    image(Moon, 50, 30, 120, 120);
  } else {
    image(Sun, 50, 30, 120, 120);
  }

  if(snowFall == 0){
  } else {
    image(Snow, 20, 20, 760, 560);
  }
  
  if(cloudCover > 50){
    image(Cloud, 100, 40, 300, 0);
    image(Cloud, 360, 0, 400, 300);
  } else {
  }
}
