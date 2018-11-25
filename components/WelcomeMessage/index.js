/**
*
* WelcomeMessage
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
class WelcomeMessage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const H1 = styled.h1`
      font-weight:300;
      text-transform:capitalize;
      margin-top: 0;
    `;
    return (
      <div className={this.props.className}>
        <H1><FormattedMessage {...messages.hello} />, {this.props.userFirstName.toLowerCase()} {this.props.userLastName.toLowerCase()}! </H1>
      </div>
    );
  }
}

WelcomeMessage.propTypes = {
  userFirstName: PropTypes.string.isRequired,
  userLastName: PropTypes.string.isRequired,
  className: PropTypes.string,
};

WelcomeMessage.defaultProps = {
  className: '',
};

export default WelcomeMessage;
