/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import IdleTimer from 'react-idle-timer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { getFeatures, getUserInfo } from './actions';
import { makeSelectAppState, selectedLanguageState } from './selectors';
import LoadingDots from '../../components/LoadingDots';
import { isSessionValid, logoutAndDestroy } from '../../assets/js/oauth';
import ViewIDCard from '../../components/ViewIdcard';
import TimeoutAlert from '../../components/TimeoutAlert';

export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
      showModal: false,
      timeout: 870000,
      isSpinnerLoading: false,
    };
    this.onIdle = this.onIdle.bind(this);
  }

  componentDidMount() {
    const path = browserHistory.getCurrentLocation();
    this.props.getFeatures();
    if (isSessionValid()) {
      this.props.getUserInfo();
      if (path.pathname === '/member/' || path.pathname === '/member') {
        browserHistory.push('/member/dashboard');
      }
    }
  }

  onIdle() {
    this.setState({ showModal: true });
  }
  onHide = (isCancelLogout) => {
    this.setState({ showModal: false });
    if (isCancelLogout) {
      this.idleTimer.reset();
    } else {
      this.idleTimer.pause();
      logoutAndDestroy();
    }
  }
  logoutSpinner = () => {
    this.setState({ isSpinnerLoading: true });
  }
  render() {
    const route = browserHistory.getCurrentLocation();
    const containerClass = classNames({ 'content-area': true, container: route.pathname !== '/member/' });
    if ((!this.props.global.userInfo && isSessionValid()) || !this.props.global.businessLine || this.state.isSpinnerLoading) {
      return (
        <div>
          <div className="loading-backdrop fade in"></div>
          <div className="pageSpinner"><LoadingDots /></div>
        </div>
      );
    }
    return (
      <div>
        {(route.pathname !== '/member/planselection') && <Header businessLine={this.props.global.businessLine} client={this.props.global.client} isUserLoggedIn={this.props.global.userInfo !== null} logoutLoading={this.logoutSpinner} />}
        {(route.pathname !== '/member/planselection') && <Navbar businessLine={this.props.global.businessLine} isUserLoggedIn={this.props.global.userInfo !== null} client={this.props.global.client} userInfo={this.props.global.userInfo} logoutLoading={this.logoutSpinner} language={this.props.language} />}
        <div className={containerClass} id="appContent">
          {React.Children.toArray(this.props.children)}
        </div>
        {this.props.global.userInfo !== null && isSessionValid() && <ViewIDCard modalID="dashIDModal" userInfo={this.props.global.userInfo} />}
        <Footer />
        {this.props.global.userInfo !== null && isSessionValid() &&
          <IdleTimer
            ref={(c) => { this.idleTimer = c; }}
            element={document}
            idleAction={this.onIdle}
            timeout={this.state.timeout}
            format="MM-DD-YYYY HH:MM:ss.SSS"
          >

          </IdleTimer>
        }
        <TimeoutAlert showModal={this.state.showModal} timer={this.idleTimer} onHide={this.onHide} />

      </div>

    );
  }
}

App.propTypes = {
  getUserInfo: PropTypes.func.isRequired,
  getFeatures: PropTypes.func.isRequired,
  global: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  language: PropTypes.object.isRequired,
};


const mapStateToProps = createStructuredSelector({
  global: makeSelectAppState(),
  language: selectedLanguageState(),
});

const mapDispatchToProps = (dispatch) => ({
  getFeatures: bindActionCreators(getFeatures, dispatch),
  getUserInfo: bindActionCreators(getUserInfo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
