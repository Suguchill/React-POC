import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

export const Input = ({ className, value, type, placeholder, label, ...attrs }) => {
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
        {...attrs}
        />
        {isCheckbox && <span className="storyLabelStyle">{label}</span>}
        </>
    );
};

Input.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string
};

Input.defaultProps = {
    className: '',
    value: '',
    type: "text",
    placeholder: ''
};