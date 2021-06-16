import PropTypes from 'prop-types';
import React from 'react';
import { NAN_VALUE } from '../../constants';
import Number from '../Number';
import ImageCarousel from '../ImageCarousel';
import StarRating from './StarRating';
import Heart from './Heart';
import StyledContainer, { StyledNumberContainer } from './Styles';
import Title from './Title';

const Product = ({
  id, name, price, imgs, rating, isFavoriate, handleFav,
}) => {
  const imgConfigs = imgs.map((img) => ({ title: name, imgUrl: img }));
  return (
    <StyledContainer>
      <ImageCarousel imgConfigs={imgConfigs} />
      <Title title={name} />
      <StyledNumberContainer>
        <Number value={price} format="$0,0" />
      </StyledNumberContainer>
      <StarRating value={rating} />
      <Heart
        isFavoriate={isFavoriate}
        onClick={() => {
          handleFav(id, name);
        }}
      />
    </StyledContainer>
  );
};

Product.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imgs: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number,
  isFavoriate: PropTypes.bool,
  handleFav: PropTypes.func.isRequired,
};

Product.defaultProps = {
  id: undefined,
  name: '',
  price: NAN_VALUE,
  imgs: [],
  rating: 0,
  isFavoriate: false,
};

export default Product;
