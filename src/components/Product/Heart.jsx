import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledContent = styled.div`
  color: ${({ isFavoriate }) => (isFavoriate ? 'red' : '#666')};
  cursor: pointer;
  font-size: 48px;
`;

const Heart = ({ isFavoriate, onClick }) => (
  <StyledContainer>
    <StyledContent onClick={onClick} isFavoriate={isFavoriate}>♥</StyledContent>
  </StyledContainer>
);

Heart.propTypes = {
  isFavoriate: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Heart.defaultProps = {
  isFavoriate: false,
};

export default Heart;
