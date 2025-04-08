
document.addEventListener("DOMContentLoaded", function () {
    const weatherDiv = document.getElementById("weather");

    fetch("https://api.openweathermap.org/data/2.5/weather?=Cancun,mx&units=metric&appid=b27e347d23bffe25cce17b6c063c8a99")
      .then(response => response.json())
      .then(data => {
        const temp = Math.round(data.main.temp);
        const condition = data.weather[0].main;
        weatherDiv.textContent = `Cancún: ${temp}°C, ${condition}`;
      })
      .catch(() => {
        weatherDiv.textContent = "Weather info unavailable";
      });
  });
