export default function Home({ login }) {
	return (
		<div>
			<h1>{login ? "logged in" : "logged out"}</h1>
		</div>
	);
}
