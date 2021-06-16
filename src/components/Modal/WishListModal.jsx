import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const StyledContainer = styled.div`
  margin-top: 24px;
`;

const StyledItem = styled.div`
  box-sizing: border-box;
  padding: 6px 0;
`;

const StyledTitle = styled.div`
  font-size: 24px;
  color: #4a00a0
`;

const WishListModal = ({ opened, onClose, products }) => (
  <Modal
    opened={opened}
    onClose={onClose}
  >
    <StyledTitle>Wishlist</StyledTitle>
    <StyledContainer>
      {
        Array.from(products.values()).map(
          (product) => <StyledItem key={product}>{product}</StyledItem>,
        )
      }
    </StyledContainer>
  </Modal>
);

WishListModal.propTypes = {
  opened: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.string),
};

WishListModal.defaultProps = {
  opened: false,
  products: [],
};

export default WishListModal;
