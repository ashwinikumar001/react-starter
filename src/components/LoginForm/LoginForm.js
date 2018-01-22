import React, {Component} from "react";
import cssModules from "react-css-modules";
import {connect} from "react-redux";

import styles from "./LoginForm.css";

import {login} from "./../../actions/login";

class LoginForm extends Component {

	constructor(props) {
		super(props);

		//TODO - TOGGLE TO DEBUG
		this.state = {};
		/*this.state = {
		 username: "Luke Skywalker",
		 password: "19BBY"
		 };*/

		this.onSubmit = this.onSubmit.bind(this);
	}

	render() {
		let {username, password} = this.state;
		let {isLoginPending, isLoginSuccess, loginError} = this.props;
		return (
			<div styleName="container">
				<form styleName="loginForm" onSubmit={this.onSubmit}>
					<div>
						<div styleName="formGroup">
							<label styleName="label">username:</label>
							<input styleName="inputText" type="text" name="username"
										 onChange={e => this.setState({username: e.target.value})} value={username}/>
						</div>

						<div styleName="formGroup">
							<label styleName="label">Password:</label>
							<input styleName="inputText" type="password" name="password"
										 onChange={e => this.setState({password: e.target.value})} value={password}/>
						</div>
					</div>

					<input styleName="inputSubmit" type="submit" value="Login"/>

					<div styleName="message">
						{ isLoginPending && <div>Please wait...</div> }
						{ isLoginSuccess && <div>Success.</div> }
						{ loginError && <div>{loginError}</div> }
					</div>
				</form>
			</div>
		)
	}

	onSubmit(e) {
		e.preventDefault();
		let {username, password} = this.state;
		this.props.validateCredentials(username, password);
		this.setState({
			username: '',
			password: ''
		});
	}
}

const mapStateToProps = (state) => {
	return {
		isLoginPending: state.login && state.login.isLoginPending,
		isLoginSuccess: state.login && state.login.isLoginSuccess,
		loginError: state.login && state.login.loginError
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		validateCredentials: (username, password) => dispatch(login.validateCredentials(username, password))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(LoginForm, styles));