import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header/Header";
import BottomNav from "../components/BottomNav/BottomNav"
import UserInformationWarning from "../components/Warnings/UserInformationWarning"
import Cookies from "js-cookie";
import Axios from "axios"
import UrlBuilder from "../components/Helpers/UrlBuilder" 
import { useHistory } from "react-router-dom";
import AuthContext from "../App/AuthContext"
import Loader from "../components/Loader/Loader"

const Dashboard = () => {
	const [fetchedHasFilledInfo, setFetchedHasFilledInfo] = useState(false);
	const jwt = Cookies.get("JWT");
	const hasFilledInfo = localStorage.getItem('hasFilledInfo');
	const { push } = useHistory();
	const { setAuth } = useContext(AuthContext);

	useEffect(() => {
		if (!jwt) {
			setAuth(false);
			push("/signin");
		}
		else {
			const url = UrlBuilder("https://api.trainings.agency", "/user", "/gethasfilledinfo");
			Axios.get(url, { headers: {  Authorization: `Bearer ${jwt}` } })
				.then((response) => {
					SetHasFilledInfoInLocalStorage(response);
				})
				.catch((error) => {
					console.log(error.data);
			});
		}
	});

	const SetHasFilledInfoInLocalStorage = (response) => {
		localStorage.setItem('hasFilledInfo', response.data);
		setFetchedHasFilledInfo(true);
	}	
   
	if (fetchedHasFilledInfo) {
		return (
			<>
				<Header />
				<div className="container-85">
				{ hasFilledInfo === "false" && <UserInformationWarning /> }
				</div>
				<div className="h-16"></div>
				<BottomNav/>
			</>
		);
	}
	return (
		<>
			<Header />
			<div className="mt-24"></div>
			<Loader loading="true"/>
			<BottomNav/>
		</>
	)
};

export default Dashboard;
