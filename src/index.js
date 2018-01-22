import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./css/loadcss";
import custombaseTheme from "./css/themes/theme";

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import store from "./store";

import MainApp from "./components/MainApp/MainApp";

// Log the initial state
//console.log("initial store.getState(): ", store.getState());

// Every time the state changes, log it
/*const unsubscribe = store.subscribe(() =>
 console.log("updated store.getState(): ", store.getState())
 );*/

const App = () => (
	<MuiThemeProvider muiTheme={getMuiTheme(custombaseTheme)}>
		<Provider store={store}>
			<MainApp />
		</Provider>
	</MuiThemeProvider>
);

let node = document.getElementById("root");

ReactDOM.render(<App />, node);
