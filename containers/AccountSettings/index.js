/*
 *
 * AccountSettings
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectAccountSettings from './selectors';
import { makeSelectAppState } from '../App/selectors';
import messages from './messages';
import AccountSettingsUi from '../../components/AccountSettingsUi';


export class AccountSettings extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="container">
          <Helmet
            title="AccountSettings"
            meta={[
                   { name: 'description', content: 'Description of AccountSettings' },
            ]}
          />
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
          <AccountSettingsUi userInfo={this.props.global.userInfo} />
        </div>
      </div>
    );
  }
}

AccountSettings.propTypes = {
  global: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  AccountSettings: makeSelectAccountSettings(),
  global: makeSelectAppState(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
