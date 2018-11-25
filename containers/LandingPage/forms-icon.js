import React from 'react';
import PropTypes from 'prop-types';
// Icon
const FormsIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M27.333 24.667h-17.333v-22.667h10.667l6.667 6.667z"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M24.667 24.667v2.667h-17.333v-22.667h2.667"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M22 27.333v2.667h-17.333v-22.667h2.667"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M20.667 2v6.667h6.667"></path>
  </svg>
  );

FormsIcon.propTypes = {
  className: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

FormsIcon.defaultProps = {
  className: '',
};

export default FormsIcon;
