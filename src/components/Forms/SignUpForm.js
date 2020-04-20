import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput/FormInput";

const SignUpForm = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container-85 mt-8 flex flex-col"
    >
      <FormInput
        register={register}
        type="text"
        name="firstname"
        placeholder="Prénom*"
        required="Prénom requis"
        message="Prénom invalide"
        validation={/^[A-Z]+$/i}
      />
      <span className="mb-6 text-red-500 gotham-book">
        {errors.firstname && errors.firstname.message}
      </span>

      <FormInput
        register={register}
        type="text"
        name="lastname"
        placeholder="Nom*"
        required="Nom requis"
        message="Nom invalide"
        validation={/^[A-Z]+$/i}
      />
      <span className="mb-6 text-red-500 gotham-book">
        {errors.lastname && errors.lastname.message}
      </span>

      <FormInput
        register={register}
        name="email"
        placeholder="Email*"
        required="Email requis"
        message="Email invalide"
        validation={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
      />
      <span className="mb-6 text-red-500 gotham-book">
        {errors.email && errors.email.message}
      </span>

      <FormInput
        register={register}
        type="password"
        name="password"
        placeholder="Mot de passe*"
        required="Mot de passe requis"
        message="8 à 30 caractères"
        validation={/^[A-Z0-9.@&(!)_%+-^¨$*=/:]{8,30}$/i}
      />
      <span className="mb-6 text-red-500 gotham-book">
        {errors.password && errors.password.message}
      </span>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;
