import React from 'react';
import PropTypes from 'prop-types';
// Icon
const PenIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M18.358 9.87l3.771 3.771-13.2 13.2-3.771-3.771 13.2-13.2z"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M24.957 3.271c-1.041-1.041-2.729-1.041-3.772 0.001l-7.543 7.541"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M22.13 13.643l-3.771-3.77 7.541-7.543 3.771 3.77-7.541 7.543z"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M2.329 29.669l2.828-6.599 3.771 3.771z"></path>
  </svg>
  );

PenIcon.propTypes = {
  className: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

PenIcon.defaultProps = {
  className: '',
};

export default PenIcon;
