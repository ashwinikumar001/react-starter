import React, {Component} from "react";
import cssModules from "react-css-modules";
import {connect} from "react-redux";
import styles from "./ContentArea.css";
import SearchPlanet from "./../SearchPlanet/SearchPlanet";

class ContentArea extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	render() {
		//console.info("inside render of Content Area, this.state: ", this.state);
		//console.info("inside render of Content Area, this.props: ", this.props);
		let {userName, userBirthYear, planetsList} = this.props;
		return (
			<div styleName="container">
				<div styleName="userInfo">
					<div>
						<span styleName="welcomeMessage">Hey </span>
						<span styleName="userName">{userName}</span>
					</div>
				</div>
				<div>
					<SearchPlanet/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	//console.info("inside mapStateToProps of ContentArea state: ", state);
	return {
		"userName": state.userInfo && state.userInfo.name,
		"userBirthYear": state.userInfo && state.userInfo.birth_year,
		"planetsList": state.planetsList
	};
};

export default connect(mapStateToProps)(cssModules(ContentArea, styles));
