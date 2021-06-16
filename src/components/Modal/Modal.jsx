import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

const StyledBackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #333;
  opacity: 0.75;
  z-index: 10;
  transition: opacity 0.3s;
`;

const StyledContainer = styled.div`
  position: fixed;
  width: ${({ width }) => `${width}px` || '100%'};
  max-height: 90%;
  max-width: 100%;
  min-width: 300px;
  left: 50%;
  top: 50%;
  bottom: auto;
  right: auto;
  padding: 15px;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0 0 10px rgba(100, 100, 100, 0.7);
  overflow-x: auto;
  overflow-y: auto;
  z-index: 15;
`;

const StyledCloseButton = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
`;

let modalNode;

if (typeof window !== 'undefined') {
  modalNode = document.createElement('div');
  modalNode.classList.add('modal-container');
  document.body.appendChild(modalNode);
}

const Modal = ({
  opened,
  onClose,
  width,
  children,
}) => (
  opened
    && modalNode
    && createPortal(
      <>
        <StyledBackDrop onClick={onClose} />
        <StyledContainer width={width}>
          <StyledCloseButton onClick={onClose}>&#x2716;</StyledCloseButton>
          {children}
        </StyledContainer>
      </>, modalNode,
    )
);

export default Modal;
