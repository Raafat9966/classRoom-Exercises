let testWin;
function openWin() {
	let url = "./test.html";
	testWin = window.open(url, "test win", "width=200", "height=200");
	testWin.moveTo(500, 100);
	testWin.focus();
}

function closeWin() {
	testWin.close();
}
