import React from 'react';
import PropTypes from 'prop-types';
// Icon
const PlanSelectionIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 1000 1000" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path stroke={props.stroke} fill={props.fill} strokeMiterlimit="10" strokeWidth="5px" d="M655.38,433.51h21.19V320.18a10.66,10.66,0,0,0-3.11-7.5L546.33,185.55a10.66,10.66,0,0,0-7.5-3.11H242.14a10.59,10.59,0,0,0-10.6,10.6V744a10.59,10.59,0,0,0,10.6,10.6h267.2V733.42H252.74V203.62h275.5V320.18a10.59,10.59,0,0,0,10.6,10.6H655.38Zm-106-214.9,91,91h-91Z" />
    <path stroke={props.stroke} fill={props.fill} strokeMiterlimit="10" strokeWidth="5px" d="M708.36,500.31c-87.64,0-158.94,71.3-158.94,158.94s71.3,158.94,158.94,158.94S867.3,746.9,867.3,659.25,796,500.31,708.36,500.31Zm0,296.69c-76,0-137.75-61.8-137.75-137.75S632.41,521.5,708.36,521.5s137.75,61.8,137.75,137.75S784.32,797,708.36,797Z" />
    <path stroke={props.stroke} fill={props.fill} strokeMiterlimit="10" strokeWidth="5px" d="M774.34,599.57,686.39,707.06l-44.7-44.7a10.59,10.59,0,0,0-15,15L688,738.6,790.74,613a10.59,10.59,0,1,0-16.4-13.41Z" />
  </svg>
  );
PlanSelectionIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

PlanSelectionIcon.defaultProps = {
  className: '',
};

export default PlanSelectionIcon;
