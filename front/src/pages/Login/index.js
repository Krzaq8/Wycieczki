import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useServer from "../../hooks/useServer";
import useStoreUser from "../../hooks/useStoreUser";

function Login() {
	let navigate = useNavigate();
	const [errors, setErrors] = useState();
	const { post } = useServer('login');
	const { loginUser } = useStoreUser();

	async function handleSubmit(event) {
		event.preventDefault();
		let query = {
			email: event.currentTarget.elements[0].value,
			password: event.currentTarget.elements[1].value
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
			<h1> Logowanie </h1>
			{
				errors ? 
				errors.map((error) => <p style={{color: 'red'}} key={error.msg}> {error.msg} </p>) :
				<> </>
			}
			<form name="login" onSubmit={handleSubmit}>
				<div className="email_input">
					<label htmlFor="email"> Email: </label>
					<input type="text" id="email" name="email" />
				</div>
				<div className="password_input">
					<label htmlFor="password"> Hasło: </label>
					<input type="password" id="password" name="password" />
				</div>
				<button type="submit"> Zaloguj </button>
			</form>
		</div>
	);
}

export default Login;