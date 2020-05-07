import React from 'react'
import { useStateMachine } from "little-state-machine"
import UpdateStore from "./UpdateStore"

const UserFormFinish = () => {
    const { state } = useStateMachine(UpdateStore);
    console.log(state.userInformation);

    return (
        <div>
            Finish form
        </div>
    )
}

export default UserFormFinish;
