import React from 'react';
import PropTypes from 'prop-types';
// Icon
const LinkedinIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 32 32" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path fill={props.fill} stroke={props.stroke} d="M8.667 28.667h-6.667v-17.333h6.667v17.333zM5.32 8.667h-0.039c-2.015 0-3.317-1.576-3.317-3.308 0-1.772 1.344-3.216 3.396-3.216 2.055 0 3.317 1.491 3.359 3.263-0.001 1.733-1.304 3.261-3.399 3.261zM20.667 16.667c-1.473 0-2.667 1.195-2.667 2.667v9.333h-6.667c0 0 0.079-16 0-17.333h6.667v1.98c0 0 2.064-1.924 5.251-1.924 3.949 0 6.749 2.859 6.749 8.405v8.872h-6.667v-9.333c0-1.472-1.195-2.667-2.667-2.667z"></path>
  </svg>
  );
LinkedinIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

LinkedinIcon.defaultProps = {
  className: '',
};

export default LinkedinIcon;
