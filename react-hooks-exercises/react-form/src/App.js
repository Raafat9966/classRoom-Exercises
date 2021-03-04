import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
	const [isLogin, setIsLogin] = useState(false);
	const [details, setDetails] = useState({});
	return (
		<div className="App">
			<Router>
				<Header isLogin={isLogin} details={details} />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login">
						<Login
							setIsLogin={setIsLogin}
							setDetails={setDetails}
						/>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
