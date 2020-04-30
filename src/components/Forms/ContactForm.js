import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput/FormInput";
import FormTextArea from "./FormTextArea/FormTextArea";
import Cta from "../Ctas/Cta";

const ContactForm = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    console.log(values);    
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container-85 mt-24 flex flex-col"
    >
      <FormInput
        register={register}
        type="email"
        name="Email"
        placeholder="Email"
        required="Email requis"
        message="Email invalide"
        validation={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
      />
      <span className="mb-6 text-red-500 gotham-book">
        {errors.Email && errors.Email.message}
      </span>

      <FormTextArea 
        register={register}        
        name="Message"
        placeholder="Message"
        required="Message requis"
      />
      <span className="mb-6 text-red-500 gotham-book">
        {errors.Message && errors.Message.message}
      </span>
      
      <Cta text="ENVOYER" />
    </form>
  );
};

export default ContactForm;
