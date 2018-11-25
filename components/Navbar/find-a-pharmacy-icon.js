import React from 'react';
import PropTypes from 'prop-types';
// Icon
const FindAPharmacyIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 1000 1000" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path stroke={props.stroke} fill={props.fill} d="M490.45,837.18a12.59,12.59,0,0,1-8.92-3.7l-214-214.19a313.61,313.61,0,0,1-92.32-223.1c0-174,141.4-315.52,315.21-315.52S805.67,222.21,805.67,396.19a313.61,313.61,0,0,1-92.32,223.1l-214,214.19A12.59,12.59,0,0,1,490.45,837.18Zm0-731.3c-159.9,0-290,130.23-290,290.3A288.59,288.59,0,0,0,285.4,601.47L490.45,806.73,695.51,601.47a288.58,288.58,0,0,0,84.94-205.28C780.45,236.11,650.36,105.89,490.45,105.89Z" />
    <path stroke={props.stroke} fill={props.fill} d="M490.45,635.45c-132.09,0-239.56-107.47-239.56-239.56S358.36,156.32,490.45,156.32,730,263.79,730,395.88,622.55,635.45,490.45,635.45Zm0-453.91c-118.19,0-214.35,96.15-214.35,214.35s96.15,214.35,214.35,214.35S704.8,514.08,704.8,395.88,608.65,181.54,490.45,181.54Z" />
    <path stroke={props.stroke} fill={props.fill} d="M490.45,887.62c-89,0-239.56-13.28-239.56-63,0-48.73,145.24-59.66,189.76-61.84a12.85,12.85,0,0,1,13.21,12,12.62,12.62,0,0,1-12,13.21c-110,5.4-163,27-165.8,36.87,3.74,12.84,80.66,37.6,214.37,37.6s210.63-24.77,214.37-38C702.07,815,649.41,793.47,540.14,788a12.61,12.61,0,0,1,1.27-25.18C585.66,765,730,776,730,824.57,730,874.34,579.43,887.62,490.45,887.62Z" />
    <path stroke={props.stroke} fill={props.fill} d="M466.36,387.64H424.07v89.73h-30V251.68h63.21q20.46,0,34.1,2.65a71.72,71.72,0,0,1,24.56,9.47,57,57,0,0,1,19.17,19.48Q542,295,542,313.07q0,24.41-12.28,40.85t-33.8,24.78Zm44.26-72.45a41.17,41.17,0,0,0-3.41-17.2,30,30,0,0,0-11.29-12.66,41.56,41.56,0,0,0-15.46-6.14,111.54,111.54,0,0,0-21.07-1.74H424.07v85.19h30.32a109.29,109.29,0,0,0,24.86-2.5,39.21,39.21,0,0,0,28.12-23.95Q510.62,327.92,510.62,315.19Z" />
    <path stroke={props.stroke} fill={props.fill} d="M618.3,531.59H580.67l-50.33-68.11-50.65,68.11H444.92l69.23-88.44-59.63-77.23h37.63l41.06,55.32,50.17-67H618.3l-69.7,87.33Z" />
  </svg>
  );
FindAPharmacyIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

FindAPharmacyIcon.defaultProps = {
  className: '',
};

export default FindAPharmacyIcon;
