import PropTypes from 'prop-types';
import React from 'react';

const IconArrow = ({
  color, deg, size, marginTop, marginRight, marginBottom, marginLeft,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 256 512"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      marginTop, marginRight, marginBottom, marginLeft, transform: `rotate(${deg}deg)`,
    }}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
    />
  </svg>
);

IconArrow.defaultProps = {
  color: undefined,
  deg: 0,
  size: 12,
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
};

IconArrow.propTypes = {
  color: PropTypes.string,
  deg: PropTypes.number,
  size: PropTypes.number,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
};

export default IconArrow;
