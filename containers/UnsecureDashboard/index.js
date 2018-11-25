/*
 *
 * UnsecureDashboard
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectUnsecureDashboard from './selectors';
import messages from './messages';

export class UnsecureDashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="UnsecureDashboard"
          meta={[
            { name: 'description', content: 'Description of UnsecureDashboard' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

UnsecureDashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  UnsecureDashboard: makeSelectUnsecureDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UnsecureDashboard);
