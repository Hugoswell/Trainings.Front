import React from 'react'

const UserFormStep = (props) => {
    return (
        <div className="relative mt-24 h-16 light-orange-bg rounded-full">
            <div className="flex items-center justify-center h-16 w-16 border-solid orange-border border-2 rounded-full">
                <span className="gotham-medium dark-grey">{ props.stepNumber } / 2</span>
            </div>
            <h2 className="absolute absolute-center text-center gotham-medium dark-grey">{ props.text }</h2>
        </div>
    )
}

export default UserFormStep;
