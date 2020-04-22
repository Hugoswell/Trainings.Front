import React from "react";

const FormInput = (props) => {
  return (
    <input
      className="h-14 pl-6 mb-2 light-grey-bg dark-grey gotham-medium text-lg rounded-lg placeholder"
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      ref={props.register({
        required: props.required,
        pattern: {
          value: props.validation,
          message: props.message,
        },
      })}
    />
  );
};

export default FormInput;
