import React from "react";

const FormTextArea = (props) => {
  return (
    <textarea
      className="h-64 pl-6 pt-4 mb-2 light-grey-bg dark-grey gotham-medium text-lg rounded-lg placeholder"
      name={props.name}
      placeholder={props.placeholder}
      ref={props.register({
        required: props.required
      })}
    >
    </textarea>
  );
};

export default FormTextArea;
