import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form"
import UserFormStep from "./UserFormStep"
import FormLabel from "../FormLabel/FormLabel"
import FormInput from "../FormInput/FormInput"
import Loader from "../../Loader/Loader"
import Cta from "../../Ctas/Cta"
import Cookies from "js-cookie"
import UrlBuilder from "../../Helpers/UrlBuilder";
import Axios from "axios";
import AuthContext from "../../../App/AuthContext";

const UserInfoForm = () => {
    const jwt = Cookies.get("JWT");
    const hasFilledInfo = localStorage.getItem('hasFilledInfo');
    const { setAuth } = useContext(AuthContext);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { push } = useHistory();    

    const fetchingUrl = UrlBuilder("https://api.trainings.agency", "/userinfo", "/get");
    const submittingUrl = 
    (hasFilledInfo === "true"
    ? UrlBuilder("https://api.trainings.agency", "/userinfo", "/update")
    : UrlBuilder("https://api.trainings.agency", "/userinfo", "/create"))
    
    if (!jwt) {
        setAuth(false);
        push("/signin");
    }
    else if (!data) {
        Axios.get(fetchingUrl, { headers: {  Authorization: `Bearer ${jwt}` } })
        .then((response) => {
            setData(response.data);
            setLoading(false);
        })
        .catch((error) => {				
            console.log(error.data);
        });
    }
    
    const form = useForm();

    useEffect(() => {
		if (data) {
            form.reset(data)
        }
	}, [data]);

    const onSubmit = (values) => {
        setLoading(true);

        if (hasFilledInfo === "true") {
            Axios.put(submittingUrl, values, { headers: {  Authorization: `Bearer ${jwt}` } })
            .then((response) => {
                setLoading(false);
                push("/dashboard");
            })
            .catch((error) => {
                console.log(error.data);
            });
        }
        else {
            Axios.post(submittingUrl, values, { headers: {  Authorization: `Bearer ${jwt}` } })
            .then((response) => {
                setLoading(false);
                push("/dashboard");
            })
            .catch((error) => {
                console.log(error.data);
            });
        }
    };

    const goals = [
        { value: "", text: "Sélectionner" },
        { value: "1", text: "Perte de poids" },
        { value: "2", text: "Prise de masse" },
        { value: "3", text: "Explosivité" },
        { value: "4", text: "Force" }
    ];
    const [trainingTypes, setTrainingTypes] = useState([
        { value: "", text: "Sélectionner" },
        { value: "1", text: "Musculation" },
        { value: "2", text: "Cardio" },
        { value: "3", text: "Crossfit" },
        { value: "4", text: "HIIT" }
    ]);
    const trainingDurations = [
        { value: "", text: "Sélectionner" },
        { value: "1", text: "15 - 30 min" },
        { value: "2", text: "30 - 45 min" },
        { value: "3", text: "45 min - 1H" },
        { value: "4", text: "1H - 2H" }
    ];
    const equipments = [
        { value: "", text: "Sélectionner" },
        { value: "1", text: "A poids de corps" },
        { value: "2", text: "Salle de sport" },
        { value: "3", text: "Matériel à la maison" }
    ];
    const levels = [
        { value: "", text: "Sélectionner" },
        { value: "1", text: "Débutant" },
        { value: "2", text: "Habitué" },
        { value: "3", text: "Expert" }
    ];

    const sexes = [
        { value: "", text: "Sélectionner" },
        { value: "1", text: "Homme" },
        { value: "2", text: "Femme" }
    ];
    const handleOnChangeGoal = (e) => {
        switch (e.target.value) {
            case "1":
                setTrainingTypes(() => [{ value: "1", text: "Musculation" }, { value: "2", text: "Cardio" }, { value: "3", text: "Crossfit" }, { value: "4", text: "HIIT" }])
                break;
            case "2":
                setTrainingTypes(() => [{ value: "1", text: "Musculation" }, { value: "3", text: "Crossfit" }])
                break;
            case "3":
                setTrainingTypes(() => [{ value: "3", text: "Crossfit" }])
                break;
            case "4":
                setTrainingTypes(() => [{ value: "1", text: "Musculation" }, { value: "3", text: "Crossfit" }])
                break;
            default:
                break;
        }
    }

    if (data) {
        return (                 
            <div className="container-85">
                <div className="mt-24"></div>
                
                <UserFormStep stepNumber="1" text="Vos préférences ?"/>
                
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-2 flex flex-col">
                    <FormLabel htmlFor="goalId" text="Votre objectif"/>
                    <select
                        onChange={handleOnChangeGoal}
                        name="goalId"
                        ref={form.register({
                            required: "Veuillez choisir votre objectif"
                        })}
                        className="h-14 pl-6 mt-2 light-grey-bg dark-grey gotham-medium text-lg rounded-lg">
                        {
                            goals.map(element => (
                            <option key={element.value} value={element.value}>
                                {element.text}
                            </option>
                            ))
                        }
                    </select>
                    <span className="mt-2 text-red-500 gotham-book">
                        {form.errors.goalId && form.errors.goalId.message}
                    </span>
                    
                    <FormLabel htmlFor="trainingTypeId" text="Votre type d’entrainement"/>
                    <select
                        name="trainingTypeId"
                        ref={form.register({
                            required: "Veuillez choisir votre type d'entrainement"
                        })}
                        className="h-14 pl-6 mt-2 light-grey-bg dark-grey gotham-medium text-lg rounded-lg">
                        {
                            trainingTypes.map(element => (
                            <option key={element.value} value={element.value}>
                                {element.text}
                            </option>
                            ))
                        }
                    </select>
                    <span className="mt-2 text-red-500 gotham-book">
                        {form.errors.trainingTypeId && form.errors.trainingTypeId.message}
                    </span>

                    <FormLabel htmlFor="trainingDurationId" text="Durée d’entrainement"/>
                    <select
                        name="trainingDurationId"
                        ref={form.register({
                            required: "Veuillez choisir votre durée d'entrainement"
                        })}
                        className="h-14 pl-6 mt-2 light-grey-bg dark-grey gotham-medium text-lg rounded-lg">
                        {
                            trainingDurations.map(element => (
                            <option key={element.value} value={element.value}>
                                {element.text}
                            </option>
                            ))
                        }
                    </select>
                    <span className="mt-2 text-red-500 gotham-book">
                        {form.errors.trainingDurationId && form.errors.trainingDurationId.message}
                    </span>

                    <FormLabel htmlFor="equipmentId" text="Votre matériel"/>
                    <select
                        name="equipmentId"
                        ref={form.register({
                            required: "Veuillez choisir votre durée d'entrainement"
                        })}
                        className="h-14 pl-6 mt-2 light-grey-bg dark-grey gotham-medium text-lg rounded-lg">
                        {
                            equipments.map(element => (
                            <option key={element.value} value={element.value}>
                                {element.text}
                            </option>
                            ))
                        }
                    </select>
                    <span className="mt-2 text-red-500 gotham-book">
                        {form.errors.equipmentId && form.errors.equipmentId.message}
                    </span>
                    
                    <div className="mt-8"></div>

                    <UserFormStep stepNumber="2" text="Votre physique ?"/>

                    <FormLabel htmlFor="levelId" text="Votre niveau"/>
                    <select
                        name="levelId"
                        ref={form.register({
                            required: "Veuillez choisir votre niveau"
                        })}
                        className="h-14 pl-6 mt-2 light-grey-bg dark-grey gotham-medium text-lg rounded-lg">
                        {
                            levels.map(element => (
                            <option key={element.value} value={element.value}>
                                {element.text}
                            </option>
                            ))
                        }
                    </select>
                    <span className="mt-2 text-red-500 gotham-book">
                        {form.errors.levelId && form.errors.levelId.message}
                    </span>
                    
                    <FormLabel htmlFor="height" text="Votre taile"/>
                    <FormInput
                        register={form.register}
                        type="text"
                        name="height"
                        placeholder="170 (cm)"
                        required="Taille requise"
                        message="Taille invalide"
                        validation={/^[0-9]{3}$/i}
                    />
                    <span className="mt-2 text-red-500 gotham-book">
                        {form.errors.height && form.errors.height.message}
                    </span>

                    <FormLabel htmlFor="weight" text="Votre poids"/>
                    <FormInput
                        register={form.register}
                        type="number"
                        name="weight"
                        placeholder="65 (Kg)"
                        required="Poids requis"
                        message="Poids invalide"
                        validation={/^[0-9]{2,3}$/i}
                    />
                    <span className="mt-2 text-red-500 gotham-book">
                        {form.errors.weight && form.errors.weight.message}
                    </span>

                    <FormLabel htmlFor="age" text="Votre âge"/>
                    <FormInput
                        register={form.register}
                        type="number"
                        name="age"
                        placeholder="32"
                        required="Age requis"
                        message="Age invalide"
                        validation={/^[0-9]{2}$/i}
                    />
                    <span className="mt-2 text-red-500 gotham-book">
                        {form.errors.age && form.errors.age.message}
                    </span>

                    <FormLabel htmlFor="sexId" text="Votre sexe"/>
                    <select
                        name="sexId"
                        ref={form.register({
                            required: "Veuillez choisir votre sexe"
                        })}
                        className="h-14 pl-6 mt-2 light-grey-bg dark-grey gotham-medium text-lg rounded-lg">
                        {
                            sexes.map(element => (
                            <option key={element.value} value={element.value}>
                                {element.text}
                            </option>
                            ))
                        }
                    </select>
                    <span className="mt-2 text-red-500 gotham-book">
                        {form.errors.sexId && form.errors.sexId.message}
                    </span>

                    <Loader loading={loading}/>
                    {loading && <div className="mt-2"></div> }
                    <Cta text="VALIDER" loading={loading}/>
                </form>
            </div>        
        )
    }
    return (
        <>
            <div className="mt-24"></div>
            <Loader loading={loading}/>
        </>
    )
}

export default UserInfoForm;
