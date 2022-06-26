import { Link } from "react-router-dom";

function TripSection({ trip }) {
	return (
		<section className="trip">
			<figure className="trip_img">
				<img src={trip.img_url} alt={trip.img_alt}/>
			</figure>

			<div className="trip_desc">
				<h1> {trip.head} </h1>
				<p> {trip.beg_date.slice(0, 10)} - {trip.end_date.slice(0, 10)} </p>
				<p> {trip.short_desc} </p>
				<div className="trip_footer">
					<p> Cena: {trip.price} </p>
					<Link to={`/trip/${trip.id}`}> Zarezerwuj </Link>
				</div>
			</div>
		</section>
	);
}

export default TripSection;