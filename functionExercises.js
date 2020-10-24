// !The Farm Problem

// const legsCounter = (chickens, cows, pigs) => {
//     let chickensLegs = chickens * 2;
//     let cowsLegs = cows * 4;
//     let pigsLegs = pigs * 4;
//     return chickensLegs + cowsLegs + pigsLegs;
// };
// console.log(legsCounter(2, 3, 5));
// console.log(legsCounter(1, 2, 3));
// console.log(legsCounter(5, 2, 8));

// !Convert Hours and Minutes into Seconds

// const timeToSecond = (hours, minutes) => {
//     let hourToSecond = hours * 3600;
//     let minuteToSecond = minutes * 60;
//     return hourToSecond + minuteToSecond;
// };
// console.log(timeToSecond(2, 45));

const SecondConverter = (second) => {
	let hours = Math.floor(second / 3600);
	let minutes = Math.floor((second % 3600) / 60);
	let seconds = Math.floor((second % 3600) % 60);
	let hourDisplay =
		hours > 0 ? hours + (hours == 1 ? "hour, " : "hours, ") : "";
	let minuteDisplay =
		minutes > 0 ? minutes + (minutes == 1 ? "minute, " : "minutes, ") : "";
	let secondDisplay =
		seconds > 0 ? seconds + (seconds == 1 ? "second, " : "seconds, ") : "";
	return `${hourDisplay} ${minuteDisplay} ${secondDisplay}`;
};

console.log(SecondConverter(3000001));

function seconds_to_days_hours_mins_secs(seconds) {
	// day, h, m and s
	var days = Math.floor(seconds / (24 * 60 * 60));
	seconds -= days * (24 * 60 * 60);
	var hours = Math.floor(seconds / (60 * 60));
	seconds -= hours * (60 * 60);
	var minutes = Math.floor(seconds / 60);
	seconds -= minutes * 60;
	return days + "d, " + hours + "h, " + minutes + "m, " + seconds + "s";
}
console.log(seconds_to_days_hours_mins_secs(3000090));
