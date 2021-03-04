import { useState } from "react";

function Login(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		props.setIsLogin(true);
		props.setDetails({ name, email });
	};
	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">name</label>
				<input
					type="text"
					id="name"
					name="name"
					value={name}
					onChange={handleName}
				/>
				<label htmlFor="email">email</label>
				<input
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={handleEmail}
				/>
				<button type="submit">submit</button>
			</form>
		</div>
	);
}

export default Login;
