var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "slipknot9966@gmail.com",
		pass: "99yMyMpusspuss66",
	},
});

var mailOptions = {
	from: "slipknot9966@gmail.com",
	to: "raafat.basheer@yahoo.com, iuliaasproiu@yahoo.com",
	subject: "Sending Email using Node.js",
	text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log("Email sent: " + info.response);
	}
});
