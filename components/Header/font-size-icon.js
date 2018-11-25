import React from 'react';
import PropTypes from 'prop-types';
// Icon
const FontSizeIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 32 32" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path fill={props.fill} d="M24 29.333h-1.075l-9.024-26.431c-0.407-1.197-2.115-1.2-2.524 0.001l-8.999 26.429h-1.045c-0.737 0-1.333 0.596-1.333 1.333s0.596 1.333 1.333 1.333h4.028c0.737 0 1.333-0.596 1.333-1.333 0-0.717-0.507-1.333-1.499-1.333l2.269-6.667h10.367l2.276 6.667c-0.961 0-1.469 0.627-1.469 1.333 0 0.737 0.596 1.333 1.333 1.333h4.028c0.737 0 1.333-0.596 1.333-1.333s-0.596-1.333-1.333-1.333zM8.372 20l4.268-12.535 4.281 12.535h-8.549z"></path>
  </svg>
  );
FontSizeIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
};

FontSizeIcon.defaultProps = {
  className: '',
};

export default FontSizeIcon;
