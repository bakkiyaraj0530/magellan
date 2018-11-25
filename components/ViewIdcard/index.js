/**
*
* ViewIdcard
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import IdForm from './view-id-form';
import IdModal from './view-id-modal';
import MedicareLogo from './logo_medicare-partD_medicarerx.png';
import CloseIcon from './close-icon';
import Button from '../Button';
class ViewIdcard extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.state = {
      modalID: this.props.modalID,
      userInfo: this.props.userInfo,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e) {
    e.preventDefault();
    const id = this.state.modalID;
    const modal = document.getElementById(id);
    const modalBG = document.getElementById('modal-background');
    const tmpClass = modal.className.replace('in', '');
    modal.className = tmpClass;
    modal.style.display = 'none';
    modalBG.style.display = 'none';
  }

  printIdCard() {
    window.print();
  }

  render() {
    const ModalBackground = styled.div`
        background-color: black;
        height: 100%;
        width: 100%;
        opacity: .4!important;
        display:none;

  `;
    return (
      <div>
        <ModalBackground id="modal-background" className="modal fade in"></ModalBackground>
        <IdModal className="modal" id={this.state.modalID} tabIndex="-1" role="dialog" aria-labelledby="viewdivLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content mag-modal-animation">
              <IdForm className="col-xs-12 col-sm-12 col-md-12 clearfix">
                <p><br /><img src={MedicareLogo} className="pull-right pull-xs-left" alt="Magellan Rx Medicare, Medicare Rx Prescription Drug Coverage" /></p>
                <a onClick={this.toggleModal} className="label label-primary btnclose hidden-print" title="Close" href="">
                  <CloseIcon title="viewid-close-icon" titleText="Close ID Card" fill="#004B98" stroke="#004B98" width="16" height="16" />
                </a>
                <div className="col-xs-12">
                  <strong id="viewIDModalLabel" className="pull-left"><FormattedMessage {...messages.presc} /></strong>
                </div>
                <div className="col-xs-12">
                  <span className="pull-left"><span className="id-label"><FormattedMessage {...messages.rxbin} /></span><span className="id-text">{this.state.userInfo.bin}</span></span>
                </div>
                <div className="col-xs-12">
                  <span className="pull-left"><span className="id-label"><FormattedMessage {...messages.rxpcn} /></span><span className="id-text-pcn">{this.state.userInfo.pcn}</span></span>
                </div>
                <div className="col-xs-12">
                  <span className="pull-left"><span className="id-label"><FormattedMessage {...messages.rxgrp} /></span><span className="id-text">{this.state.userInfo.groupdId}</span></span>
                </div>
                <div className="col-xs-12">
                  <span className="pull-left"><span className="id-label"><FormattedMessage {...messages.issuer} /></span><span className="id-text">9151014609</span></span>
                </div>
                <div className="col-xs-12">
                  <span className="pull-left"><span className="id-label"><FormattedMessage {...messages.idno} /></span><span className="id-text">{this.state.userInfo.memebrId}</span></span>
                </div>
                <div className="col-xs-12">
                  <span className="pull-left"><span className="id-label"><FormattedMessage {...messages.name} /></span><span className="id-text text-uppercase">{this.state.userInfo.userFirstName} {this.state.userInfo.userLastName}</span></span>
                </div>
                <div className="col-xs-12">
                  <br />
                  <span className="pull-left">http://medicare.magellanrx.com</span>
                  <span className="pull-right hidden-xs">S4607/{this.state.userInfo.pbpNumber}</span>
                </div>
                <div className="col-xs-12">
                  <div className="text-center hidden-print">
                    <Button type="button" btnStyle="primary" onClick={this.printIdCard} btnText={this.context.intl.formatMessage(messages.printidcard)} />
                    <Button type="button" btnStyle="default" onClick={this.toggleModal} btnText={this.context.intl.formatMessage(messages.close)} />
                  </div>
                </div>
              </IdForm>
            </div>
          </div>
        </IdModal>
      </div>
    );
  }
}

ViewIdcard.propTypes = {
  modalID: PropTypes.string.isRequired,
  userInfo: PropTypes.object.isRequired,
};
ViewIdcard.contextTypes = {
  intl: React.PropTypes.object.isRequired,
};
export default ViewIdcard;
