import React from 'react';
import PropTypes from 'prop-types';

import DateRangeDisplayForArrow from './DateRangeDisplayForArrow';

// Icon
const DatePickerUpArrow = (props) => (
  <div>
    <DateRangeDisplayForArrow startDate={props.startDate} endDate={props.endDate} />
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 14 8" aria-labelledby={props.title}>
      <title id={props.title}>{props.titleText}</title>
      <g fill="none" fillRule="evenodd">
        <path fill={props.fill} d="M0.109375,0.634765625 C0.109375,0.580077852 0.120768115,0.523112275 0.143554688,0.463867188 C0.16634126,0.4046221 0.200520605,0.35221377 0.24609375,0.306640625 C0.337240039,0.224608965 0.446613945,0.18359375 0.57421875,0.18359375 C0.701823555,0.18359375 0.811197461,0.224608965 0.90234375,0.306640625 L7.08203125,6.48632812 L13.1660156,0.40234375 C13.2571619,0.311197461 13.3665358,0.265625 13.4941406,0.265625 C13.6217454,0.265625 13.7311193,0.311197461 13.8222656,0.40234375 C13.9134119,0.493490039 13.9589844,0.602863945 13.9589844,0.73046875 C13.9589844,0.858073555 13.9134119,0.967447461 13.8222656,1.05859375 L7.41015625,7.47070312 C7.31900996,7.56184941 7.20963605,7.60742188 7.08203125,7.60742188 C6.95442645,7.60742188 6.84505254,7.56184941 6.75390625,7.47070312 L0.24609375,0.9765625 C0.200520605,0.930989355 0.16634126,0.878581025 0.143554688,0.819335938 C0.120768115,0.76009085 0.109375,0.698568027 0.109375,0.634765625 Z" />
      </g>
    </svg></div>
    );

DatePickerUpArrow.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  endDate: PropTypes.object.isRequired,
  startDate: PropTypes.object.isRequired,
};

export default DatePickerUpArrow;
