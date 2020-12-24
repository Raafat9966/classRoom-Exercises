import { View } from "./view.js";
import { Client } from "./apiCall.js";

let api = new Client();
let showMovies = new View();

let searchInput = $("#input");
let movieStorage = new Set();

window.onload = () => {
	if (JSON.parse(localStorage.getItem("moviesList")) != null) {
		JSON.parse(localStorage.getItem("moviesList")).forEach((movie) =>
			showMovies.displayMovieOnPage(JSON.parse(movie))
		);
	}
};

searchInput.on("keypress", async (e) => {
	if (e.which == 13) {
		let movies = await api.getMovieData(e.target.value);
		if (movieStorage.has(JSON.stringify(movies))) {
			alert("the movie is already added");
		}
		movieStorage.add(JSON.stringify(movies));
		$(".movies").empty();
		movieStorage.forEach((movie) =>
			showMovies.displayMovieOnPage(JSON.parse(movie))
		);
	}
});

$(".btn-save").on("click", () => {
	localStorage.setItem("moviesList", JSON.stringify([...movieStorage]));
});

$(".btn-reset").on("click", () => {
	localStorage.clear();
	movieStorage.clear();
	$(".movies").empty();
});
