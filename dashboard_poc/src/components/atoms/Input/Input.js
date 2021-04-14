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

  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      { ...attrs }
    />
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