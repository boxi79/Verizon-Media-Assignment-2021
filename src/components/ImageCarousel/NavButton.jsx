import PropTypes from 'prop-types';
import React from 'react';
import { IconArrow } from '../Icons';
import { StyledButtonContainer } from './Styles';

const NavButton = ({
  deg, size, color, onClick,
}) => (
  <StyledButtonContainer onClick={onClick}>
    <IconArrow deg={deg} size={size} color={color} />
  </StyledButtonContainer>
);

NavButton.propTypes = {
  deg: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

NavButton.defaultProps = {
  deg: 0,
  size: 12,
  color: undefined,
};

export default NavButton;
