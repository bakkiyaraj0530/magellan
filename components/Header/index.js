/**
*
* Header
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
// import styled from 'styled-components';
// import LocaleToggle from 'containers/LocaleToggle';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
// import ContactIcon from './contact-icon';
import Logo from './logo';
// import Mosaic from './header_mosaic.png';
// import Img from '../Img';
import MRxImg from './logo_mrx.png';
import MedicareImg from './logo_medicare.svg';
import FlexscriptsImg from './logo_flexscripts.png';
import MRxMailImg from './logo_mrx_mail.png';
import GatorcareImg from './logo_gatorcare.png';
import HeaderContainer from './header-container';
import HeaderList from './header-list';
// import FontSizeIcon from './font-size-icon';
import { logoutAndDestroy } from '../../assets/js/oauth';
// import { hasFeature } from '../../assets/js/feature_toggle';
import GlobalhealthImg from './logo_globalhealth.svg';
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      logo: '',
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.getLogo();
  }

  getLogo() {
    if (this.props.businessLine === 'COMMERCIAL') {
      if (this.props.client === 'common' || this.props.client === 'houseacct') {
        this.setState({ logo: MRxImg });
      } else if (this.props.client === 'flexscripts') {
        this.setState({ logo: FlexscriptsImg });
        this.setState({ logoHeight: '70px' });
      } else if (this.props.client === 'mailrx') {
        this.setState({ logo: MRxMailImg });
      } else if (this.props.client === 'gatorcare') {
        this.setState({ logo: GatorcareImg });
      } else if (this.props.client === 'globalhealth') {
        this.setState({ logo: GlobalhealthImg });
        this.setState({ logoHeight: '70px' });
      }
    } else if (this.props.businessLine === 'MEDD') {
      if (this.props.client === 'medd_common') {
        this.setState({ logo: MedicareImg });
        this.setState({ logoWidth: '225px' });
        this.setState({ logoHeight: '70px' });
        this.setState({ mtop: '15px' });
      }
    }
  }

  changeFontSize(action) {
    const fontSize = document.getElementById('mrxPortalApp');
    if (action === 'largest') {
      fontSize.className = 'font-size-largest';
    } else if (action === 'large') {
      fontSize.className = 'font-size-large';
    } else {
      fontSize.className = 'font-size-base';
    }
  }

  logout() {
    logoutAndDestroy();
    this.props.logoutLoading();
  }

  render() {
    return (
      <div id="appHeader">
        <HeaderContainer className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="pull-right">
                <HeaderList className="list-inline">
                  <li className="font-size-changer-buttons hidden-sm hidden-xs" >
                    <button onClick={() => this.changeFontSize('reset')}>
                      <span title="base-font-size" className="base-font-size">A</span>
                    </button>
                    <button onClick={() => this.changeFontSize('large')}>
                      <span title="large-font-size" className="large-font-size">A</span>
                    </button>
                    <button onClick={() => this.changeFontSize('largest')}>
                      <span title="largest-font-size" className="largest-font-size">A</span>
                    </button>
                  </li>
                </HeaderList>
              </div>
              {!this.props.isUserLoggedIn &&
              <Link to="/member/">
                <Logo src={GlobalhealthImg} alt="GlobalHealth Logo" width={this.state.logoWidth} height={this.state.logoHeight} mtop={this.state.mtop} />
              </Link>}
              {this.props.isUserLoggedIn &&
              <Link to="/member/dashboard">
                <Logo src={GlobalhealthImg} alt="Magellan Logo" width={this.state.logoWidth} height={this.state.logoHeight} mtop={this.state.mtop} />
              </Link>
              }
            </div>
          </div>
        </HeaderContainer>
      </div>
    );
  }
}

Header.propTypes = {
  businessLine: PropTypes.string,
  client: PropTypes.string,
  isUserLoggedIn: PropTypes.bool.isRequired,
  logoutLoading: PropTypes.func.isRequired,
};

Header.defaultProps = {
  businessLine: PropTypes.string,
  client: PropTypes.string,
};

export default Header;
