import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import UserList from "./App";
import reportWebVitals from "./reportWebVitals";
import data from "./data.json";

ReactDOM.render(
	<React.StrictMode>
		<UserList />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
