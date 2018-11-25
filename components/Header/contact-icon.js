import React from 'react';
import PropTypes from 'prop-types';
// Icon
const ContactIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 32 32" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path fill={props.fill} stroke={props.stroke} d="M31.333 24c0 1.104-0.896 2-2 2h-26.667c-1.104 0-2-0.896-2-2v-16c0-1.105 0.896-2 2-2h26.667c1.104 0 2 0.895 2 2v16z"></path>
    <path fill={props.fill} stroke={props.stroke} d="M27.333 11.333l-11.333 7.333-11.333-7.333"></path>
    <path fill={props.fill} stroke={props.stroke} d="M4.667 21.333l4.667-2.667"></path>
    <path fill={props.fill} stroke={props.stroke} d="M27.333 21.333l-4.667-2.667"></path>
  </svg>
  );
ContactIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};
ContactIcon.defaultProps = {
  className: '',
};
export default ContactIcon;
