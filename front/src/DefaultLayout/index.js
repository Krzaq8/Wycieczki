import { Link, useNavigate } from "react-router-dom";
import useStoreUser from "../hooks/useStoreUser";
import "./styles/styles.css";
import useServer from "../hooks/useServer";

function DefaultLayout({ children }) {
	const navigate = useNavigate();
	const { logoutUser, userName } = useStoreUser();
	const { post } = useServer('logout');

	function logout() {
		post();
		logoutUser();
		navigate("/home", { replace: true });
	}

	return (
		<>
			<header>
				<figure className="logo">
					<img src="./assets/morze.jpg" alt="Logo" className="logo_img" />
				</figure>
				<nav className="header_nav">
					<ul className="header_list">
						<li> <Link to='/home'> Wycieczki </Link> </li>
						{
							userName
							? <>
								<li> <Link to='/reservations'> Rezerwacje: { userName } </Link> </li>
								<li> <p onClick={logout}> Wyloguj </p> </li>
							</>
							: <>
								<li> <Link to='/login'> Zaloguj </Link> </li>
								<li> <Link to='/registration'> Zarejestruj </Link> </li>
							</>
						}
						
					</ul>
				</nav>
			</header>

			{ children }

			<footer>
				<nav>
					<ul className="footer_nav">
						<li> <Link to="/home"> Biuro podróży, 2022 </Link> </li>
						<li> <Link to="/home"> O nas  </Link> </li>
						<li> <Link to="/home"> Polityka prywatności </Link> </li>
						<li> <Link to="/home"> Kontakt </Link> </li>
					</ul>
				</nav>
			</footer>
		</>
	);
}

export default DefaultLayout;