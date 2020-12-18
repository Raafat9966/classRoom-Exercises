import { View } from "./view.js";
import { Client } from "./apiCall.js";

let api = new Client();
let showMovies = new View();

let searchInput = $("#input");
let movieStorage = new Set();

// window.onload = () => {
// 	console.log(JSON.parse(localStorage.getItem("moviesList")));
// 	if (localStorage.getItem("movieList") != null) {
// 		movieStorage = [
// 			...new Set(JSON.parse(localStorage.getIte("moviesList"))),
// 		];
// 		movieStorage.forEach((movie) => showMovies.displayMovieOnPage(movie));
// 	}
// 	console.log(movieStorage);
// 	// JSON.parse(localStorage.getItem("moviesList")).forEach((movie) => {
// 	// 	showMovies.displayMovieOnPage(movie);
// 	// });
// };

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
	console.log(movieStorage);
	localStorage.setItem("moviesList", JSON.stringify([...movieStorage]));
	console.log(JSON.parse(localStorage.getItem("moviesList")));
});

$(".btn-reset").on("click", () => {
	localStorage.clear();
	movieStorage.clear();
	$(".movies").empty();
});
