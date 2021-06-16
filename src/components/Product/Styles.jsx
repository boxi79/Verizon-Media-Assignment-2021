import styled from 'styled-components';
import Container from '../layout';

const StyledContainer = styled(Container)`
  border: 1px solid #999;
  box-shadow: 0 1px 6px 0 #999;
  border-radius: 6px;
`;

export const StyledTitleContainer = styled.div`
  overflow: hidden;
  font-size: 24px;
  font-weight: bold;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const StyledNumberContainer = styled.div`
  text-align: left;
  margin-top: 12px;
  font-size: 18px;
  font-weight: bold;
`;

export const StyledStarRatingContainer = styled.div`
  margin-top: 12px;
`;

export default StyledContainer;
