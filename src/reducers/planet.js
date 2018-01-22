import {planet as planetActions} from "../actions/planet";

export default function planet(state = [], action) {
	//console.info("inside reducers/planet.js action: ", action, " and state: ", state);
	let newPlanetState = state;
	switch (action.type) {
		case planetActions.SET_PLANETS_LIST:
			newPlanetState = JSON.parse(JSON.stringify(action.planetsList));
	}
	//console.info("newPlanetState", newPlanetState);
	return newPlanetState;
}