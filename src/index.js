import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import UserList from "./App";
import reportWebVitals from "./reportWebVitals";
import data from "./data.json";

let dataList = data.map((obj) => {
	let { _id, name } = obj;
	return { _id, name };
});

ReactDOM.render(
	<React.StrictMode>
		<UserList value={dataList} />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
