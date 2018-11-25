import React from 'react';
import PropTypes from 'prop-types';
// Icon
const FlagIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path fill={props.fill} stroke={props.stroke} fillRule="evenodd" d="M23.8846154,2.875 C23.9615388,3.0416675 24,3.16666625 24,3.25 C24,3.33333375 23.9615388,3.4583325 23.8846154,3.625 L9.51923077,23.625 C9.28846038,23.8750013 9.11538519,24 9,24 C8.80769135,24 8.61538558,23.8958344 8.42307692,23.6875 L0.288461538,15.1875 L0.115384615,15 C0.0384611538,14.8333325 0,14.7083337 0,14.625 C0,14.5833331 0.0384611538,14.4791675 0.115384615,14.3125 L0.230769231,14.1875 C1.30769769,12.9374937 2.15384308,11.97917 2.76923077,11.3125 C3.00000115,11.0624987 3.15384577,10.9375 3.23076923,10.9375 C3.38461615,10.9375 3.57692192,11.0624987 3.80769231,11.3125 L8.42307692,16.1875 L19.9615385,0.125 C20.0384619,0.04166625 20.1538454,0 20.3076923,0 C20.4230775,0 20.5576915,0.04166625 20.7115385,0.125 L23.8846154,2.875 Z" />
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
