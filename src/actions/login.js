import SuperAgentBlueBird from "superagent-bluebird-promise";

import {userInfo as userInfoActions} from "./userInfo";

const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

const setLoginPending = isLoginPending => {
	return {
		type: SET_LOGIN_PENDING,
		isLoginPending
	};
};

const setLoginSuccess = isLoginSuccess => {
	return {
		type: SET_LOGIN_SUCCESS,
		isLoginSuccess
	};
};

const setLoginError = loginError => {
	return {
		type: SET_LOGIN_ERROR,
		loginError
	}
};

const validateCredentials = (username, password) => {
	return dispatch => {
		dispatch(setLoginPending(true));
		dispatch(setLoginSuccess(false));
		dispatch(setLoginError(null));

		callLoginApi(username, password).then(userInfo => {
			//console.info("userInfo: ", userInfo);
			dispatch(setLoginPending(false));
			if (userInfo === null) {
				dispatch(setLoginError("Username and Password mismatch!"));
			} else {
				dispatch(setLoginSuccess(true));
				//TODO - Use Global Dispatcher
				dispatch(userInfoActions.setUserInfo(userInfo));
			}
		}, reject => {
			console.error("rejected promise", reject);
		}).catch(() => {
			console.error("error in calling swapi", arguments);
		});
	};
};

const callLoginApi = async (username, password) => {
	let currentUrl = "https://swapi.co/api/people/?page=1";
	while (currentUrl !== null) {
		let data = await SuperAgentBlueBird.get(currentUrl).promise();
		let response = data && data.body;
		let currentUsersList = response && response.results;
		if (currentUsersList instanceof Array) {
			for (const userInfo of currentUsersList) {
				if (userInfo.name === username) {
					if (userInfo.birth_year === password) {
						return userInfo;
					}
					return null;
				}
			}
		}
		currentUrl = response.next;
	}
	return null;
};

const login = {
	SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR,
	setLoginPending, setLoginSuccess, setLoginError,
	validateCredentials
};

export {login};
