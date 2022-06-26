import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useServer from "../../hooks/useServer";
import useStoreUser from "../../hooks/useStoreUser";

function Booking() {
	let navigate = useNavigate();
	const [errors, setErrors] = useState();
	const { id } = useParams();
	const { post } = useServer(`booking`);
	const { userName } = useStoreUser()

	async function handleSubmit(event) {
		if (userName === null) {
			navigate("/login", { replace: true });
		}

		event.preventDefault();
		let query = {
			tickets: event.currentTarget.elements[0].value,
			trip: id
		};
		const response = await post(query);

		if (response.errors) {
			setErrors(response.errors);
		}
		else {
			setErrors(null);
			navigate("/reservations", { replace: true });
		}
	}

	return (
		<div>
			<h1> Rezerwacja </h1>
			{
				errors ? 
				errors.map((error) => <p style={{color: 'red'}} key={error.msg}> {error.msg} </p>) :
				<> </>
			}
			<form name="reserve" onSubmit={handleSubmit}>
				<div className="tickets_input">
					<label htmlFor="tickets"> Liczba biletów: </label>
					<input type="number" id="tickets" name="tickets" />
				</div>
				<button type="submit"> Zarezerwuj </button>
			</form>
		</div>
	);
}

export default Booking;