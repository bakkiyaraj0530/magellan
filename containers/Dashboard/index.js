/*
 *
 * Dashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectDashboard from './selectors';
import messages from './messages';
import WelcomeMessage from '../../components/WelcomeMessage';
import DashboardButton from '../../components/DashboardButton';
import { makeSelectAppState } from '../App/selectors';
import Benefits from '../Benefits';
import ClaimsHistory from '../ClaimsHistory';
import colors from '../../components/HelperUtils/branding-colors';
import LoadingDots from '../../components/LoadingDots';


export class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function

  toggleViewIDModal() {
    const id = 'dashIDModal';
    const modal = document.getElementById(id);
    const modalBG = document.getElementById('modal-background');
    modal.className += ' in';
    modal.style.display = 'block';
    modalBG.style.display = 'block';
  }


  render() {
    const ViewIDLink = styled.button`
      font-weight:500;
        color:${colors.magellanblue};
        font-size:1.5rem;
        margin-top: -10px;
        &:hover{
          color:${colors.magellanblue};
          text-decoration: none;
        }
    `;

    if (this.props.global.userInfo === null) {
      return (
        <div>
          <div className="loading-backdrop fade in"></div>
          <div className="pageSpinner"><LoadingDots /></div>
        </div>
      );
    }
    return (
      <div>
        <Helmet
          title="Dashboard | MagellanRx Management"
          meta={[
            { name: 'MagellanRxDashboard', content: 'MagellanRx Member Dashboard' },
          ]}
        />
        <div>
          <div className="text-center dash-upper-text">
            <WelcomeMessage userFirstName={this.props.global.userInfo.userFirstName} userLastName={this.props.global.userInfo.userLastName} className="hidden-sm hidden-xs"></WelcomeMessage>
            <ViewIDLink data-toggle="modal" onClick={this.toggleViewIDModal} className="btn btn-link" ><FormattedMessage {...messages.viewID} /></ViewIDLink>
          </div>
          <Benefits isDashboard />
          <div className="text-center mag-recentclaims-head">
            <h1><FormattedMessage {...messages.recentclaims} /></h1>
            <p><FormattedMessage {...messages.recentclaimsduration} /></p>
          </div>
          <ClaimsHistory isloggedInDashboard />
          <div className="col-xs-12 button-row">
            <div className="text-center">
              <DashboardButton btnText={this.props.intl.formatMessage(messages.seeAllClaims)} btnLink="/member/claims" type="button" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  global: React.PropTypes.object.isRequired,
  intl: intlShape.isRequired,
};

Dashboard.defaultProps = {
  dispatch: PropTypes.func,
  global: PropTypes.object,
};
Dashboard.contextTypes = {
  intl: React.PropTypes.object.isRequired,
};
const mapStateToProps = createStructuredSelector({
  Dashboard: makeSelectDashboard(),
  global: makeSelectAppState(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
