import React from "react";
import PropTypes from "prop-types";

const AvatarImage = (props) => {
  const {
    src,
    className,
    alt,
    ...attrs
  } = props;

  return (
    <img
      src={src}
      className={className}
      alt={alt}
      { ...attrs } 
    />
  );
}

AvatarImage.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
};

AvatarImage.defaultProps = {
  alt: 'Image',
}

export default AvatarImage;