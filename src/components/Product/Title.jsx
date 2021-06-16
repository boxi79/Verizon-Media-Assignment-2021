import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledTitleContainer,
} from './Styles';

const Title = ({ title }) => (
  <StyledTitleContainer>{title}</StyledTitleContainer>
);

Title.propTypes = {
  title: PropTypes.string,
};

Title.defaultProps = {
  title: undefined,
};

export default Title;
