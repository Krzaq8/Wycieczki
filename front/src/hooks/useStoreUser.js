import store from '../stores/store';
import { useSelector } from 'react-redux';
import { login, logout } from "../stores/userSlice"

function useStoreUser() {
	function loginUser(name) {
		store.dispatch(login(name));
	}

	function logoutUser() {
		store.dispatch(logout())
	}

	return { loginUser, logoutUser, userName: useSelector(state => state.user.name) };
}

export default useStoreUser;