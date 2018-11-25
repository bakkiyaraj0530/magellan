/*
 *
 * ClaimsHistory
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import makeSelectClaimsHistory from './selectors';
import * as ActionCreators from './actions';
import ClaimsHeader from '../../components/ClaimsHeader';
import ClaimsDetails from '../../components/ClaimsDetails';
import { DATE_FORMAT, THIRTY_DAYS, NINETY_DAYS, DAYS } from './constants';
import { makeSelectAppState } from '../App/selectors';
export class ClaimsHistory extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      claimsData: {},
    };
  }

  componentDidMount() {
    const toDate = moment().format(DATE_FORMAT);
    const fromDate = moment().subtract((this.props.isloggedInDashboard) ? NINETY_DAYS : THIRTY_DAYS, DAYS).format(DATE_FORMAT);
    const { global } = this.props;
    const params = {
      fromDate,
      toDate,
      memberId: global.userInfo.memebrId,
    };
    this.props.actions.getClaimsHistory(params);
  }

  render() {
    const { claimsHistory, actions, global } = this.props || {};
    return (
      <div>
        {!this.props.isloggedInDashboard &&
        <Helmet
          title="Claims History | MagellanRx Management"
          meta={[
            { name: 'description', content: 'Description of ClaimsHistory' },
          ]}
        /> }
        {(!this.props.isloggedInDashboard) && <ClaimsHeader claimsHistory={claimsHistory} memberId={global.userInfo.memebrId} actions={actions} /> }
        <ClaimsDetails actions={this.props.actions} claimsHistory={claimsHistory} vucaVideoList={claimsHistory.vucaVideoList} isLoading={claimsHistory.isclaimLoading} showhideSorting={this.props.isloggedInDashboard} />
      </div>
    );
  }
}
ClaimsHistory.defaultProps = {
  claimsHistory: React.PropTypes.object,
  isloggedInDashboard: false,
  global: React.PropTypes.object,
};
ClaimsHistory.propTypes = {
  actions: React.PropTypes.object.isRequired,
  isloggedInDashboard: React.PropTypes.bool,
  global: React.PropTypes.object,
};
const mapStateToProps = createStructuredSelector({
  claimsHistory: makeSelectClaimsHistory(),
  global: makeSelectAppState(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
  };
}
export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(ClaimsHistory));
