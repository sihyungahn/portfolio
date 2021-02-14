const api = {
	key: "13b9cd09fbf09fdccb4a7caea4b31992",
	base:"https://api.openweathermap.org/data/2.5/",
	
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', serQuery);

function setQuery(evt) {
	if (evt.keyCode ==13) {
		getResults(searchbox.value);
		console.log(searchbox.value);
	}
}

function getResults (query) {
	fetch('${api.base}weather?q=${query}&units=metric&APPID=${api.key}')
	.then(weather => {
		return weather.json();
	}).then(displayResults);
}

function displayResults (weather) {
	console.log(weather);
}