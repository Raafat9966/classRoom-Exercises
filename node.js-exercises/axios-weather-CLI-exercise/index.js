const fs = require("fs");
const path = require("path");
const axios = require("axios");

let API_key = "80be18e54f8ac0910f0fb43798263427";
let city = "berlin";
const option = {
	url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`,
	method: "get",
};

axios(option)
	.then((res) => {
		let temp = (res.data.main.temp / 32).toFixed(2);
		console.log(
			`It is now ${temp}°C in ${city}, DE. The current weather conditions are: ${res.data.weather[0].description}`
		);
	})
	.catch((err) => console.log(err));
