import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header/Header";
import BottomNav from "../components/BottomNav/BottomNav"
import Cookies from "js-cookie";
import Axios from "axios"
import UrlBuilder from "../components/Helpers/UrlBuilder" 
import { useHistory } from "react-router-dom";
import AuthContext from "../App/AuthContext"
import Loader from "../components/Loader/Loader"
import TrainingInfo from "../components/Training/TrainingInfo"

const Trainings = () => {
	const [fetchedTrainingsInfo, setFetchedTrainingsInfo] = useState(null);	
	const jwt = Cookies.get("JWT");
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
			const getLastTrainingsInfoUrl = UrlBuilder("https://api.trainings.agency", "/training", "/all");
			Axios.get(getLastTrainingsInfoUrl, { headers: {  Authorization: `Bearer ${jwt}` } })
				.then((response) => {
					setFetchedTrainingsInfo(response.data);					
				})
				.catch((error) => {
					console.log(error.data);
			});
		}
	});
  
	if (fetchedTrainingsInfo) {
		return (
			<>
				<Header />
				<div className="flex flex-col container-85 mt-24">					
					<p className="mt-4 text-lg dark-grey gotham-medium">Vos entrainements</p>
					{ fetchedTrainingsInfo.length === 0 && <p className="mt-4 text-lg dark-grey gotham-light">Aucun entrainement</p> }
					{ fetchedTrainingsInfo.length > 0 && 
						<div>
						{ trainingInfoList }
						</div>
					}										
				</div>
				<div className="h-24"></div>
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
	);
};

export default Trainings;
