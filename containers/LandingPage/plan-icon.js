import React from 'react';
import PropTypes from 'prop-types';
// Icon
const PlanIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M15.333 6.667c0-2.579 6.864-4.667 14.667-4.667v22c-7.803 0-14.667 2.088-14.667 4.667 0-2.579-6.865-4.667-14.667-4.667v-22c7.801 0 14.667 2.088 14.667 4.667z"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M15.333 6.667v21.833"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M12 9.653c-2.147-0.821-5.183-1.417-8.667-1.653"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M12 13.653c-2.147-0.821-5.183-1.417-8.667-1.653"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M12 17.653c-2.147-0.821-5.183-1.417-8.667-1.653"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M12 21.653c-2.147-0.821-5.183-1.417-8.667-1.653"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M18.667 9.653c2.147-0.823 5.183-1.417 8.667-1.653"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M18.667 13.653c2.147-0.823 5.183-1.417 8.667-1.653"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M18.667 17.653c2.147-0.823 5.183-1.417 8.667-1.653"></path>
    <path fill={props.fill} stroke={props.stroke} strokeWidth="1.3333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" d="M18.667 21.653c2.147-0.823 5.183-1.417 8.667-1.653"></path>
  </svg>
  );

PlanIcon.propTypes = {
  className: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

PlanIcon.defaultProps = {
  className: '',
};

export default PlanIcon;
