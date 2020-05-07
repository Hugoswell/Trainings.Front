import React, { useState, useEffect } from 'react'
import { useStateMachine } from "little-state-machine"
import UpdateStore from "./UpdateStore"
import Loader from "../../Loader/Loader"
import UrlBuilder from "../../Helpers/UrlBuilder"
import Axios from "axios"

const UserSubmit = () => {
    const [loading, setLoading] = useState(true);
    const { state } = useStateMachine(UpdateStore);
    const url = UrlBuilder("https://api.trainings.agency", "/user", "/create");

    useEffect(() => {
        Axios.post(url, state.userInformation)
		.then((response) => {
            setLoading(false);            
		})
		.catch((error) => {
			setLoading(false);
			console.log(error.data);
		});
    });

    return (
        <>
            <div className="mt-20"></div>
            <Loader loading={loading}/>
        </>
    )
}

export default UserSubmit;
