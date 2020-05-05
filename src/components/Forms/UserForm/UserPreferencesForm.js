import React from 'react'
import { useStateMachine } from "little-state-machine"
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form"
import UpdateStore from "./UpdateStore"
import UserFormStep from "./UserFormStep"
import FormLabel from "../FormLabel/FormLabel"
import FormSelect from "../FormSelect/FormSelect"
import SmallCta from "../../Ctas/SmallCta"

const UserPreferencesForm = () => {
    const { state, action } = useStateMachine(UpdateStore);
    const { handleSubmit, register, errors } = useForm({
        defaultValues: state.profileInformation
    });
    const { push } = useHistory();
    const onSubmit = data => {
        action(data);
        push("/profile/physical");
    };

    return (        
        <div className="container-85">
            <UserFormStep stepNumber="1" text="Vos préférences ?"/>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-2 flex flex-col">
                <FormLabel htmlFor="goal" text="Votre objectif"/>
                <FormSelect name="goal" register={register} required="Veuillez choisir un objectif"/>
                <span className="mt-2 text-red-500 gotham-book">
                    {errors.goal && errors.goal.message}
                </span>
                
                <FormLabel htmlFor="trainingType" text="Votre type d’entrainement"/>
                <FormSelect name="trainingType" register={register} required="Veuillez choisir un type d'entrainement"/>
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

                <div className="flex justify-center">
                    <SmallCta text="SUIVANT" />
                </div>                
            </form>
        </div>        
    )
}

export default UserPreferencesForm;
