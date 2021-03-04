import { NavLink } from "react-router-dom";

function Header() {
	return (
		<div>
			<ul>
				<li>
					<NavLink exact activeClassName="active" to="/">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink exact activeClassName="active" to="/login">
						Login
					</NavLink>
				</li>
				<li>
					<NavLink exact activeClassName="active" to="/products">
						Products
					</NavLink>
				</li>
				<li>
					<NavLink exact activeClassName="active" to="/products/123">
						Product Details
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Header;
