import React from 'react'
import { useStateMachine } from "little-state-machine"
import { useForm } from "react-hook-form"
import FormInput from "../FormInput/FormInput"
import UpdateStore from "./UpdateStore"

const UserPreferencesForm = () => {
    const { state, action } = useStateMachine(UpdateStore);
    const { handleSubmit, register, errors } = useForm({
        defaultValues: state.profileInformation
    });
    const onSubmit = data => {
        action(data);
        console.log(state.profileInformation);
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-24">
            <h2>Step 2</h2>
            <FormInput
                register={register}
                type="text"
                name="age"
                placeholder="Age"
                required="Age requis"
            />
            <span className="mb-6 text-red-500 gotham-book">
                {errors.age && errors.age.message}
            </span>

            <FormInput
                register={register}
                type="text"
                name="yearsOfExp"
                placeholder="Années d'expérience"
                required="Années d'expérience requis"
            />
            <span className="mb-6 text-red-500 gotham-book">
                {errors.yearsOfExp && errors.yearsOfExp.message}
            </span>
            <input type="submit"/>
        </form>
    )
}

export default UserPreferencesForm;
