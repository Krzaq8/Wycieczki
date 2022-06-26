import TripSection from "./components/Trip";
import "./styles/styles.css";
import { useEffect, useState } from "react";
import useServer from "../../hooks/useServer";
import { Link } from "react-router-dom";

function Home() {
	const [trips, setTrips] = useState();
	const { get } = useServer('home');

	useEffect(() => {
		get().then((trips) => setTrips(trips));
	}, []);

	return (
		<div className="contents">
			<main>
				{ 
					trips
					? trips.map((trip) => <TripSection trip={trip} key={trip.id}/>) 
					: <> </>
				}
			</main>
			<aside>
				<div className="promos">
					<h1> Promocje </h1>
					<div>
						<h2> Góry wysokie </h2>
						<p> 1 - 31 lutego </p>
						<Link to="/booking/0"> Zarezerwuj </Link>
					</div>
				</div>
				<div className="advices">
					<h1> Porady </h1>
					<ul className="advices_list">
						<li> Porada pierwsza </li>
						<li> Porada druga </li>
						<li> Porada trzecia </li>
						<li> Porada czwarta </li>
					</ul>
				</div>
			</aside>
		</div>
	);
}

export default Home;