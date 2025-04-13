fetch(
	'https://api.openweathermap.org/data/2.5/weather?q=cancun,mx&units=metric&appid=fdcb705195fcb7c8bed32a59408837ae'
)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		console.log(data.main.temp);
		temperature.textContent =
			'Temperature: ' + data.main.temp + '\u00B0C';
		description.textContent =
			'Description: ' + data.weather[0].description;
        });

