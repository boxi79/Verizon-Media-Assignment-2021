import PropTypes from 'prop-types';
import React from 'react';

const IconSvg = ({
  className,
  color,
  viewBox,
  deg,
  size,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  verticalAlign,
  children,
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    style={{
      color,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      verticalAlign,
      transform: `rotate(${deg}deg)`,
    }}
  >
    {children}
  </svg>
);

const IconDefaultProps = {
  color: undefined,
  deg: 0,
  size: 20,
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  verticalAlign: 'baseline',
};

const IconPropTypes = {
  color: PropTypes.string,
  deg: PropTypes.number,
  size: PropTypes.number,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  verticalAlign: PropTypes.string,
};

IconSvg.defaultProps = {
  className: '',
  ...IconDefaultProps,
};

IconSvg.propTypes = {
  className: PropTypes.string,
  viewBox: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  ...IconPropTypes,
};

export default IconSvg;
export { IconDefaultProps, IconPropTypes };
