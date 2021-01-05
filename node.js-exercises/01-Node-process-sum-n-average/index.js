let calcArgs = process.argv.slice(2);
let operationArgs = calcArgs[0];
let numbersArgs = calcArgs.slice(1);
let arrayNumbers = numbersArgs.map((number) => parseInt(number));
console.log(arrayNumbers);
const calculator = (operation, numbers) => {
	for (number of numbers) {
		if (isNaN(number)) {
			console.log(
				`Sorry, one of the arguments is not a number, please try again`
			);
			return;
		}
	}

	switch (operation) {
		case "sum":
			console.log(numbers.reduce((acc, n) => acc + n, 0));
			break;
		case "avg":
			console.log(numbers.reduce((a, b) => a + b) / numbers.length);
			break;
		case "med":
			const mid = Math.floor(numbers.length / 2),
				nums = [...numbers].sort((a, b) => a - b);
			console.log(
				numbers.length % 2 !== 0
					? nums[mid]
					: (nums[mid - 1] + nums[mid]) / 2
			);
			break;
		default:
			console.log(
				"I cannot calculate that, please type either 'sum' (to calculate the sum) or 'avg' (To calculate the Average)"
			);
	}
};
calculator(operationArgs, arrayNumbers);
