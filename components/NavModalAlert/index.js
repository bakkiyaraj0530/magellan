/**
*
* Modal
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Modal } from 'react-bootstrap';
import messages from './messages';
import ModalAlertStyles from './ModalAlertStyles';
import closeIcon from './close.svg';

class ModalAlert extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const overlay = this.props;
    return (
      <div>
        <Modal show={overlay.showModal} onHide={overlay.onHide}>
          <ModalAlertStyles><Modal.Body>
            <div className="mag-modal-closeImg">
              <img role="presentation" onClick={overlay.onHide} src={closeIcon} className="mag-modal-closeImg" alt="Close Icon" />
            </div>
            <div className="mag-modal-content">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <h3><FormattedMessage {...messages.head} /></h3>
                  <p><FormattedMessage {...messages.desc} /></p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="mag-button-area">
                    <div><button className="mag-modal-okBtn" onClick={() => overlay.showLink(overlay.linkUrl)}><FormattedMessage {...messages.ok} /></button></div>
                    <div><button onClick={overlay.onHide} className="mag-modal-cancelBtn"><FormattedMessage {...messages.cancel} /></button></div>
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
