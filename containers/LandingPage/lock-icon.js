import React from 'react';
import PropTypes from 'prop-types';
// Icon
const LockIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="butt" strokeLinejoin="round" d="M16.667 20c0 0.368-0.298 0.667-0.667 0.667s-0.667-0.298-0.667-0.667c0-0.368 0.298-0.667 0.667-0.667s0.667 0.298 0.667 0.667z"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M16 20.667v4"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="butt" strokeLinejoin="round" d="M4.667 12.667h22.667v18.667h-22.667v-18.667z"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="butt" strokeLinejoin="round" d="M8.667 8c0-4.051 3.283-7.333 7.333-7.333s7.333 3.283 7.333 7.333v4.667h-14.667v-4.667z"></path>
  </svg>
  );

LockIcon.propTypes = {
  className: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

LockIcon.defaultProps = {
  className: '',
};

export default LockIcon;
