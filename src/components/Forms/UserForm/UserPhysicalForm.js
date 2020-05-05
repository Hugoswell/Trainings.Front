import React from 'react'
import { useStateMachine } from "little-state-machine"
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form"
import UpdateStore from "./UpdateStore"
import UserFormStep from "./UserFormStep"
import FormLabel from "../FormLabel/FormLabel"
import FormSelect from "../FormSelect/FormSelect"
import FormInput from "../FormInput/FormInput"

const UserPreferencesForm = () => {
    const { state, action } = useStateMachine(UpdateStore);
    const { handleSubmit, register, errors } = useForm({
        defaultValues: state.profileInformation
    });
    const { push } = useHistory();

    const onSubmit = data => {
        action(data);
        console.log(state.profileInformation);
    };
    
    const handlePrevious = () => {
        push("/profile/preferences");
    }
    
    return (
        <div className="container-85">
            <UserFormStep stepNumber="2" text="Votre physique ?"/>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-2 flex flex-col">
                <FormLabel htmlFor="level" text="Votre niveau"/>
                <FormSelect name="level" register={register} required="Veuillez choisir un niveau"/>
                <span className="mt-2 text-red-500 gotham-book">
                    {errors.level && errors.level.message}
                </span>
                
                <FormLabel htmlFor="height" text="Votre taile"/>
                <FormInput
                    register={register}
                    type="number"
                    name="height"
                    placeholder="170 (cm)"
                    required="Taille requise"
                    message="Taille invalide"
                    validation={/^[0-9]{2,3}$/i}
                />
                <span className="mt-2 text-red-500 gotham-book">
                    {errors.trainingType && errors.trainingType.message}
                </span>

                <FormLabel htmlFor="durationRange" text="Durée d’entrainement"/>
                <FormSelect name="durationRange" register={register} required="Veuillez choisir une tranche de temps par entrainement"/>
                <span className="mt-2 text-red-500 gotham-book">
                    {errors.durationRange && errors.durationRange.message}
                </span>

                <FormLabel htmlFor="equipment" text="Votre matériel"/>
                <FormSelect name="equipment" register={register} required="Veuillez choisir votre contexte d'entrainement"/>
                <span className="mt-2 text-red-500 gotham-book">
                    {errors.equipment && errors.equipment.message}
                </span>

                <div className="flex justify-between">
                    <button onClick={handlePrevious} className="h-14 w-45 mt-8 mb-32 orange-bg rounded text-lg text-white text-center gotham-bold">
                        {"< PRECEDENT"}
                    </button>
                    <button type="submit" className="h-14 w-45 mt-8 mb-32 orange-bg rounded text-lg text-white text-center gotham-bold">
                        {"VALIDER"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UserPreferencesForm;
