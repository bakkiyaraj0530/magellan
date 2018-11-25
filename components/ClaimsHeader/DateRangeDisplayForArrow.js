import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import messages from './messages';
import * as utils from './utils';

const DateRangeDisplayForArrow = (props) => (<span className="mag-claim-rangeTxt">
  {utils.isLast30(props.startDate, props.endDate) ? <FormattedMessage {...messages.lastthirtydays} /> : ''}
  {utils.isLast90(props.startDate, props.endDate) ? <FormattedMessage {...messages.lastnintydays} /> : ''}
  {utils.isLastYear(props.startDate, props.endDate) ? <FormattedMessage {...messages.thisyear} /> : ''}
  {utils.isCustomRange(props.startDate, props.endDate) ? `${props.startDate.format('MM/DD/YYYY')} - ${props.endDate.format('MM/DD/YYYY')}` : ''}
</span>);

DateRangeDisplayForArrow.propTypes = {
  endDate: PropTypes.object.isRequired,
  startDate: PropTypes.object.isRequired,
};

export default DateRangeDisplayForArrow;
