import { NavLink } from "react-router-dom";

function Header({ isLogin, details }) {
	return (
		<div className="navbar">
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
					<NavLink exact activeClassName="active" to="/user">
						User
					</NavLink>
				</li>
			</ul>
			<div className="details">
				<p>{isLogin ? "logged in" : "logged out"}</p>
				<p>{details.name}</p>
				<p>{details.email}</p>
			</div>
		</div>
	);
}

export default Header;
