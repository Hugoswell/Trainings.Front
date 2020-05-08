import React from 'react'
import { useStateMachine } from "little-state-machine"
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form"
import UpdateStore from "./UpdateStore"
import UserFormStep from "./UserFormStep"
import FormLabel from "../FormLabel/FormLabel"
import FormInput from "../FormInput/FormInput"

const UserPreferencesForm = () => {
    const { state, action } = useStateMachine(UpdateStore);
    const { handleSubmit, register, errors } = useForm({
        defaultValues: state.userInformation
    });
    const { push } = useHistory();    

    const onSubmit = data => {        
        action(data);
        push("/profile/submission")
    };
    
    const handlePrevious = () => {
        push("/profile/preferences");
    }
    
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

    return (
        <div className="container-85">
            <UserFormStep stepNumber="2" text="Votre physique ?"/>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-2 flex flex-col">
                <FormLabel htmlFor="LevelId" text="Votre niveau"/>
                <select
                    id="LevelId"
                    name="LevelId"
                    ref={register({
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
                    {errors.LevelId && errors.LevelId.message}
                </span>
                
                <FormLabel htmlFor="Height" text="Votre taile"/>
                <FormInput
                    register={register}
                    type="text"
                    name="Height"
                    placeholder="1,70 (m)"
                    required="Taille requise"
                    message="Respecter le format suivant : 1,70"
                    validation={/^[0-9]{1},[0-9]{2}$/i}
                />
                <span className="mt-2 text-red-500 gotham-book">
                    {errors.HeightId && errors.HeightId.message}
                </span>

                <FormLabel htmlFor="Weight" text="Votre poids"/>
                <FormInput
                    register={register}
                    type="number"
                    name="Weight"
                    placeholder="65 (Kg)"
                    required="Poids requis"
                    message="Poids invalide"
                    validation={/^[0-9]{2,3}$/i}
                />
                <span className="mt-2 text-red-500 gotham-book">
                    {errors.WeightId && errors.WeightId.message}
                </span>

                <FormLabel htmlFor="Age" text="Votre âge"/>
                <FormInput
                    register={register}
                    type="number"
                    name="Age"
                    placeholder="32"
                    required="Age requis"
                    message="Age invalide"
                    validation={/^[0-9]{2}$/i}
                />
                <span className="mt-2 text-red-500 gotham-book">
                    {errors.Age && errors.Age.message}
                </span>

                <FormLabel htmlFor="SexId" text="Votre sexe"/>
                <select
                    id="SexId"
                    name="SexId"
                    ref={register({
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
                    {errors.SexId && errors.SexId.message}
                </span>
                
                <div className="mt-8 flex justify-between">
                    <button onClick={handlePrevious} className="h-14 w-45 mb-32 orange-bg rounded text-lg text-white text-center gotham-bold">
                        {"< PRECEDENT"}
                    </button>
                    <button type="submit" className="h-14 w-45 mb-32 orange-bg rounded text-lg text-white text-center gotham-bold">
                        {"VALIDER"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UserPreferencesForm;
