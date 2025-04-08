
const apiKey = "fdcb705195fcb7c8bed32a59408837ae"; // Replace with your OpenWeatherMap API key
const city = "Cancun,mx";
const url = `https://api.openweathermap.org/data/2.5/weather?q=cancun,mx&units=metric&appid=fdcb705195fcb7c8bed32a59408837ae`;

fetch(url)
.then(response => response.json())
.then(data => {
    const temp = Math.round(data.main.temp);
    const wind = Math.round(data.wind.speed);
    const weatherBox = document.getElementById("weather");
    weatherBox.textContent = `${temp}°C | Wind: ${wind} kph`;
})
.catch(() => {
      document.getElementById("weather").textContent = "Weather unavailable";
});

