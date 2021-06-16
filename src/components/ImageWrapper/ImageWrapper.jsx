import PropTypes from 'prop-types';
import React from 'react';
import { StyledContainer, StyledImg } from './Styles';

const ImageWrapper = ({ imgUrl, title }) => (
  <StyledContainer>
    <StyledImg alt={title} src={imgUrl} />
  </StyledContainer>
);

ImageWrapper.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
};

ImageWrapper.defaultProps = {
  title: '',
};

export default ImageWrapper;
