function ReservationSection({ reservation }) {
	return (
		<div>
			<h1> { reservation.Trip.head } </h1>
			<p> Liczba biletów: { reservation.tickets } </p>
		</div>
	);
}

export default ReservationSection;