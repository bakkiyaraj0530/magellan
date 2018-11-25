import React from 'react';
import PropTypes from 'prop-types';
// Icon
const SearchIcon = (props) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24" aria-labelledby={props.title} >
    <title id={props.title}>{props.titleText}</title>
    <path id={props.title} fill={props.fill} stroke={props.stroke} fillRule="evenodd" d="M23.7896787,22.7109375 C23.9298936,22.8515632 24,23.0273427 24,23.2382812 C24,23.4492198 23.9298936,23.6249993 23.7896787,23.765625 C23.6338843,23.9218758 23.4547235,24 23.2521908,24 C23.0496582,24 22.8704974,23.9218758 22.714703,23.765625 L15.4703019,16.453125 C14.6445918,17.1718786 13.7098397,17.734373 12.6660175,18.140625 C11.6221954,18.546877 10.5160721,18.75 9.34761441,18.75 C8.05452129,18.75 6.83934356,18.5039087 5.70204479,18.0117188 C4.56474602,17.5195288 3.57157192,16.8515667 2.7224927,16.0078125 C1.87341348,15.1640583 1.20740261,14.1718807 0.724440117,13.03125 C0.241477624,11.8906193 0,10.6718815 0,9.375 C0,8.07811852 0.241477624,6.8593807 0.724440117,5.71875 C1.20740261,4.5781193 1.87341348,3.58594172 2.7224927,2.7421875 C3.57157192,1.89843328 4.56474602,1.23047121 5.70204479,0.73828125 C6.83934356,0.246091289 8.05452129,0 9.34761441,0 C10.6251281,0 11.8325162,0.246091289 12.969815,0.73828125 C14.1071138,1.23047121 15.1002879,1.89843328 15.9493671,2.7421875 C16.7984463,3.58594172 17.468352,4.5781193 17.9591042,5.71875 C18.4498564,6.8593807 18.6952288,8.07811852 18.6952288,9.375 C18.6952288,10.5156307 18.5004888,11.5976511 18.1110029,12.6210938 C17.721517,13.6445364 17.1918242,14.5624959 16.5219085,15.375 L23.7896787,22.7109375 Z M9.34761441,17.2734375 C10.4225954,17.2734375 11.4391383,17.0664083 12.3972736,16.6523438 C13.3554089,16.2382792 14.1888962,15.6718786 14.8977605,14.953125 C15.6066248,14.2343714 16.167476,13.3984423 16.5803311,12.4453125 C16.9931861,11.4921827 17.1996105,10.4687555 17.1996105,9.375 C17.1996105,8.28124453 16.9931861,7.25781727 16.5803311,6.3046875 C16.167476,5.35155773 15.6066248,4.51562859 14.8977605,3.796875 C14.1888962,3.07812141 13.3554089,2.51172082 12.3972736,2.09765625 C11.4391383,1.68359168 10.4225954,1.4765625 9.34761441,1.4765625 C8.25705394,1.4765625 7.23272144,1.68359168 6.27458617,2.09765625 C5.31645091,2.51172082 4.48296362,3.07812141 3.77409932,3.796875 C3.06523501,4.51562859 2.50438376,5.35155773 2.09152872,6.3046875 C1.67867369,7.25781727 1.47224927,8.28124453 1.47224927,9.375 C1.47224927,10.4687555 1.67867369,11.4921827 2.09152872,12.4453125 C2.50438376,13.3984423 3.06523501,14.2343714 3.77409932,14.953125 C4.48296362,15.6718786 5.31645091,16.2382792 6.27458617,16.6523438 C7.23272144,17.0664083 8.25705394,17.2734375 9.34761441,17.2734375 Z" />
  </svg>
  );
SearchIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

SearchIcon.defaultProps = {
  className: '',
};

export default SearchIcon;