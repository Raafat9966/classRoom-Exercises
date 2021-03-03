import { Link } from "react-router-dom";

function Header() {
	return (
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/products">Products</Link>
				</li>
				<li>
					<Link to="/products/123">Product Details</Link>
				</li>
			</ul>
		</div>
	);
}

export default Header;
