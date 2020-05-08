import React, { useState, useEffect, useContext } from 'react'
import { useStateMachine } from "little-state-machine"
import UpdateStore from "./UpdateStore"
import Loader from "../../Loader/Loader"
import UrlBuilder from "../../Helpers/UrlBuilder"
import Axios from "axios"
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import AuthContext from "../../../App/AuthContext";

const UserSubmit = () => {
    const jwt = Cookies.get("JWT");
    const { setAuth } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const { state } = useStateMachine(UpdateStore);
    const { push } = useHistory();
    const url = UrlBuilder("https://api.trainings.agency", "/userinfo", "/create");

    useEffect(() => {
        if (!jwt) {
			setAuth(false);
			push("/signin");
        }
        else {
            Axios.post(url, state.userInformation, { headers: {  Authorization: `Bearer ${jwt}` } })
            .then((response) => {
                setLoading(false);
                push("/dashboard");
            })
            .catch((error) => {
                setLoading(false);
                console.log(error.data);
            });
        }
    });

    return (
        <>
            <div className="mt-20"></div>
            <Loader loading={loading}/>
        </>
    )
}

export default UserSubmit;
