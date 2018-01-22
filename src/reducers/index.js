import {combineReducers} from "redux";
import login from "./login";
import planet from "./planet";
import userInfo from "./userInfo";

const app = combineReducers({
	login, userInfo, planet
});

//console.info("inside reducer/index.js: ", app);

export default app
