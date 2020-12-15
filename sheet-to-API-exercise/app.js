let table = document.querySelector("table");
const renderSheets = async () => {
	let respond = await fetch(
		"https://sheet2api.com/v1/G8m99f5BQ0uj/sheet-to-api/data-sheet"
	);
	let data = await respond.json();
	data.map((vol) => {
		table.innerHTML += `
      <tr>
        <td>${vol.Date}</td>
        <td>${vol.High}</td>
        <td>${vol.Low}</td>
        <td>${vol.Volume}</td>
      </tr>`;
	});
};
renderSheets();
