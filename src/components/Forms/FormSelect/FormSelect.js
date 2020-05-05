import React from 'react'

const FormSelect = (props) => {
    return (
        <select name="goal" id="goal" className="h-14 pl-6 mt-2 light-grey-bg dark-grey gotham-medium text-lg rounded-lg">
            <option value="1">Perte de poids</option>
            <option value="1">Prise de poids</option>
            <option value="1">Explosivité</option>
            <option value="1">Force</option>
        </select>
    )
}

export default FormSelect
