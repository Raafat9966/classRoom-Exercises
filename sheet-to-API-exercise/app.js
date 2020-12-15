let table = document.querySelector("table");
const renderSheets = async () => {
	let respond = await fetch(
		"https://sheet2api.com/v1/G8m99f5BQ0uj/sheet-to-api/data-sheet"
	);
	let data = await respond.json();
	data.map((val) => {
		table.innerHTML += `
      <tr>
        <td>${val.Date}</td>
        <td>${val.High}</td>
        <td>${val.Low}</td>
        <td>${val.Volume}</td>
      </tr>`;
	});
};
renderSheets();
