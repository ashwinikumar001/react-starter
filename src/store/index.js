import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";

import reducers from "../reducers";

const customLogger = createLogger({
	diff: true,
	duration: true,
	timestamp: true
});

const store = createStore(reducers, {}, applyMiddleware(thunk, customLogger));

//const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;