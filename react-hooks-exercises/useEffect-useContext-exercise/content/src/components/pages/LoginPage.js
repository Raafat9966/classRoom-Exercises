import { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginPage({ loggedIn, setLoggedIn }) {
	const history = useHistory();

	const [data, setData] = useState({ name: "", password: "" });

	const handleLogin = (e) => {
		e.preventDefault();
		console.log(data);
		setLoggedIn(true);
		history.push("/products");
	};

	const handleLogout = () => {
		setLoggedIn(false);
		history.push("/");
	};

	return (
		<>
			<h1>Login</h1>

			{!loggedIn ? (
				<form onSubmit={handleLogin}>
					<label htmlFor="name">name</label>
					<input
						type="text"
						id="name"
						placeholder="name"
						required
						value={data.name}
						onChange={(e) =>
							setData({ ...data, name: e.target.value })
						}
					/>
					<br />

					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						placeholder="Password"
						required
						value={data.password}
						onChange={(e) =>
							setData({ ...data, password: e.target.value })
						}
					/>
					<br />

					<input type="submit" value="Log in" />
				</form>
			) : (
				<button onClick={handleLogout}>Log out</button>
			)}
		</>
	);
}

export default LoginPage;
