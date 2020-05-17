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
import TrainingInfo from "../components/Training/TrainingInfo"

const Dashboard = () => {
	const [fetchedTrainingsInfo, setFetchedTrainingsInfo] = useState(null);
	const [loading, setLoading] = useState(false);
	const jwt = Cookies.get("JWT");
	const hasFilledInfo = localStorage.getItem('hasFilledInfo');
	const { push } = useHistory();
	const { setAuth } = useContext(AuthContext);
	let trainingInfoList = null;
	if (fetchedTrainingsInfo) {
		trainingInfoList = fetchedTrainingsInfo.map(training => <TrainingInfo key={training.id} training={training}/>)
	}

	useEffect(() => {
		if (!jwt) {
			setAuth(false);
			push("/signin");
		}
		else if (!fetchedTrainingsInfo) {
			const getHasFilledInfoUrl = UrlBuilder("https://api.trainings.agency", "/user", "/gethasfilledinfo");
			Axios.get(getHasFilledInfoUrl, { headers: {  Authorization: `Bearer ${jwt}` } })
				.then((response) => {
					localStorage.setItem('hasFilledInfo', response.data);
				})
				.catch((error) => {
					console.log(error.data);
			});
			
			const getLastTrainingsInfoUrl = UrlBuilder("https://api.trainings.agency", "/training", "/last");
			Axios.get(getLastTrainingsInfoUrl, { headers: {  Authorization: `Bearer ${jwt}` } })
				.then((response) => {
					setFetchedTrainingsInfo(response.data);					
				})
				.catch((error) => {
					console.log(error.data);
			});
		}
	});

	const handleGenerateTraining = () => {
		setLoading(true);
		const createTrainingUrl = UrlBuilder("https://api.trainings.agency", "/training", "/create");		
		Axios.post(createTrainingUrl, null, { headers: {  Authorization: `Bearer ${jwt}` } })
			.then((response) => {				
				setLoading(false);
			})
			.catch((error) => {
				console.log(error.data);
				setLoading(false);
		});
	}
   
	if (fetchedTrainingsInfo) {
		return (
			<>
				<Header />
				<div className="flex flex-col container-85 mt-24">
					{ hasFilledInfo === "false" && <UserInformationWarning /> }
					<p className="mt-4 text-lg dark-grey gotham-medium">Vos 3 derniers entrainements</p>
					{ fetchedTrainingsInfo.length === 0 && <p className="mt-4 text-lg dark-grey gotham-light">Aucun entrainement</p> }
					{ fetchedTrainingsInfo.length > 0 && 
						<div>
						{ trainingInfoList }
						</div>
					}
					<Loader loading={loading}/>
					{ hasFilledInfo === "true" &&
						<>
							<p className="mt-8 text-lg dark-grey gotham-medium">Générer un nouvel entrainement</p>
							<button
							onClick={handleGenerateTraining}
							type="submit"
							className={`${loading ? "mt-2" : "mt-8"} h-14 mb-32 orange-bg rounded text-lg text-white text-center gotham-bold`}>
								GÉNÉRER
							</button>
						</>
					}
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
