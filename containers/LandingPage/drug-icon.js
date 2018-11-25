import React from 'react';
import PropTypes from 'prop-types';
// Icon
const DrugIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M15.451 28.805c-3.369 3.369-8.885 3.369-12.256 0-3.369-3.369-3.369-8.885 0.001-12.256l12.255-12.256c3.369-3.369 8.885-3.369 12.256 0v0c3.371 3.369 3.371 8.887 0 12.256l-12.256 12.256z"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M9.323 10.421l12.256 12.256"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M14.509 9.949l2.827-2.829c2.083-2.083 5.461-2.083 7.543 0"></path>
  </svg>
  );

DrugIcon.propTypes = {
  className: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

DrugIcon.defaultProps = {
  className: '',
};

export default DrugIcon;
