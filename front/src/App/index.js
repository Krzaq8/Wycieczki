import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../DefaultLayout";
import Booking from "../pages/Booking";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Reservations from "../pages/Reservations";
import Trip from "../pages/Trip";

function App() {
  return (
		<DefaultLayout>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/home" element={<Home />}/>
				<Route path="/trip/:id" element={<Trip />}/>
				<Route path="/booking/:id" element={<Booking />}/>
				<Route path="/login" element={<Login />}/>
				<Route path="/registration" element={<Registration />}/>
				<Route path="/reservations" element={<Reservations />}/>
				<Route path="*" element={<div>Ta strona nie istnieje</div>}/>
			</Routes>
		</DefaultLayout>
  );
}

export default App;
