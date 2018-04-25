import { BrowserRouter, Link, Route, Switch } from 'inferno-router';
// source: https://reacttraining.com/react-router/web/example/url-params
// Components
import Layout from 'Layout';
import LoginPage from 'components/Login.component';
import VisitorsPage from 'components/Visitors.component';
import NotFoundPage from 'components/NotFound.component';



const Header = ({ children }) => (
	<ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/login">Login</Link></li>
		<li><Link to="/visitors">Visitors list</Link></li>
		<hr />
		{children}
	</ul>
);


export default function MyWebsite() {
	return (
		<BrowserRouter >
			<Header>
				<Switch>
					<Route exact path="/" component={Layout}/>
					<Route path="/login" component={LoginPage} />
					<Route path="/visitors" component={VisitorsPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</Header>
		</BrowserRouter>
	)
};