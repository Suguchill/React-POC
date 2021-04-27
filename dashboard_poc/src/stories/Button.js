import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Primary UI component for user interaction
 */
// export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//   return (
//     <button
//       type="button"
//       className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
//       style={backgroundColor && { backgroundColor }}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };

export const Button = ({ className, color, value, href, ...attrs }) => {
  let Tag = "button"
  if (href) {
    Tag = 'a';
    attrs.href = href;
  }
  return (
    <Tag
      type="button"
      className={className}
      style={color && { color }}
      {...attrs}
    >
      {value}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.string
};

Button.defaultProps = {
  className: 'btn btn-primary',
  value: 'button',
  href: '',
  color:'white'
};