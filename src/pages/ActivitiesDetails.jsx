import DeleteHabit from "../actions/DeleteHabit";

const ActivitiesDetails = ({ activities, fetchDay }) => {
	const activityTime = (length) => {
		const date = new Date(length);

		const hours = date.getUTCHours();
		const minutes = date.getUTCMinutes();
		const formattedString = `${hours}:${
			minutes <= 9 ? "0" + String(minutes) : minutes
		}`;
		return formattedString;
	};

	return (
		<div className="habit-info">
			<h3>Activities</h3>
			{activities.map((activity) => (
				<div className="habit-event" key={activity.id}>
					<p>Took place at: {activityTime(activity.date)}</p>
					<DeleteHabit
						habitId={activity.id}
						fetchDay={fetchDay}
						plural={"activities"}
					/>
				</div>
			))}
		</div>
	);
};

export default ActivitiesDetails;
