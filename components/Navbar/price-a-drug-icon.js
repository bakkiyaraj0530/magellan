import React from 'react';
import PropTypes from 'prop-types';
// Icon
const DrugPriceIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 1000 1000" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path fill={props.fill} stroke={props.stroke} d="M572.5,101.69c-92.26-42.27-201.65-1.59-243.9,90.63L108.72,672.24c-42.25,92.22-1.62,201.63,90.64,243.9S401,917.72,443.22,825.49L663.1,345.57C705.35,253.34,664.68,143.92,572.5,101.69ZM416.91,813.44c-35.61,77.72-127.81,112-205.5,76.39S99.42,762,135,684.3L354.91,204.37c35.61-77.72,127.81-112,205.54-76.37s112,127.8,76.35,205.51Z" /><path className="cls-1" d="M543.71,545.69C439.81,543.17,324.61,490.3,255,413.42a14.47,14.47,0,1,0-21.46,19.42c37.45,41.35,86.14,76.45,140.79,101.49S487.21,573.25,543,574.62a14.47,14.47,0,1,0,.73-28.92Z" />
    <circle fill="#0077c8" stroke="#fff" strokeWidth="25px" cx="576.41" cy="631.72" r="294.03" />
    <text fill="#fff" stroke="#0077c8" strokeMiterlimit="10" fontFamily="Ubuntu" fontSize="541.86px" transform="translate(446.25 831.74)">$</text>
  </svg>
  );
DrugPriceIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

DrugPriceIcon.defaultProps = {
  className: '',
};

export default DrugPriceIcon;
