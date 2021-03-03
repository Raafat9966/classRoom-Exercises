import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact>
						<Home name={"Raafat"} />
					</Route>
					<Route path="/login" component={Login} />
					<Route path="/products" exact component={Products} />
					<Route path="/products/:id" component={ProductDetails} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
