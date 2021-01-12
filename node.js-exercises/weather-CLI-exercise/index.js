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
		console.log(res.data);
	})
	.catch((err) => console.log(err));
