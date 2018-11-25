import React from 'react';
import PropTypes from 'prop-types';
// Icon
const YoutubeIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 32 32" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path fill={props.fill} stroke={props.stroke} d="M31.333 10.585c0-2.533-2.052-4.585-4.584-4.585h-21.499c-2.532 0-4.584 2.052-4.584 4.585v12.161c0 2.533 2.052 4.585 4.584 4.585h21.5c2.531 0 4.584-2.052 4.584-4.585v-12.161zM12.667 21.921v-11.549l9.025 5.775-9.025 5.775z"></path>
  </svg>
  );
YoutubeIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

YoutubeIcon.defaultProps = {
  className: '',
};

export default YoutubeIcon;
