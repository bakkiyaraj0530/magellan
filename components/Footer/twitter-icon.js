import React from 'react';
import PropTypes from 'prop-types';
// Icon
const TwitterIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 32 32" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path fill={props.fill} stroke={props.stroke} d="M31.209 6.445c-1.085 0.484-2 0.5-2.971 0.021 1.251-0.749 1.308-1.276 1.76-2.692-1.171 0.695-2.468 1.2-3.848 1.472-1.103-1.176-2.679-1.913-4.42-1.913-3.347 0-6.059 2.715-6.059 6.059 0 0.475 0.053 0.937 0.156 1.381-5.035-0.252-9.5-2.664-12.488-6.331-0.521 0.895-0.82 1.936-0.82 3.047 0 2.103 1.071 3.956 2.695 5.043-0.993-0.032-1.927-0.304-2.743-0.757-0.001 0.025-0.001 0.049-0.001 0.076 0 2.936 2.088 5.384 4.861 5.941-0.888 0.241-1.824 0.279-2.737 0.105 0.772 2.405 3.009 4.157 5.66 4.207-2.592 2.032-5.807 2.879-8.971 2.508 2.683 1.719 5.865 2.721 9.288 2.721 11.144 0 17.237-9.232 17.237-17.239 0-0.264-0.004-0.524-0.016-0.784 1.181-0.853 2.604-1.649 3.416-2.865z"></path>
  </svg>
  );
TwitterIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

TwitterIcon.defaultProps = {
  className: '',
};

export default TwitterIcon;
