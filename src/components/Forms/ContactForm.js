import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput/FormInput";
import FormTextArea from "./FormTextArea/FormTextArea";
import Cta from "../Ctas/Cta";
import Axios from "axios"
import Loader from "../Loader/Loader"
import { useHistory } from "react-router-dom";

const ContactForm = () => {
	const { handleSubmit, register, errors } = useForm();
	const [loading, setLoading] = useState(false);
	const { push } = useHistory();

	const onSubmit = (values) => {
	setLoading(true);
	const postUrl = "https://formspree.io/mnqgjdyp";    
		Axios.post(postUrl, values)
		.then((response) => {
			setLoading(false);
			push("/dashboard");
		})
		.catch((error) => {
			setLoading(false);
			console.log(error.message);
		});
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="container-85 mt-24 flex flex-col"
		>
		<FormInput
			register={register}
			type="email"
			name="_replyto"
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

		<Loader loading={loading}/>
		{loading && <div className="mt-2"></div> }
		<Cta text="ENVOYER" loading={loading}/>
	</form>
	);
};

export default ContactForm;
