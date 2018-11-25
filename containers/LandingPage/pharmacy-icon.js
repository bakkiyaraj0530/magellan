import React from 'react';
import PropTypes from 'prop-types';
// Icon
const PharmacyIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M26 10.667c0 5.525-10 20.667-10 20.667s-10-15.141-10-20.667c0-5.523 4.476-10 10-10 5.523 0 10 4.477 10 10z"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M20 10.667c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z"></path>
  </svg>
  );

PharmacyIcon.propTypes = {
  className: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

PharmacyIcon.defaultProps = {
  className: '',
};

export default PharmacyIcon;
