import React from 'react';
import PropTypes from 'prop-types';
// Icon
const FlagIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 32 32" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path fill={props.fill} stroke={props.stroke} d="M3.333 0.667v30.667"></path>
    <path fill={props.fill} stroke={props.stroke} d="M28.667 4.257c0 0-11.333 3.076-11.333-0.924s-11.333 0-11.333 0v16c0 0 11.333-4 11.333 0s11.333 0.98 11.333 0.98v-16.056z"></path>
  </svg>
  );

FlagIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

FlagIcon.defaultProps = {
  className: '',
};

export default FlagIcon;
