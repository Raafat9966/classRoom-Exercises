import React from "react";

function Login({ setLogin, login }) {
	return (
		<div>
			<button
				onClick={() => {
					setLogin(!login);
				}}
			>
				{login ? "logout" : "login"}
			</button>
		</div>
	);
}

export default Login;
