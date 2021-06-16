import styled from 'styled-components';
import Container from '../layout';

export const StyledContainer = styled(Container)`
  position: relative;
  padding-top: 50%;
  overflow: hidden;
`;

export const StyledImg = styled.img`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
