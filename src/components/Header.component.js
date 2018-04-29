import { Link } from 'inferno-router';
import { Component } from 'inferno';
import 'css/nav.css';
// Store
import connectToStores from 'utils/connectToStores.mixin';
import userStore from 'stores/user.store';


function getState() {
	return {
		user: userStore.user
	}
}


@connectToStores
class ResponsiveHeader extends Component {

	constructor() {
		super();
		this.state = getState();
		this.connectToStores([userStore], getState);

	}

	componentDidMount() {
		this.addToggleLogic();
	}

	addToggleLogic() {
		const layout = document.getElementById('layout'),
			menu      = document.getElementById('menu'),
			menuLink  = document.getElementById('menuLink'),
			content   = document.getElementById('main'),
			menuLis = document.querySelectorAll('.pure-menu-item'),
			menuLinks = document.querySelectorAll('.pure-menu-link');

		function toggleClass(element, className) {
			let classes = element.className.split(/\s+/),
				length = classes.length,
				i = 0;

			for(; i < length; i++) {
				if(classes[i] === className) {
					classes.splice(i, 1);
					break;
				}
			}
			// The className is not found
			if(length === classes.length) {
				classes.push(className);
			}

			element.className = classes.join(' ');
		}

		function toggleAll(e) {
			e.preventDefault();
			const active = 'active';
			toggleClass(layout, active);
			toggleClass(menu, active);
			toggleClass(menuLink, active);
		}

		menuLink.onclick = function (e) {
			toggleAll(e);
		};

		content.onclick = function(e) {
			if(menu.className.indexOf('active') !== -1) {
				toggleAll(e);
			}
		};

		function clearActiveLinkClass() {
			menuLis.forEach(
				menuLi =>
					(menuLi.className.indexOf('pure-menu-selected') !== -1) &&
					menuLi.classList.remove('pure-menu-selected'));
		}

		menuLinks.forEach((linkItem) => {
			linkItem.onclick = function(e) {
				const parentLi = linkItem.offsetParent;
				if(parentLi.classList.contains('pure-menu-selected')) return console.log('--> [class already exist]');

				clearActiveLinkClass();
				parentLi.classList.add('pure-menu-selected');
			};
		});
	}


	render() {
		return(
			<div id="layout">
				<a href="/" id="menuLink" className="menu-link">
					<span />
				</a>

				<div id="menu">
					<div className="pure-menu height-auto">
						<a className="pure-menu-heading" href="#">♕ Chess Lessons</a>

						<ul className="pure-menu-list">

							<li className="pure-menu-item height-auto pure-menu-selected">
								<a className="pure-menu-link">
									<Link className="nav-link" to="/">Home</Link>
								</a>
							</li>

							{ this.state.user &&
							<li className="pure-menu-item height-auto">
								<a className="pure-menu-link">
									<Link className="nav-link" to="/visitors">Visitors</Link>
								</a>
							</li> }

							<li className="pure-menu-item height-auto">
								<a className="pure-menu-link">
									{ this.state.user ?
										<Link className="nav-link" to="/logout">Logout</Link>
										:
										<Link className="nav-link" to="/login">Login</Link>
									}
								</a>
							</li>

						</ul>
					</div>
				</div>

				<div id="main">
					<div className="header">
						<h1>Let's play!</h1>
						<h2>I'm best of the best teacher %)</h2>
					</div>

					<div className="content">
						{ this.props.children }
					</div>
				</div>
			</div>
		);
	}
}


export default ResponsiveHeader;