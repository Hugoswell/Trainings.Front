import React from 'react'

const FormLabel = (props) => {
    return (
        <label htmlFor={props.htmlFor} className="text-lg orange gotham-medium mt-8">
            {props.text}
        </label>
    )
}

export default FormLabel
