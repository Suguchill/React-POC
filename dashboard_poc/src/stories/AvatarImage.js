import React from 'react';
import PropTypes from 'prop-types';
import './avatarImage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './assets/Home.png'

export const AvatarImage = ({src, className, alt, ...attrs}) => {
  return (
    <img
      src={src}
      className={className}
      alt={alt}
      { ...attrs } 
    />
  );
};

AvatarImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string
};

AvatarImage.defaultProps = {
    className: 'rounded-circle',
    src: Home,
    alt: 'Image'
};