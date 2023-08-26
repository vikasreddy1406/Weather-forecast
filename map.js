let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 19.0760, lng: 72.8777 }, // Default center at Mumbai
    zoom: 8,
  });

  map.addListener("click", (event) => {
    const { latLng } = event;
    const latitude = latLng.lat();
    const longitude = latLng.lng();

    fetchWeatherData(latitude, longitude);
  });
}

function fetchWeatherData(latitude, longitude) {
  const apiKey = "1396f5cd08350a1e523206659b685cab";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => displayWeatherData(data))
    .catch((error) => console.error("Error fetching weather data:", error));
}

function displayWeatherData(data) {
  const weatherDataElement = document.getElementById("weather-data");
  const LocationName=document.getElementById('LocationName')
  const Temp=document.getElementById('Temp')
  const description=document.getElementById('description')

  LocationName.innerHTML=data.name;
  Temp.innerHTML=data.main.temp;
  description.innerHTML=data.weather[0].description;

}


