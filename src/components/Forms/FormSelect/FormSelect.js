import React from 'react'

const FormSelect = (props) => {
    return (
        <select
            id={props.name}
            name={props.name}            
            ref={props.register({
                required: props.required
              })}
            className="h-14 pl-6 mt-2 light-grey-bg dark-grey gotham-medium text-lg rounded-lg"
        >
            <option value="">Sélectionner</option>
            <option value="1">Perte de poids</option>
            <option value="2">Prise de poids</option>
            <option value="3">Explosivité</option>
            <option value="4">Force</option>
        </select>
    )
}

export default FormSelect
