let calcArgs = process.argv.slice(2);
let [operationArgs, ...numbersArgs] = calcArgs;

const calculator = (() => {
	let arrayNumbers = numbersArgs.map((number) => parseInt(number));
	console.log(arrayNumbers);
	for (number of arrayNumbers) {
		if (isNaN(number)) {
			console.log(
				`Sorry, one of the arguments is not a number, please try again`
			);
			return;
		}
	}

	switch (operationArgs) {
		case "sum":
			console.log(arrayNumbers.reduce((acc, n) => acc + n, 0));
			break;
		case "avg":
			console.log(
				arrayNumbers.reduce((a, b) => a + b) / arrayNumbers.length
			);
			break;
		case "med":
			const mid = Math.floor(arrayNumbers.length / 2),
				nums = [...arrayNumbers].sort((a, b) => a - b);
			console.log(
				arrayNumbers.length % 2 !== 0
					? nums[mid]
					: (nums[mid - 1] + nums[mid]) / 2
			);
			break;
		default:
			console.log(
				"I cannot calculate that, please type either 'sum' (to calculate the sum) or 'avg' (To calculate the Average)"
			);
	}
})();
