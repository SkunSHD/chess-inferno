import { Link } from 'inferno-router';


const Header = ({ children }) => (
	<ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/login">Login</Link></li>
		<li><Link to="/visitors">Visitors list</Link></li>
		<hr />
		{children}
	</ul>
);

export default Header;