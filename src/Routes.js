import { BrowserRouter, Link, Route, Switch } from 'inferno-router';
// source: https://reacttraining.com/react-router/web/example/url-params
// Components
import Layout from 'Layout'

const NoMatch = ({ children, match }) => <div>404 Not Found</div>


const Home = ({ children, match }) => (
	<div>Home</div>
);


const Visitors = ({ children, match }) => (
	<div>
		<h2>Visitors list</h2>
		{children}
	</div>
);


const Visitor = ({ match }) => (
	<div>
		<h1>{ match.params.name && `Hello ${match.params.name}!` }</h1>
	</div>
);


const About = () => (
	<div>
		<h2>About</h2>
	</div>
);


const Navigation = ({ children }) => (
	<ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/visitors">Visitors list</Link></li>
		<li><Link to="/about">About</Link></li>
		<hr />
		{children}
	</ul>
);


export default function MyWebsite() {
	return (
		<BrowserRouter >
			<Navigation>
				<Switch>
					<Route exact path="/" component={Layout}/>
					<Route path="/visitors" component={Visitors} />
					<Route path="/visitor/:name" component={Visitor} />
					<Route path="/about" component={About}/>
					<Route component={NoMatch} />
				</Switch>
			</Navigation>
		</BrowserRouter>
	)
};