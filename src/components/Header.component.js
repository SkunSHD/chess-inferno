import { Link } from 'inferno-router';
import { Component } from 'inferno';
import 'css/nav.css';


class ResponsiveHeader extends Component {

	componentDidMount() {
		this.addToggleLogic();
	}

	addToggleLogic() {
		var layout = document.getElementById('layout'),
			menu     = document.getElementById('menu'),
			menuLink = document.getElementById('menuLink'),
			content  = document.getElementById('main'),
			menuLinks  = document.querySelectorAll('.pure-menu-link');

		function toggleClass(element, className) {
			var classes = element.className.split(/\s+/),
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

		function toggleAll(e, toggleClassName) {

			e.preventDefault();
			toggleClass(layout, toggleClassName);
			toggleClass(menu, toggleClassName);
			toggleClass(menuLink, toggleClassName);
		}

		menuLink.onclick = function (e) {
			toggleAll(e, 'active');
		};

		content.onclick = function(e) {
			if(menu.className.indexOf('active') !== -1) {
				toggleAll(e, 'active');
			}
		};

		menuLinks.forEach((linkItem)=> {
			linkItem.onclick = function(e) {
				if(linkItem.className.indexOf('pure-menu-selected') !== -1) {
					toggleAll(e, 'pure-menu-selected');
				}
			};
		});
	}

	render() {
		return(
			<div id="layout">
				<a href="#menu" id="menuLink" className="menu-link">
					<span />
				</a>

				<div id="menu">
					<div className="pure-menu">
						<a className="pure-menu-heading" href="#">♕ Chess Lessons</a>

						<ul className="pure-menu-list">

							<li className="pure-menu-item">
								<a className="pure-menu-link">
									<Link className="nav-link" to="/">Home</Link>
								</a>
							</li>

							<li className="pure-menu-item">
								<a className="pure-menu-link">
									<Link className="nav-link" to="/login">Login</Link>
								</a>
							</li>

							<li className="pure-menu-item menu-item-divided pure-menu-selected">
								<a className="pure-menu-link">
									<Link className="nav-link" to="/visitors">Visitors list</Link>
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