import { Component } from 'inferno';
import userActions from 'actions/user.actions'


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


	onSubmit = async (e) => {
		const { login, password } = this.state;
		await userActions.signIn({ login, password });
		console.log('%%---> redirect')
	}


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

				<button onClick={ this.onSubmit }>Login</button>
			</div>
		)
	}
}

export default Login;