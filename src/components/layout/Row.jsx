import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { flexbox, layout } from 'styled-system';

const formatWidth = (num) => (typeof num === 'number' && num <= 1 ? `${num * 100}%` : num);

// Smallest width% for each breakpoint
const cols = {
  '1/4': { lg: formatWidth(1 / 4), md: formatWidth(1 / 3), sm: formatWidth(1 / 2) },
};

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;

  ${flexbox}
`;

const Cell = styled.div`
  display: flex;
  flex-basis: 100%;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;

  > * {
    width: 100%;
  }

  ${flexbox}
  ${layout}
`;

const Col = ({ col, width = {}, children }) => {
  const reducer = (acc, [key, value]) => ({ ...acc, [key]: formatWidth(value) });
  const flexBasis = {
    ...cols[col],
    ...Object.entries(width).reduce(reducer, {}),
  };
  return <Cell flexBasis={flexBasis} width={flexBasis}>{children}</Cell>;
};

Col.propTypes = {
  children: PropTypes.node,
  col: PropTypes.string,
  width: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

Col.defaultProps = {
  children: undefined,
  col: '',
  width: undefined,
};

export { Row, Col };
