import { useState } from "react";
import { useAuthHeader } from "react-auth-kit";

const NewHydration = ({ fetchDays }) => {
	const authHeader = useAuthHeader();
	const [cups, setCups] = useState(8);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch("http://localhost:3000/api/v1/hydrations", {
			method: "POST",
			headers: {
				Authorization: authHeader(),
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ hydration: { cups: cups } }),
		}).then(() => {
			fetchDays();
		});
	};

	return (
		<form className="new-form">
			<div className="form-value">
				<label className="hydration-cups" htmlFor="hydration-cups">
					Cups
				</label>
				<input
					className="hydration-form-cups"
					type="text"
					id="hydration-cups"
					name="cups"
					value={cups}
					onChange={(e) => {
						setCups(e.target.value);
					}}
				/>
			</div>
			<button className="create-hydration" onClick={handleSubmit}>
				Add hydration
			</button>
		</form>
	);
};

export default NewHydration;