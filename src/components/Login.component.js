import { Component } from 'inferno';
import userActions from 'actions/user.actions'
import {
	withRouter
} from "inferno-router";


const AuthButton = withRouter(
	({history, login, password}) =>
			<p>
				Welcome!{" "}
				<button
					onClick={async () => {
						console.log('login, password', login, password)
						await userActions.signIn({ login, password });
						history.push("/");
					}}
				>
					Sign in
				</button>
			</p>
	);


class Login extends Component {

	constructor() {
		super();
		this.state = {
			login: '',
			password: ''
		};
	}


	onInputChange = (inputName, e) =>
		this.setState((prevState, props) =>
			({[inputName]: e.target.value}));


	// onSubmit = async (e) => {
	// 	const { login, password } = this.state;
	// 	await userActions.signIn({ login, password });
	// }


	render() {
		return(
			<div>
				<input type="text"
				       onInput={ e => this.onInputChange('login', e) }
				       value={this.state.login}
				       placeholder='login' />

				<input type="password"
				       onInput={ e => this.onInputChange('password', e) }
				       value={this.state.password}
				       placeholder='password' />

				{/*<button onClick={ this.onSubmit }>Login</button>*/}
				<AuthButton {...this.state} />
			</div>
		)
	}
}

export default Login;