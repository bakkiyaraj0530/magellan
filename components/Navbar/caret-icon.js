import React from 'react';
import PropTypes from 'prop-types';
// Icon
const CaretIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 16" aria-labelledby={props.title} id={props.id}>
    <title id={props.title}>{props.titleText}</title>
    <path fill={props.fill} stroke={props.stroke} fillRule="evenodd" d="M0,6.78183613 C0,6.68706764 0.0197431392,6.58835194 0.0592300099,6.48568608 C0.0987168806,6.38302022 0.157946298,6.29220178 0.236920039,6.21322804 C0.394867522,6.0710753 0.584401658,6 0.805528134,6 C1.02665461,6 1.21618875,6.0710753 1.37413623,6.21322804 L12.082922,16.9220138 L22.6258638,6.37907206 C22.7838113,6.22112458 22.9733454,6.14215202 23.1944719,6.14215202 C23.4155983,6.14215202 23.6051325,6.22112458 23.76308,6.37907206 C23.9210274,6.53701955 24,6.72655368 24,6.94768016 C24,7.16880663 23.9210274,7.35834077 23.76308,7.51628825 L12.6515301,18.6278381 C12.4935826,18.7857856 12.3040485,18.8647581 12.082922,18.8647581 C11.8617955,18.8647581 11.6722614,18.7857856 11.5143139,18.6278381 L0.236920039,7.37413623 C0.157946298,7.29516249 0.0987168806,7.20434405 0.0592300099,7.10167818 C0.0197431392,6.99901232 0,6.89239937 0,6.78183613 Z" transform="translate(0 -6)" />
  </svg>
  );
CaretIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

CaretIcon.defaultProps = {
  className: '',
};

export default CaretIcon;
