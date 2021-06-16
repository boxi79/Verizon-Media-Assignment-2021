import PropTypes from 'prop-types';
import React from 'react';
import { StyledContainer } from './Styles';

const Footer = ({ value, onClick }) => (
  <StyledContainer onClick={onClick}>
    {value}
    {' '}
    products in wishlist
  </StyledContainer>
);

Footer.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  value: 0,
};

export default Footer;
