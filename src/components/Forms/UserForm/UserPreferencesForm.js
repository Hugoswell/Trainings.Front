import React from 'react'
import { useStateMachine } from "little-state-machine"
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form"
import UpdateStore from "./UpdateStore"
import UserFormStep from "./UserFormStep"
import FormLabel from "../FormLabel/FormLabel"
import FormSelect from "../FormSelect/FormSelect"

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
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col">
                <FormLabel htmlFor="goal" text="Votre objectif"/>
                <FormSelect />

                <span className="mb-6 text-red-500 gotham-book">
                    {errors.FirstName && errors.FirstName.message}
                </span>

                <FormLabel htmlFor="" text=""/>
                <span className="mb-6 text-red-500 gotham-book">
                    {errors.LastName && errors.LastName.message}
                </span>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default UserPreferencesForm;
