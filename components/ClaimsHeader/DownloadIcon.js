import React from 'react';
import PropTypes from 'prop-types';

// Icon
const DownloadIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" aria-labelledby="DownloadIcon">
    <title id="DownloadIcon">DownloadIcon</title>
    <g fill={props.fill} >
      <path d="M14,5 L22,5 L22,24 L2,24 L2,5 L10,5 L10,6 L3,6 L3,23 L21,23 L21,6 L14,6 L14,5 Z M8.0625,11.75 L11.5,15.1875 L11.5,0 L12.5,0 L12.5,15.1875 L15.9375,11.75 L16.625,12.5 L12,17.125 L7.375,12.5 L8.0625,11.75 Z" transform="translate(-2)" />
    </g>
  </svg>
    );
DownloadIcon.propTypes = {
  fill: PropTypes.string.isRequired,
};
export default DownloadIcon;
