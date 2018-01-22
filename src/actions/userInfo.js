const SET_USER_INFO = "SET_USER_INFO";

const setUserInfo = userInfo => {
	return {
		type: SET_USER_INFO,
		userInfo
	};
};

const userInfo = {
	SET_USER_INFO, setUserInfo
};

export {userInfo};
