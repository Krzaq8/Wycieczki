import { useEffect, useState } from "react";
import useServer from "../../hooks/useServer";
import ReservationSection from "./components/ReservationSection";

function Reservations() {
	const { get } = useServer('reservations');
	const [reservations, setReservations] = useState();
	
	useEffect(() => {
		get().then((reservations) => setReservations(reservations));
	}, [])

	return (
		<main>
			{
				reservations
				? reservations.map((reservation) => <ReservationSection key={reservation.id} reservation={reservation}/>)
				: <p> Loading... </p>
			}
		</main>
	);
}

export default Reservations;