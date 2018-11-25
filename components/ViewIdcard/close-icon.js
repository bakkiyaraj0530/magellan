import React from 'react';
import PropTypes from 'prop-types';
// Icon
const PaymentsIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <polygon fill={props.fill} stroke={props.stroke} fillRule="evenodd" points="24 2.433 14.433 12 24 21.567 21.567 24 12 14.433 2.433 24 0 21.567 9.567 12 0 2.433 2.433 0 12 9.567 21.567 0" />
  </svg>
  );
PaymentsIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

PaymentsIcon.defaultProps = {
  className: '',
};

export default PaymentsIcon;
