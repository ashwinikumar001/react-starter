import createBrowserHistory from "history/createBrowserHistory";
import React, {Component} from "react";
import cssModules from "react-css-modules";
import {connect} from "react-redux";
import {Router} from "react-router-dom";
import {iff} from "../../common/utils";
import styles from "./MainApp.css";
import Header from "../Header/Header";
import LoginForm from "../LoginForm/LoginForm";
import ContentArea from "../ContentArea/ContentArea";

const history = createBrowserHistory();
/*history.listen((location) => {

 });*/

class MainApp extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	render() {
		let {isDrawerOpen, isLoggedIn} = this.props;
		return (
			<div styleName="container">
				<Header/>
				<Router history={history}>
					<div styleName="mainArea">

						{iff(isLoggedIn === false,
							() => {
								return (
									<div style={{margin: "auto"}}>
										<LoginForm />
									</div>
								);
							},
							() => {
								return (
									<ContentArea/>
								);
							})
						}
					</div>
				</Router>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isDrawerOpen: true,
		isLoggedIn: state.login && state.login.isLoginSuccess
	};
};

export default connect(mapStateToProps)(cssModules(MainApp, styles));
