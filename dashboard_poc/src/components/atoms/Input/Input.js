import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  const {
    type,
    className,
    placeholder,
    value,
    ...attrs
  } = props;

    let isCheckbox=false;
    if(type=="checkbox")
    {
        isCheckbox = true;
    }

  return (
    <>
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      { ...attrs }
    />
    {isCheckbox && <span className="storyLabelStyle">{attrs.label}</span>}
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  placeholder: ""
}

export default Input;