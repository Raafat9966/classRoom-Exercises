import "./App.css";
import { useState } from "react";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import Products from "./components/pages/Products";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import ProductsProvider from "./context/ProductsProvider";

function App() {
	const [loggedIn, setLoggedIn] = useState(true);

	const ProtectedRoute = (props) => {
		if (!loggedIn) return <Redirect to="/login" />;
		return <Route {...props} />;
	};
	return (
		<div className="App">
			<Router>
				<Header />
				<ProductsProvider>
					<Switch>
						<Route path="/" component={HomePage} exact />
						<Route
							path="/login"
							component={() =>
								LoginPage({ loggedIn, setLoggedIn })
							}
						/>
						<ProtectedRoute
							path="/products"
							component={Products}
							exact
						/>
						<Route component={() => <h1>404 - Not Found</h1>} />
					</Switch>
				</ProductsProvider>
			</Router>
		</div>
	);
}

export default App;
