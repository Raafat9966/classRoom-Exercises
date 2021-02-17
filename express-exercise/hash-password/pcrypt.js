import bcrypt from "bcrypt";

const password = "myStrongPassword";

// bcrypt.hash(password, 12).then((result) => {
// 	console.log(result);
// 	bcrypt
// 		.compare("myStrongPassword", result)
// 		.then((result) => console.log(result));
// });

// let hash = await bcrypt.hash(password, 12);
// let result = await bcrypt.compare("myStrongPassword", hash);
// console.log(result);

let hash = bcrypt.hashSync(password, 12);
let valid = bcrypt.compareSync("myStrongPassword", hash);
console.log({ valid });
