import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { className,
      href,
      value,
      ...attrs } = props;
  let Tag = "button";

  if (href) {
    Tag = 'a';
    attrs.href = href;
  }
  return (
    <Tag className={ className } { ...attrs } > {value} </Tag>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string
}

Button.defaultProps = {
  value: 'Button Value'
}

export default Button;