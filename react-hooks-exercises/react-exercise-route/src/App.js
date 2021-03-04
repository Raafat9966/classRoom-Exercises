import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";
import "./App.css";

function App() {
	const [login, setLogin] = useState(false);
	const ProtectedRoute = (props) =>
		!login ? <Redirect to="/login" /> : <Route {...props} />;

	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact>
						<Home login={login} />
					</Route>
					<Route path="/login">
						<Login setLogin={setLogin} login={login} />
					</Route>
					<ProtectedRoute
						path="/products"
						exact
						component={Products}
					/>
					<ProtectedRoute
						path="/products/:id"
						exact
						component={ProductDetails}
					/>
					<Redirect from="/laptops" to="/products" />
					{/* <Route path="/products" exact component={Products} />
					<Route path="/products/:id" component={ProductDetails} /> */}
					<Route component={() => <h2>404 - page not found</h2>} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
