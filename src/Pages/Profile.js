import React, { useEffect, useContext } from "react";
import Header from "../components/Header/Header";
import BottomNav from "../components/BottomNav/BottomNav"
import { StateMachineProvider, createStore, DevTool } from "little-state-machine"
import { useStateMachine } from "little-state-machine"
import UpdateStore from "../components/Forms/UserForm/UpdateStore"
import { useLocation } from "react-router"
import UserPreferencesForm from "../components/Forms/UserForm/UserPreferencesForm"
import UserPhysicalForm from "../components/Forms/UserForm/UserPhysicalForm"
import UserSubmit from "../components/Forms/UserForm/UserSubmit"
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import UrlBuilder from "../components/Helpers/UrlBuilder";
import Axios from "axios";
import AuthContext from "../App/AuthContext";

const Profile = () => {	
	const jwt = Cookies.get("JWT");
	let hasFilledInfo = false;
	const location = useLocation();
	const { push } = useHistory();
	const { setAuth } = useContext(AuthContext);
	const { state } = useStateMachine(UpdateStore);
	createStore({
		userInformation: {}
	});

	useEffect(() => {
		if (!jwt) {
			setAuth(false);
			push("/signin");
		}
		else {
			getHasFillInformation(jwt);
			if (hasFilledInfo) {
				getUserInformation(jwt);
			}
		}
	});

	const getHasFillInformation = (jwt) => {
		const url = UrlBuilder("https://api.trainings.agency", "/auth", "/me");

		Axios.get(url, { headers: {  Authorization: `Bearer ${jwt}` } })
			.then((response) => {
				getHasFillInformationCallback(response);
			})
			.catch((error) => {
				console.log(error.data);
			});
	};

	const getHasFillInformationCallback = (response) => {
		if (response.data[3] === "True") { 
			hasFilledInfo = true;
		}
	};

	const getUserInformation = (jwt) => {
		const url = UrlBuilder("https://api.trainings.agency", "/userinfo", "/get");

		Axios.get(url, { headers: {  Authorization: `Bearer ${jwt}` } })
			.then((response) => {
				state.userInformation = response.data
			})
			.catch((error) => {				
				console.log(error.data);
			});
	};
	
	return (
		<>
			<Header />
			<StateMachineProvider>
				{ process.env.NODE_ENV !== 'production' && <DevTool /> }
				{ location.pathname === "/profile/preferences" && <UserPreferencesForm/> }
				{ location.pathname === "/profile/physical" && <UserPhysicalForm/> }
				{ location.pathname === "/profile/submission" && <UserSubmit/> }
			</StateMachineProvider>
			<div className="h-16"></div>
			<BottomNav/>
		</>
	);
};

export default Profile;
