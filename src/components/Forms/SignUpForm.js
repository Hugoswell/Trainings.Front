import React from "react";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <input
        name="firstname"
        ref={register({
          required: "Prénom requis",
          pattern: {
            value: /^[A-Z]+$/i,
            message: "Prénom invalide",
          },
        })}
      />
      {errors.firstname && errors.firstname.message}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;
