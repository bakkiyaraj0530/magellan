import React from 'react';
import PropTypes from 'prop-types';
// Icon
const DollarIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M15.333 0.667v30.667"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M10 22c0 3.315 2.687 6 6 6s6-2.685 6-6c0-3.312-2.687-6-6-6s-6-2.685-6-6c0-3.312 2.687-6 6-6s6 2.688 6 6"></path>
  </svg>
  );

DollarIcon.propTypes = {
  className: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

DollarIcon.defaultProps = {
  className: '',
};

export default DollarIcon;
