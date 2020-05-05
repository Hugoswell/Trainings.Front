import React from 'react'
import { useStateMachine } from "little-state-machine"
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form"
import FormInput from "../FormInput/FormInput"
import UpdateStore from "./UpdateStore"
import Step from "./Step"

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
            <Step step="1" text="Vos préférences ?"/>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                <h2>Step 1</h2>
                <FormInput
                    register={register}
                    type="text"
                    name="firstName"
                    placeholder="Prénom"
                    required="Prénom requis"
                    message="Prénom invalide"
                    validation={/^[A-Z]+$/i}
                />
                <span className="mb-6 text-red-500 gotham-book">
                    {errors.FirstName && errors.FirstName.message}
                </span>

                <FormInput
                    register={register}
                    type="text"
                    name="lastName"
                    placeholder="Nom"
                    required="Nom requis"
                    message="Nom invalide"
                    validation={/^[A-Z]+$/i}
                />
                <span className="mb-6 text-red-500 gotham-book">
                    {errors.LastName && errors.LastName.message}
                </span>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default UserPreferencesForm;
