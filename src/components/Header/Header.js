import {AppBar, FontIcon} from "material-ui";
import React, {Component} from "react";
import cssModules from "react-css-modules";
import {connect} from "react-redux";
import {iff} from "../../common/utils";
import styles from "./Header.css";

class Header extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		//console.info("inside Header render: ", this.props);
		const {isLoggedIn} = this.props;
		return (
			<div className="container">
				<AppBar
					title={`React Starter`}
					showMenuIconButton={false}
					iconElementRight={
						<div>
							{iff(isLoggedIn === true,
								() => {
									return (
										<a href={`/logout`}>
											<FontIcon className="material-icons" style={{
												color: "white", position: "cursor", margin: "10px 8px 0 0"
											}}>exit_to_app</FontIcon>
										</a>
									);
								},
								() => {
									return (<div styleName="loginText">
										Login
									</div>);
								})
							}
						</div>
					}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.login && state.login.isLoginSuccess
	};
};

export default connect(mapStateToProps)(cssModules(Header, styles));
