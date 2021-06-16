import PropTypes from 'prop-types';
import { formatValue } from '../../utils';
import { NAN_VALUE } from '../../constants';

const Number = ({ format, value }) => {
  if (value === NAN_VALUE || value === null || value === undefined) return NAN_VALUE;

  return formatValue(value, format);
};

Number.propTypes = {
  format: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Number.defaultProps = {
  name: '',
  value: NAN_VALUE,
};

export default Number;
