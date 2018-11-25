import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';

import messages from './messages';
import DatePicker from './DatePicker';
import DatePickerArrow from './DatePickerArrow';
import ClaimsHistoryStyles from './ClaimsHistoryStyles';
import DownloadClaims from './DownloadClaims';
import DatePickerUpArrow from './DatePickerUpArrow';
import * as utils from './utils';

class ClaimsHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleDatePicker: false,
      noOfDays: 30,
      startDate: moment().add(-30, 'days'),
      endDate: moment(),
    };
  }
  /**
   * @desc Set the toggleDatePicker value as true/false
   */
  showDatePicker = () => {
    this.setState({ toggleDatePicker: !this.state.toggleDatePicker });
  }

  handleUpdatePicker = (val) => {
    this.setState({
      startDate: val.startDate,
      endDate: val.endDate,
    });
  }
  render() {
    const { claimsHistory } = this.props;
    const { toggleDatePicker } = this.state;
    let isCanlander;
    if (utils.isLast30(this.state.startDate, this.state.endDate) || utils.isLast90(this.state.startDate, this.state.endDate)) {
      isCanlander = 'isDay';
    } else if (utils.isLastYear(this.state.startDate, this.state.endDate)) {
      isCanlander = 'isYear';
    } else {
      isCanlander = 'isDateRange';
    }

    return (
      <ClaimsHistoryStyles>
        <div className="claim-history-page">
          <div className="claim-info">
            <h2><FormattedMessage {...messages.title} /></h2>
            <p><FormattedMessage {...messages.header} /></p>
            <p><span className="claim-reject"><FormattedMessage {...messages.rejected} />: </span>
              <FormattedMessage {...messages.rejectedInfo} /></p>
            <p><span className="claim-denied"><FormattedMessage {...messages.denied} />: </span>
              <FormattedMessage {...messages.deniedInfo} /></p>
          </div>
          <div className="claim-tablepanel clearfix">
            <div className="claim-daterange">
              <span className="claim-range"><FormattedMessage {...messages.dateRange} />:
        <button onClick={this.showDatePicker}>{!toggleDatePicker ? <DatePickerUpArrow title="Date-range-arrow" titleText="Date Range" fill="#00A8E2" stroke="#00A8E2" width="14" height="8" startDate={this.state.startDate} endDate={this.state.endDate} /> : <DatePickerArrow dayscount={this.state.noOfDays} startDate={this.state.startDate} endDate={this.state.endDate} />}</button>
              </span>
              {
                toggleDatePicker ? <DatePicker isCanlander={isCanlander} actions={this.props.actions} memberId={this.props.memberId} hideDatePicker={this.showDatePicker} updatePicker={this.handleUpdatePicker} noOfDays={this.state.noOfDays} startDate={this.state.startDate} endDate={this.state.endDate} /> : ''
              }
              {
                claimsHistory ?
                  <span className="hidden-xs hidden-sm hidden-md claim-download">
                    <DownloadClaims claimsHistory={claimsHistory} />
                  </span>
                  : null
              }
            </div>
          </div>
        </div>
      </ClaimsHistoryStyles>
    );
  }
}

ClaimsHeader.propTypes = {
  claimsHistory: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  memberId: PropTypes.string.isRequired,
};

export default ClaimsHeader;
