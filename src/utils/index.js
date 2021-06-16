import numeral from 'numeral';

export const formatValue = (value, formatString = '') => numeral(value).format(formatString);
