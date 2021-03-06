import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput/FormInput";
import Cta from "../Ctas/Cta";
import Axios from "axios";
import UrlBuilder from "../Helpers/UrlBuilder";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import AuthContext from "../../App/AuthContext";
import Loader from "../Loader/Loader"

const SignUpForm = () => {
	const { handleSubmit, register, errors } = useForm();
	const { setAuth } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const { push } = useHistory();

	const SignUpCallback = (data) => {
		Cookies.set(
			"JWT",
			data,
			{
				expires: 1,
			}
		);
		setAuth(true);
		push("/dashboard");
	};

	const url = UrlBuilder("https://api.trainings.agency", "/auth", "/signup");

	const onSubmit = (values) => {
		setLoading(true);
		Axios.post(url, values)
			.then((response) => {
				setLoading(false);
				SignUpCallback(response.data);
			})
			.catch((error) => {
				setLoading(false);
				console.log(error.message);
			});
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="container-85 mt-8 flex flex-col">
			<FormInput
				register={register}
				type="text"
				name="FirstName"
				placeholder="Prénom"
				required="Prénom requis"
				message="Prénom invalide"
				validation={/^[A-Z]+$/i}
			/>
			<span className="mt-2 text-red-500 gotham-book">
				{errors.FirstName && errors.FirstName.message}
			</span>

			<FormInput
				register={register}
				type="text"
				name="LastName"
				placeholder="Nom"
				required="Nom requis"
				message="Nom invalide"
				validation={/^[A-Z]+$/i}
			/>
			<span className="mt-2 text-red-500 gotham-book">
				{errors.LastName && errors.LastName.message}
			</span>

			<FormInput
				register={register}
				type="email"
				name="Email"
				placeholder="Email"
				required="Email requis"
				message="Email invalide"
				validation={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
			/>
			<span className="mt-2 text-red-500 gotham-book">
				{errors.Email && errors.Email.message}
			</span>

			<FormInput
				register={register}
				type="password"
				name="Password"
				placeholder="Mot de passe"
				required="Mot de passe requis"
				message="8 à 30 caractères"
				validation={/^[A-Z0-9.@&(!)_%+-^¨$*=/:]{8,30}$/i}
			/>
			<span className="mt-2 text-red-500 gotham-book">
				{errors.Password && errors.Password.message}
			</span>

			<Loader loading={loading}/>
			{loading && <div className="mt-2"></div> }
			<Cta text="REJOINDRE TRAININGS" loading={loading}/>
		</form>
	);
};

export default SignUpForm;
