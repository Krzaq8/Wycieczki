import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useServer from "../../hooks/useServer";
import useStoreUser from "../../hooks/useStoreUser";

function Registration() {
	let navigate = useNavigate();
	const [errors, setErrors] = useState();
	const { post } = useServer('registration');
	const { loginUser } = useStoreUser();

	async function handleSubmit(event) {
		event.preventDefault();
		
		let query = {
			name: event.currentTarget.elements[0].value,
			last_name: event.currentTarget.elements[1].value,
			email: event.currentTarget.elements[2].value,
			password: event.currentTarget.elements[3].value,
			password2: event.currentTarget.elements[4].value
		};
		const response = await post(query);
		
		if (response.errors) {
			setErrors(response.errors);
		}
		else {
			setErrors(null);
			loginUser(query.email);
			navigate("/home", { replace: true });
		}
	}

	return (
		<div>
			<h1> Rejestracja </h1>
			{
				errors ? 
				errors.map((error) => <p style={{color: 'red'}} key={error.msg}> {error.msg} </p>) :
				<> </>
			}
			<form name="registration" onSubmit={handleSubmit}>
				<div className="name_input">
					<label htmlFor="name"> Imię: </label>
					<input type="text" id="name" name="name" />
				</div>
				<div className="last_name_input">
					<label htmlFor="last_name"> Nazwisko: </label>
					<input type="text" id="last_name" name="last_name" />
				</div>
				<div className="email_input">
					<label htmlFor="email"> Email: </label>
					<input type="text" id="email" name="email" />
				</div>
				<div className="password_input">
					<label htmlFor="password"> Hasło: </label>
					<input type="password" id="password" name="password" />
				</div>
				<div className="password2_input">
					<label htmlFor="password2"> Powtórz hasło: </label>
					<input type="password" id="password2" name="password2" />
				</div>
				<button type="submit"> Zarejestruj </button>
			</form>
		</div>
	);
}

export default Registration;