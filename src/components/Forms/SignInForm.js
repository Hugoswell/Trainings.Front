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

const SignInForm = () => {
	const { handleSubmit, register, errors } = useForm();
	const { setAuth } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const { push } = useHistory();
	const [serverError, setserverError] = useState(false);

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

	let url = UrlBuilder("https://api.trainings.agency", "/auth", "/signin");

	const onSubmit = (values) => {
	setLoading(true);
	url += `?Email=${values.Email}&Password=${values.Password}`

	Axios.get(url)
		.then((response) => {
			setLoading(false);
			SignUpCallback(response.data);
		})
		.catch((error) => {
			setLoading(false);
			setserverError(true);
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
			<span className="mt-2 text-red-500 gotham-book">
				{serverError && `L'email ou le mot de passe est incorrect`}
			</span>
			<Cta text="ME CONNECTER" loading={loading}/>
		</form>
	);
};

export default SignInForm;
