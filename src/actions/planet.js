import SuperAgentBlueBird from "superagent-bluebird-promise";

const GET_PLANETS_LIST = "GET_PLANETS_LIST";
const SET_PLANETS_LIST = "SET_PLANETS_LIST";

const setPlanetsList = (planetsList) => {
	return {
		type: SET_PLANETS_LIST,
		planetsList
	};
};

const getPlanetsList = () => {
	return dispatch => {
		getPlanetsListHelper().then(planetsList => {
			//console.info("planetsList: ", planetsList);
			dispatch(setPlanetsList(planetsList));
		}, reject => {
			console.error("rejected promise", reject);
		}).catch(() => {
			console.error("error in calling swapi", arguments);
		});
	};
};

const getPlanetsListHelper = async () => {
	let planetsList = [];
	let currentUrl = "https://swapi.co/api/planets/?page=1";
	while (currentUrl !== null) {
		let data = await SuperAgentBlueBird.get(currentUrl).promise();
		let response = data && data.body;
		let currentPlanetsList = response && response.results;
		//console.info("currentPlanetsList", currentPlanetsList);
		if (currentPlanetsList instanceof Array) {
			for (const planet of currentPlanetsList) {
				planetsList.push(planet);
			}
		}
		currentUrl = response.next;
	}
	//console.info("planetList", planetsList);
	planetsList.sort((a, b) => {
		let aDiameter = parseInt(a.diameter);
		let bDiameter = parseInt(b.diameter);
		if (aDiameter !== aDiameter) {
			return 1;
		} else if (bDiameter !== bDiameter) {
			return -1;
		}
		return bDiameter - aDiameter;
	});

	// For linear scaling,
	// const maximumDiameter = parseInt(planetsList[0].diameter) || 0;
	// const relativeScale = 450; //0px+50px to 450px+50px being the range of div width And 30px for unknowns/garbage diameter

	for (let planet of planetsList) {
		let planetDiameter = parseInt(planet.diameter);
		if (planetDiameter !== planetDiameter) {
			planet.displaySize = "300px";
		} else if (planetDiameter === 0) {
			planet.displaySize = "350px";
		} else {
			planet.displaySize = ((Math.log(planetDiameter)) * 10 + 350) + "px";
		}
		//console.info(planet.diameter, planet.displaySize);
	}

	return planetsList;
};

const planet = {
	GET_PLANETS_LIST, SET_PLANETS_LIST,
	getPlanetsList
};

export {planet};
