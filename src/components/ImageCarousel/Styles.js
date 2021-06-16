import styled from 'styled-components';
import Container from '../layout';

export const StyledContainer = styled(Container)`
  position: relative;
`;

export const StyledButtonContainer = styled.div`
  cursor: pointer;
  color: red;
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  position: absolute;
  padding: 0 8x;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity .5s ease;
  opacity: ${({ showNav }) => (showNav ? '0.5' : '0')};
`;
