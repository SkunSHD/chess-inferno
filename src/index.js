// // inferno module
// import { render } from 'inferno';
//
// // routing modules
// import { BrowserRouter, Router, Link, Route } from 'inferno-router';
//
// function App({ children }) {
//     return (
// 		<div>
// 			<h1>Application</h1>
// 			<Link to="/">Home</Link>
// 			<Link to="/users">User list</Link>
// 			<br />
// 			<Link to="/users/user/tester">Tester's page</Link>
//             {children}
// 		</div>
//     )
// }
//
// function NoMatch({ children, params }) {
//     return (
// 		<div>no match</div>
//     )
// }
//
// function Home({ children }) {
//     return (
// 		<div>home</div>
//     )
// }
//
// // `children` in this case will be the `User` component
// function Users({ children, params }) {
//
//     return (
// 		<div>
// 			<h2>user list</h2>
//             {children}
// 		</div>
//     )
// }
//
// function User({ params }) {
//     return <h1>{JSON.stringify(params)}</h1>
// }
//
// const MyWebsite = () => (
// 	<BrowserRouter >
// 		<App>
// 			<Route exact path="/" component={Home}/>
// 			<Route path="/users" component={Users} />
// 			<Route path="/user/:username" component={User} />
// 			<Route path="*" component={NoMatch} />
// 		</App>
//
// 	</BrowserRouter>
// );



// 2
// import { render } from 'inferno';
// import { BrowserRouter, Route, Link } from 'inferno-router';
//
// const Home = () => (
// 	<div>
// 		<h2>Home</h2>
// 	</div>
// );
//
// const About = () => (
// 	<div>
// 		<h2>About</h2>
// 	</div>
// );
//
// const Topic = ({ match }) => (
// 	<div>
// 		<h3>{match.params.topicId}</h3>
// 	</div>
// );
//
// const Topics = ({ match }) => (
// 	<div>
// 		<h2>Topics</h2>
// 		<ul>
// 			<li>
// 				<Link to={`${match.url}/rendering`}>
// 					Rendering with React
// 				</Link>
// 			</li>
// 			<li>
// 				<Link to={`${match.url}/components`}>
// 					Components
// 				</Link>
// 			</li>
// 			<li>
// 				<Link to={`${match.url}/props-v-state`}>
// 					Props v. State
// 				</Link>
// 			</li>
// 		</ul>
//
// 		<Route path={`${match.url}/:topicId`} component={Topic}/>
// 		<Route exact path={match.url} render={() => (
// 			<h3>Please select a topic.</h3>
// 		)}/>
// 	</div>
// );
//
// const MyWebsite = () => (
// 	<BrowserRouter>
// 		<div>
// 			<ul>
// 				<li><Link to="/">Home</Link></li>
// 				<li><Link to="/about">About</Link></li>
// 				<li><Link to="/topics">Topics</Link></li>
// 			</ul>
//
// 			<hr/>
//
// 			<Route exact path="/" component={Home}/>
// 			<Route path="/about" component={About}/>
// 			<Route path="/topics" component={Topics}/>
// 		</div>
// 	</BrowserRouter>
// );
{/*render(<MyWebsite />, document.getElementById('app'));*/}

import { render, Component } from 'inferno';

class MyComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}
	render() {
		return (
			<div>
				<h1>Header!</h1>
				<span>Counter is at: { this.state.counter }</span>
			</div>
		);
	}
}
// console.log('<p>', <p></p>)

render(
	<MyComponent />,
	document.getElementById("app")
);
