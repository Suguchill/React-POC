import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

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
  let mode = '';
  if(className == "btn btn-primary")
  {
    mode = "storybook-button--primary";
  }
  else if(className == "btn btn-secondary")
  {
    mode = "storybook-button--secondary";
  }
  else if(className == "btn btn-dark")
  {
    mode = "storybook-button--dark";
  }

  let Tag = "button"
  if (href) {
    Tag = 'a';
    attrs.href = href;
  }
  return (
    <Tag
      type="button"
      className={['storybook-button', mode].join(' ')}
      style={color && { color }}
      {...attrs}
    >
      {value}
    </Tag>
  );
};

// Button.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary: PropTypes.bool,
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,

// };

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
};
