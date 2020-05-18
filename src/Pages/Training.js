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
import TrainingImage from "../components/Training/TrainingImage"
import ExerciceTraining from "../components/Training/ExerciceTraining"

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
				})
				.catch((error) => {
					console.log(error.data);
			});
		}
    });

    const setImgName = () => {
        if (fetchedTraining) {
            switch (fetchedTraining.trainingTypeName) {
                case "Musculation":
                    return "musculation-HF"
                case "Cardio":
                    return "cardio-F"
                case "Crossfit":
                    return "crossfit-H"
                case "HIIT":
                    return "crossfit-H"
                default:
                    break;
            }
        }
    }
    
    if (fetchedTraining) {
        return (
            <>
                <Header />
                <TrainingImage 
                    trainingTypeName={fetchedTraining.trainingTypeName}
                    creationDate={fetchedTraining.creationDate}
                    duration={fetchedTraining.duration}
                    imgName={setImgName()} />
                <div className="mt-4 container-85">
                {
                    (fetchedTraining.trainingTypeName ==="Crossfit"
                    || fetchedTraining.trainingTypeName ==="HIIT") &&
                    <p className="mt-8 text-center dark-grey gotham-medium text-xl">X {fetchedTraining.nbTimes}</p>
                }
                {
                    fetchedTraining.exerciceTrainingViewModels.map(exercice =>
                        <ExerciceTraining
                            key={fetchedTraining.exerciceTrainingViewModels.indexOf(exercice)}
                            trainingTypeName={fetchedTraining.trainingTypeName}
                            exerciceName={exercice.exerciceName}
                            restDuration={exercice.restDuration}
                            effortDuration={exercice.effortDuration}
                            nbSets={exercice.nbSets}
                            nbReps={exercice.nbReps}
                        />)
                }
                </div>
                <div className="h-32"></div>
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
