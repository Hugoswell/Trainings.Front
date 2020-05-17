import React, { useState, useEffect, useContext } from "react"
import Cookies from "js-cookie";
import Axios from "axios"
import { useParams } from "react-router"
import Header from "../components/Header/Header"
import BottomNav from "../components/BottomNav/BottomNav"
import UrlBuilder from "../components/Helpers/UrlBuilder" 
import { useHistory } from "react-router-dom";
import AuthContext from "../App/AuthContext"
import Loader from "../components/Loader/Loader"

const Training = () => {
    const [fetchedTraining, setFetchedTraining] = useState(null);    
    const jwt = Cookies.get("JWT");
    const { push } = useHistory();
    const { setAuth } = useContext(AuthContext);
    const { id } = useParams();

    useEffect(() => {
		if (!jwt) {
			setAuth(false);
			push("/signin");
		}
		else if (!fetchedTraining) {            
            let getTrainingUrl = UrlBuilder("https://api.trainings.agency", "/training", "/get");
            getTrainingUrl +=`?trainingId=${id}`

			Axios.get(getTrainingUrl, { headers: {  Authorization: `Bearer ${jwt}` } })
				.then((response) => {
                    setFetchedTraining(response.data)
					console.log(response.data);
				})
				.catch((error) => {
					console.log(error.data);
			});
		}
    });
    
    if (fetchedTraining) {
        return (
            <>
                <Header />
                <div className="mt-24">
                    Training number {id}
                </div>
                <div className="h-16"></div>
                <BottomNav/>
            </>
        )
    }
    return (
		<>
			<Header />
			<div className="mt-24"></div>
			<Loader loading="true"/>
			<BottomNav/>
		</>
	)
}

export default Training;
