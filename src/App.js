import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";

function UserList() {
	return (
		<div>
			{data.map((obj) => {
				return (
					<div key={`${obj._id}`}>
						<h3>{obj.name.first}</h3>
						<h4>{obj.name.last}</h4>
					</div>
				);
			})}
		</div>
	);
}

export default UserList;
