import React from 'react'

const FormSelect = (props) => {
    
    const tab = props.list;
    //console.log(tab);
    let options;
    tab.forEach(element => {
        options += <option value={element.value}>{element.text}</option>
    });

    return (
        <select
            id={props.name}
            name={props.name}
            ref={props.register({
                required: props.required
              })}
            className="h-14 pl-6 mt-2 light-grey-bg dark-grey gotham-medium text-lg rounded-lg"
        >
            { options }
        </select>
    )
}

export default FormSelect;
