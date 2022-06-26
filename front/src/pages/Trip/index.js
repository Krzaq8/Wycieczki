import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServer from "../../hooks/useServer";
import useStoreUser from "../../hooks/useStoreUser";
import "./styles/styles.css"

function Trip() {
	const [trip, setTrip] = useState();
	const { id } = useParams();
	const { get } = useServer(`trip/${id}`);
	const { userName } = useStoreUser();

	useEffect(() => {
		get().then((trip) => setTrip(trip));
	}, []);

	return (
		trip ?
		<main>
			<img src={trip.img_url} alt={trip.img_alt} />
			<h1> {trip.head} </h1>
			<p> {trip.short_desc} </p>
			<h2> Dłuższy opis </h2>
			<p> {trip.long_desc} </p>
			<h2> Istotne informacje </h2>
			<ul>
				<li> termin wycieczki: {trip.beg_date.slice(0, 10)} - {trip.end_date.slice(0, 10)} </li>
				<li> temperatury w miejscu docelowym: takie w sam raz </li>
				<li> warto zabrać trochę ubrań na zmianę </li>
				<li> cena wycieczki {trip.price} </li>
			</ul>
			<h2> Program wycieczki </h2>
			<ol>
				<li> Odwiedziny w miejscu </li>
				<li> Obiad </li>
				<li> Wyprawa na {trip.head} </li>
			</ol>
			<div className="buttons">
				<Link className="button" to="/home"> Powrót </Link>
				<Link className="button" to={ userName ? `/booking/${id}` : '/login'}> Zarezerwuj </Link>
			</div>
		</main>
		: <p> Loading... </p>
	);
}

export default Trip;
