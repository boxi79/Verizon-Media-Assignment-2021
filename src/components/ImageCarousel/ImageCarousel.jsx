import PropTypes from 'prop-types';
import React, { useState, useCallback } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import ImageWrapper from '../ImageWrapper';
import NavButton from './NavButton';
import { StyledContainer, StyledButtonGroup } from './Styles';

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

const ImageCarousel = ({ imgConfigs }) => {
  const [index, setIndex] = useState(0);
  const [showNav, setNav] = useState(false);
  const count = imgConfigs.length;
  const isSwipeable = count > 1;

  const handleMouseOver = () => {
    setNav(true);
  };

  const handleMouseLeave = () => {
    setNav(false);
  };

  const handleChangeIndex = (i) => {
    setIndex(i);
  };

  const slideRenderer = useCallback((params) => {
    const config = imgConfigs[params.index] || {};
    const { imgUrl, title } = config;
    return (
      <ImageWrapper imgUrl={imgUrl} title={title} />
    );
  }, []);

  return isSwipeable ? (
    <StyledContainer onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <VirtualizeSwipeableViews
        springConfig={{
          duration: '0.35s',
          easeFunction: 'cubic-bezier(0.15, 0.3, 0.25, 1)',
          delay: '0s',
        }}
        index={index}
        onChangeIndex={handleChangeIndex}
        overscanSlideAfter={1}
        overscanSlideBefore={3}
        slideCount={imgConfigs.length}
        slideRenderer={slideRenderer}
      />
      <StyledButtonGroup showNav={showNav}>
        <NavButton
          size={36}
          color="#eee"
          onClick={() => {
            if (index > 0) handleChangeIndex(index - 1);
          }}
        />
        <NavButton
          deg={180}
          size={36}
          color="#eee"
          onClick={() => {
            if (index < imgConfigs.length - 1) handleChangeIndex(index + 1);
          }}
        />
      </StyledButtonGroup>
    </StyledContainer>
  ) : (
    <StyledContainer>
      <ImageWrapper
        title={(imgConfigs[0] || {}).title}
        imgUrl={(imgConfigs[0] || {}).imgUrl}
      />
    </StyledContainer>
  );
};

ImageCarousel.propTypes = {
  imgConfigs: PropTypes.arrayOf(
    PropTypes.shape({ imgUrl: PropTypes.string, title: PropTypes.string }),
  ),
};

ImageCarousel.defaultProps = {
  imgConfigs: [],
};

export default ImageCarousel;
