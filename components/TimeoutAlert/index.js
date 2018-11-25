/**
*
* Modal
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { Modal, ProgressBar } from 'react-bootstrap';
import ModalAlertStyles from './ModalAlertStyles';
import messages from './messages';
class ModalAlert extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const overlay = this.props;
    let countdown = 30;
    let width = 100;
    let downloadTimer = null;
    if (overlay.showModal) {
      downloadTimer = setInterval(() => {
        countdown -= 1;
        width -= 3.33;
        document.getElementById('countdownText').innerHTML = countdown;
        const progressbar = document.getElementById('timeoutProgressBar').childNodes;
        progressbar[0].style.cssText = `width:${width}%`;
        if (countdown <= 0) { clearInterval(downloadTimer); overlay.onHide(false); }
      }, 1000);
    }

    const resetTimer = () => {
      clearInterval(downloadTimer); overlay.onHide(true);
    };
    return (
      <div>
        <Modal show={overlay.showModal} onHide={overlay.onHide} backdrop="static">
          <ModalAlertStyles>
            <Modal.Header>
              <Modal.Title>Your session will be terminated due to inactivity.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="mag-modal-content">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h4>You will be logged out in <span id="countdownText">30</span> second(s).</h4>
                    <ProgressBar active max={30} now={countdown} striped id="timeoutProgressBar" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="mag-button-area">
                      <div><button onClick={() => resetTimer()} className="mag-modal-cancelBtn"><FormattedMessage {...messages.cancel} /></button></div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body></ModalAlertStyles>
        </Modal>

      </div>
    );
  }
}

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onHide: React.PropTypes.func.isRequired,
  showLink: React.PropTypes.func.isRequired,
  linkUrl: React.PropTypes.string.isRequired,
};

export default ModalAlert;
