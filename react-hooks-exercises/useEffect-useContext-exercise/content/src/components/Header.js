import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
	return (
		<header className="AppHeader">
			<div className="MainNavigation">
				<ul>
					<li>
						<NavLink activeClassName="active" exact to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" exact to="/login">
							Login
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" exact to="/products">
							Products
						</NavLink>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
