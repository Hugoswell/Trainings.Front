import React from "react"
import { Link } from "react-router-dom"

const FillInformationCta = (props) => {
    return (
        <Link to="/profile" className="flex flex-col container-85 h-12">
            <button
                type="text"
                className="py-4 px-2 dark-grey-bg rounded-lg text-white text-center gotham-medium leading-none"
                >
                {props.text}
            </button>
        </Link>
    );
}

export default FillInformationCta;