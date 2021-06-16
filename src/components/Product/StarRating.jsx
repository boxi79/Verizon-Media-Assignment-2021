import PropTypes from 'prop-types';
import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { StyledStarRatingContainer } from './Styles';

const StarRating = ({ value }) => (
  <StyledStarRatingContainer>
    <ReactStars
      isHalf
      value={value}
      count={5}
      edit={false}
      size={24}
      activeColor="#ffd700"
    />
  </StyledStarRatingContainer>
);

StarRating.propTypes = {
  value: PropTypes.number,
};

StarRating.defaultProps = {
  value: 0,
};

export default StarRating;
