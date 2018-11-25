import React from 'react';
import PropTypes from 'prop-types';
// Icon
const FormularyIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 1000 1000" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path fill={props.fill} stroke={props.stroke} strokeMiterlimit="10" strokeWidth="12px" d="M608.05,428.25a195.26,195.26,0,0,0-75.09,15v-79C533,262,457.28,178.89,364.24,178.89S195.52,262,195.52,364.25V635.76c0,102.2,75.68,185.34,168.72,185.34,42.59,0,82.78-17.58,114.07-49.34a195.4,195.4,0,0,0,129.75,49.34c108.31,0,196.43-88.12,196.43-196.43S716.37,428.25,608.05,428.25Zm180,188.4H428.09c4.25-95.72,83.22-172.35,180-172.35S783.77,520.94,788,616.65ZM364.24,194.95c84.18,0,152.67,75.95,152.67,169.3v86.58A197.34,197.34,0,0,0,463.66,492H211.57V364.25C211.57,270.9,280.06,194.95,364.24,194.95ZM211.57,635.76V508H450.38a195.29,195.29,0,0,0,16.3,252.69c-28.23,28.54-64.31,44.33-102.44,44.33C280.06,805.05,211.57,729.1,211.57,635.76ZM608.05,805.05c-96.74,0-175.72-76.63-180-172.35H788C783.77,728.42,704.8,805.05,608.05,805.05Z" />
  </svg>
  );
FormularyIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

FormularyIcon.defaultProps = {
  className: '',
};

export default FormularyIcon;
