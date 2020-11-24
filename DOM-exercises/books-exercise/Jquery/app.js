import { books } from "../assets/js/index.js";

$(function () {
	let bookList = $(".book-list");
	books.forEach((val, i) => {
		let li = $("<li></li>");
		li.addClass("d-flex col-s-12 col-md-6 col-lg-3 p-3");
		let groupDiv = $("<div></div>");
		groupDiv.addClass("card");
		let bodyDiv = $("<div></div>");
		bodyDiv.addClass("card-body");
		let footerDiv = $("<div></div>");
		footerDiv.addClass("card-footer");
		let img = $("<img></img>");
		img.addClass("card-img-top");
		let title = $("<h5></h5>");
		title.addClass("card-title");
		let author = $("<p></p>");
		author.addClass("card-text");
		let read = $("<p></p>");
		let readyOrNot;
		const styleRead = (() => {
			if (val.alreadyRead) {
				read.addClass("badge-pill badge-success float-right");
				readyOrNot = "Read";
			} else {
				read.addClass("badge-pill badge-dark float-right");
				readyOrNot = "To read";
			}
		})();
		title.text(val.title);
		author.text(val.author.split(" ").reverse().join(", "));
		read.text(readyOrNot);
		img.attr("src", val.img);
		bookList.append(li);
		li.append(groupDiv);
		groupDiv.append(bodyDiv, footerDiv);
		bodyDiv.append(title, author);
		groupDiv.prepend(img);
		footerDiv.append(read);
		img.css({ width: "100%", height: "300px", border: "3px black solid" });
	});
	console.log(bookList);
});
