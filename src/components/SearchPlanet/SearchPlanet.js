import React, {Component} from "react";
import cssModules from "react-css-modules";
import {connect} from "react-redux";
import styles from "./SearchPlanet.css";

import {planet} from "./../../actions/planet";

class SearchPlanet extends Component {
	constructor(props, context) {
		super(props, context);
		this.props.getPlanetsList();
		this.state = {};
	}

	render() {
		//console.info("inside SearchPlanet render, this.state: ", this.state);
		//console.info("inside SearchPlanet render, this.props: ", this.props);
		const {allPlanetsList} = this.props;
		if (allPlanetsList.length < 1) {
			return <div styleName="loader">Planets are loading...</div>;
		}
		let {planetSearchToken} = this.state;
		//console.info("inside SearchPlanet render, allPlanetsList: ", allPlanetsList, planetSearchToken);
		let planetsListComponent = [];
		if (planetSearchToken) {
			for (const planet of allPlanetsList) {
				const planetName = planet.name;
				if (planetName.indexOf(planetSearchToken) > -1) {
					planetsListComponent.push((
						<div key={planetName} styleName="searchResultRow" style={{"width": planet.displaySize}}>
							<span>{planetName}'s diameter: {planet.diameter}</span>
						</div>));
				}
			}
		}
		//console.info("inside SearchPlanet render, planetsListComponent: ", planetsListComponent);
		return (
			<div className="container">
				<div styleName="formGroup">
					<label styleName="label">search planet:</label>
					<input styleName="inputText" type="text" name="searchplanet"
								 onChange={e => this.setState({planetSearchToken: e.target.value})} value={planetSearchToken}/>
				</div>
				<div styleName="planetsList">
					{planetsListComponent}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	//console.info("inside mapStateToProps of SearchPlanet", state);
	return {
		allPlanetsList: state.planet
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getPlanetsList: () => dispatch(planet.getPlanetsList())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(SearchPlanet, styles));
