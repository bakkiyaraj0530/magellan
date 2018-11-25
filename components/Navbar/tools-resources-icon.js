import React from 'react';
import PropTypes from 'prop-types';
// Icon
const ResourcesIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24" aria-labelledby={props.title}>
    <title id={props.title}>{props.titleText}</title>
    <path fill={props.fill} stroke={props.stroke} fillRule="evenodd" d="M18,0 L24,6 L24,19.5 C24,19.9218771 23.8554702,20.2773423 23.5664062,20.5664062 C23.2773423,20.8554702 22.9218771,21 22.5,21 L17.25,21 L17.25,19.5 L22.5,19.5 L22.5,7.5 L16.5,7.5 L16.5,1.5 L8.25,1.5 C8.25,1.07812289 8.3945298,0.722657695 8.68359375,0.43359375 C8.9726577,0.144529805 9.32812289,0 9.75,0 L18,0 Z M18,6 L21.8671875,6 L18,2.109375 L18,6 Z M1.5,3 L9.75,3 L15.75,9 L15.75,22.5 C15.75,22.9218771 15.6054702,23.2773423 15.3164062,23.5664062 C15.0273423,23.8554702 14.6718771,24 14.25,24 L1.5,24 C1.07812289,24 0.722657695,23.8554702 0.43359375,23.5664062 C0.144529805,23.2773423 0,22.9218771 0,22.5 L0,4.5 C0,4.07812289 0.144529805,3.7226577 0.43359375,3.43359375 C0.722657695,3.1445298 1.07812289,3 1.5,3 Z M14.25,22.5 L14.25,10.5 L8.25,10.5 L8.25,4.5 L1.5,4.5 L1.5,22.5 L14.25,22.5 Z M9.75,9 L13.6171875,9 L9.75,5.109375 L9.75,9 Z" />
  </svg>
  );
ResourcesIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

ResourcesIcon.defaultProps = {
  className: '',
};

export default ResourcesIcon;
