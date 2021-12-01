import "./App.css";
import data from "./data.json";

function UserList() {
	return (
		<div>
			{data.map(({ _id, name }) => {
				return (
					<div key={_id}>
						<h3>{name.first}</h3>
						<h4>{name.last}</h4>
					</div>
				);
			})}
		</div>
	);
}
export default UserList;
