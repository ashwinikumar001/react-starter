import {userInfo as userInfoActions} from "../actions/userInfo";

export default function userInfo(state = {}, action) {
	//console.info("inside reducers/userInfo.js action: ", action, " and state: ", state);
	let newUserInfoState = state;
	switch (action.type) {
		case userInfoActions.SET_USER_INFO:
			newUserInfoState = Object.assign({}, state, action.userInfo);
	}
	//console.info("newUserInfoState", newUserInfoState);
	return newUserInfoState;
}