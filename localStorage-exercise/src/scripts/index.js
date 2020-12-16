import { View } from "./view.js";
import { Client } from "./apiCall.js";

let api = new Client();
let showMovies = new View();

let searchInput = $("#input");
let movieStorage = new Set();

// window.onload = () => {
// 	if (JSON.parse(localStorage.getItem("moviesList")).length > 0) {
// 		JSON.parse(localStorage.getItem("moviesList")).forEach((movie) => {
// 			showMovies.displayMovieOnPage(movie);
// 		});
// 	}
// };

searchInput.on("keypress", async (e) => {
	if (e.which == 13) {
		let movies = await api.getMovieData(e.target.value);

		console.log(movies);

		movieStorage.add(movies);
		for (let movie of movieStorage) {
			console.log(movieStorage);
			showMovies.displayMovieOnPage(movie);
		}
	}
});

$(".btn-save").on("click", () => {
	console.log([...movieStorage]);
	localStorage.setItem("moviesList", [...movieStorage]);
	//console.log(JSON.parse(localStorage.getItem("moviesList")));
});

$(".btn-reset").on("click", () => {
	localStorage.clear();
	movieStorage.clear();
	$(".movies").empty();
});
