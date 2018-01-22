import {login as loginActions} from "../actions/login";

export default function login(state = {
	isLoginSuccess: false,
	isLoginPending: false,
	loginError: null
}, action) {
	//console.info("inside reducers/login.js action: ", action, " and state: ", state);
	let newLoginState = state;
	switch (action.type) {
		case loginActions.SET_LOGIN_PENDING:
			newLoginState = Object.assign({}, state, {
				isLoginPending: action.isLoginPending
			});
			break;
		case loginActions.SET_LOGIN_SUCCESS:
			newLoginState = Object.assign({}, state, {
				isLoginSuccess: action.isLoginSuccess
			});
			break;
		case loginActions.SET_LOGIN_ERROR:
			newLoginState = Object.assign({}, state, {
				loginError: action.loginError
			});
	}
	//console.info("newLoginState", newLoginState);
	return newLoginState;
}