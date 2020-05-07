import React, { useState } from 'react'
import { useStateMachine } from "little-state-machine"
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form"
import UpdateStore from "./UpdateStore"
import UserFormStep from "./UserFormStep"
import FormLabel from "../FormLabel/FormLabel"
import SmallCta from "../../Ctas/SmallCta"

const UserPreferencesForm = () => {
    const { state, action } = useStateMachine(UpdateStore);
    const { handleSubmit, register, errors } = useForm({
        defaultValues: state.userInformation
    });
    const { push } = useHistory();
    const onSubmit = data => {
        action(data);
        push("/profile/physical");
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

    return (
        <div className="container-85">
            <UserFormStep stepNumber="1" text="Vos préférences ?"/>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-2 flex flex-col">
                <FormLabel htmlFor="goal" text="Votre objectif"/>
                <select
                    onChange={handleOnChangeGoal}
                    id="goal"
                    name="goal"
                    ref={register({
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
                    {errors.goal && errors.goal.message}
                </span>
                
                <FormLabel htmlFor="trainingType" text="Votre type d’entrainement"/>
                <select
                    id="trainingType"
                    name="trainingType"
                    ref={register({
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
                    {errors.trainingType && errors.trainingType.message}
                </span>

                <FormLabel htmlFor="trainingDuration" text="Durée d’entrainement"/>
                <select
                    id="trainingDuration"
                    name="trainingDuration"
                    ref={register({
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
                    {errors.trainingDuration && errors.trainingDuration.message}
                </span>

                <FormLabel htmlFor="equipment" text="Votre matériel"/>
                <select
                    id="equipment"
                    name="equipment"
                    ref={register({
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
                    {errors.equipment && errors.equipment.message}
                </span>
                
                <div className="flex justify-center">
                    <SmallCta text="SUIVANT&nbsp;&nbsp;&nbsp;>" />
                </div>
            </form>
        </div>        
    )
}

export default UserPreferencesForm;
