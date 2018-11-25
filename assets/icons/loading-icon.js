import React from 'react';
import PropTypes from 'prop-types';
// Icon
const LoadingIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 32 32" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path fill={props.fill} d="M31.333 9.333c0 2.577-2.089 4.667-4.667 4.667s-4.667-2.089-4.667-4.667c0-2.577 2.089-4.667 4.667-4.667s4.667 2.089 4.667 4.667z"></path>
    <path fill={props.fill} d="M21.333 4c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z"></path>
    <path fill={props.fill} d="M12 6.667c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z"></path>
    <path fill={props.fill} d="M6.667 14.667c0 1.841-1.492 3.333-3.333 3.333s-3.333-1.492-3.333-3.333c0-1.841 1.492-3.333 3.333-3.333s3.333 1.492 3.333 3.333z"></path>
    <path fill={props.fill} d="M8.667 22.667c0 1.841-1.492 3.333-3.333 3.333s-3.333-1.492-3.333-3.333c0-1.841 1.492-3.333 3.333-3.333s3.333 1.492 3.333 3.333z"></path>
    <path fill={props.fill} d="M14.667 28c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667z"></path>
    <path fill={props.fill} d="M21.167 28.195c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path>
    <path fill={props.fill} d="M25.333 25.833c0 0.736-0.597 1.333-1.333 1.333s-1.333-0.597-1.333-1.333c0-0.736 0.597-1.333 1.333-1.333s1.333 0.597 1.333 1.333z"></path>
    <path fill={props.fill} d="M28.375 22.667c0 0.736-0.597 1.333-1.333 1.333s-1.333-0.597-1.333-1.333c0-0.736 0.597-1.333 1.333-1.333s1.333 0.597 1.333 1.333z"></path>
    <path fill={props.fill} d="M29.333 19.333c0 0.368-0.298 0.667-0.667 0.667s-0.667-0.298-0.667-0.667c0-0.368 0.298-0.667 0.667-0.667s0.667 0.298 0.667 0.667z"></path>

  </svg>
  );
LoadingIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
};
export default LoadingIcon;
