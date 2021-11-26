import "./App.css";

function UserList(props) {
	let { value } = props;
	return (
		<div>
			{value.map(({ _id, name }) => {
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
