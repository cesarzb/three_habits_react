import { useAuthHeader } from "react-auth-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const DeleteDay = ({ dayId, fetchDays }) => {
	const authHeader = useAuthHeader();

	const handleSubmit = () => {
		fetch("http://localhost:3000/api/v1/days/" + dayId, {
			method: "DELETE",
			headers: {
				Authorization: authHeader(),
			},
		}).then(() => {
			fetchDays();
		});
	};

	return (
		<button className="delete-day-button" onClick={handleSubmit}>
			<FontAwesomeIcon icon={faX} />
		</button>
	);
};

export default DeleteDay;
