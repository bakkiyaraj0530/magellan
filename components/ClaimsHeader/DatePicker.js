/**
*
* DatePicker
*
*/
import React from 'react';
import moment from 'moment';
import { DateRange } from 'react-date-range';
import onClickOutside from 'react-onclickoutside';
import { FormattedMessage } from 'react-intl';
import InputMask from 'react-input-mask';

import messages from './messages';
import DatePickerStyles from './DatePickerStyles';
import CheckMark from './CheckMark';
import * as utils from './utils';

export class DatePicker extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      predefined: { startDate: props.startDate, endDate: props.endDate },
      intermediateDate: { startDate: props.startDate.format(this.DATE_FORMAT), endDate: props.endDate.format(this.DATE_FORMAT) },
      rangePicker: {},
      noOfDays: props.noOfDays,
      isValidDate: true,
    };
  }
  handleClickOutside = () => {
    const { hideDatePicker } = this.props;
    hideDatePicker();
  }
  DATE_FORMAT = 'MM/DD/YYYY';
  handleChange = (range) => {
    this.setState({
      predefined: {
        startDate: range.startDate,
        endDate: range.endDate,
      },
    });
  }
  dateChange = (value, source) => {
    this.setState({ predefined: { [source]: moment(value) } });
  }

  intermediateStartDate = () => (this.state.intermediateDate.startDate);

  intermediateEndDate = () => (this.state.intermediateDate.endDate);

  dateFormat = (value, source) => {
    const { predefined } = this.state;
    if (moment(value).isValid()) {
      predefined[source] = moment(value);
      this.setState({ predefined });
    }
    this.state.intermediateDate[source] = value;
    this.setState(this.state.intermediateDate);
  }
  dateFormatBlur = (val, src) => {
    const { predefined } = this.state;
    if (val.length === 10) {
      predefined[src] = moment(val);
      this.setState({ predefined });
    } else {
      this.setState({ predefined: { startDate: moment().add(-30, 'days') } });
    }
  }
  changeDateFormat = (d) => {
    let month = d.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day = d.getDate();
    day = day < 10 ? `0${day}` : day;
    return (`${d.getFullYear()}-${month}-${day}`);
  }
  filterRangeSubmit = () => {
    const { actions, hideDatePicker, memberId } = this.props;
    const newstartDate = this.state.predefined.startDate;
    const newendDate = this.state.predefined.endDate;
    const fromDate = this.changeDateFormat(new Date(newstartDate));
    const toDate = this.changeDateFormat(new Date(newendDate));
    const datepickerpayload = { fromDate, toDate, memberId };
    const cdate = new Date();
    cdate.setFullYear(cdate.getFullYear() - 3);
    const dateVal = new Date(newstartDate);

    if (cdate.getTime() > dateVal.getTime() || isNaN(dateVal.getTime())) {
      this.setState({ isValidDate: false });
    } else {
      this.setState({ isValidDate: true });
      actions.getClaimsHistory(datepickerpayload);
      hideDatePicker();
      this.props.updatePicker({ startDate: this.state.predefined.startDate, endDate: this.state.predefined.endDate });
    }
  }
  customRange = (startDateR, endDateR, e) => {
    e.preventDefault();
    this.state.predefined = { startDate: startDateR, endDate: endDateR };
    this.props.updatePicker({ startDate: this.state.predefined.startDate, endDate: this.state.predefined.endDate });
    this.filterRangeSubmit();
  }
  render() {
    const { predefined } = this.state;
    const rangedCalendars = true;
    return (
      <DatePickerStyles>
        <div className={`mag-datepicker-box ${this.props.isCanlander}`}>
          <div className="mag-datepicker-con">
            <div className="mag-datepicker-ragTxt"><FormattedMessage {...messages.selectrange} /></div>
            {(!isNaN(new Date(this.state.predefined.startDate).getTime()) && !isNaN(new Date(this.state.predefined.endDate).getTime())) && <div className="mag-datepicker-applyTxt"><a href="#link" onClick={this.filterRangeSubmit}><FormattedMessage {...messages.apply} /></a>
            </div>}
          </div>
          <div>
            <div className="mag-datepicker-input">
              <div className="mag-datepicker-fromArea">
                <p className="mag-datepicker-fromTxt"><FormattedMessage {...messages.from} /></p>
                <InputMask
                  mask="99/99/9999"
                  className="mag-datepicker-inputFrom"
                  placeholder={this.DATE_FORMAT}
                  value={this.intermediateStartDate()}
                  onChange={(e) => this.dateFormat(e.target.value, 'startDate')}
                  onBlur={(e) => this.dateFormatBlur(e.target.value, 'startDate')}
                  name="startDate"
                />
                {!this.state.isValidDate ? <p className="datepicker-error-msg"><FormattedMessage {...messages.daterangelimit} /></p> : ''}
                {isNaN(new Date(this.state.predefined.startDate).getTime()) ? <p className="datepicker-error-msg"><FormattedMessage {...messages.invalidDate} /></p> : ''}
              </div>
              <div className="mag-datepicker-fromArea">
                <p className="mag-datepicker-fromTxt"><FormattedMessage {...messages.to} /></p>
                <InputMask
                  mask="99/99/9999"
                  className="mag-datepicker-inputFrom"
                  placeholder={this.DATE_FORMAT}
                  value={this.intermediateEndDate()}
                  onChange={(e) => this.dateFormat(e.target.value, 'endDate')}
                  onBlur={(e) => this.dateFormatBlur(e.target.value, 'endDate')}
                  name="endDate"
                />
                {isNaN(new Date(this.state.predefined.endDate).getTime()) ? <p className="datepicker-error-msg"><FormattedMessage {...messages.invalidDate} /></p> : ''}
              </div>
              <div className="mag-datepicker-rangeArea">
                <div><span className={utils.isLast30(this.state.predefined.startDate, this.state.predefined.endDate) ? 'check-mark-show' : 'check-mark-hide'}><CheckMark /></span><a href="#link" onClick={(event) => this.customRange(moment().subtract(1, 'months'), moment(), event)}><FormattedMessage {...messages.lastthirtydays} /></a></div>
                <div><span className={utils.isLast90(this.state.predefined.startDate, this.state.predefined.endDate) ? 'check-mark-show' : 'check-mark-hide'}><CheckMark /></span><a href="#link" onClick={(event) => this.customRange(moment().subtract(3, 'months'), moment(), event)}><FormattedMessage {...messages.lastnintydays} /></a></div>
                <div><span className={utils.isLastYear(this.state.predefined.startDate, this.state.predefined.endDate) ? 'check-mark-show' : 'check-mark-hide'}><CheckMark /></span><a href="#link" onClick={(event) => this.customRange(this.state.predefined.endDate.subtract(1, 'years'), moment(), event)}><FormattedMessage {...messages.thisyear} /></a></div>
              </div>
            </div>
            <DateRange
              linkedCalendar
              startDate={moment(predefined.startDate)}
              endDate={moment(predefined.endDate)}
              onChange={this.handleChange} //eslint-disable-line
              theme={{
                Calendar: { width: 230 },
                PredefinedRanges: { marginLeft: 10, marginTop: 10 },
                DaySelected: { background: '#0074cb' },
                DayInRange: { background: '#E4F1F9', color: '#000' },
              }}
              rangedCalendars={rangedCalendars}
            />
          </div>
        </div>
      </DatePickerStyles>
    );
  }
}
DatePicker.defaultProps = {
  noOfDays: 30,
};
DatePicker.propTypes = {
  // userSignupRequest: React.PropTypes.func.isRequired,
  actions: React.PropTypes.object.isRequired,
  hideDatePicker: React.PropTypes.func.isRequired,
  memberId: React.PropTypes.string.isRequired,
  updatePicker: React.PropTypes.func.isRequired,
  noOfDays: React.PropTypes.number,
  startDate: React.PropTypes.object.isRequired,
  endDate: React.PropTypes.object.isRequired,
  isCanlander: React.PropTypes.string.isRequired,
  // toggleDatePicker: React.PropTypes.bool.isRequired,
};
export default onClickOutside(DatePicker);
