/*
 *
 * Links
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { selectedLanguageState } from '../App/selectors';
import messages from './messages';
import MailOrderStyles from './MailOrderStyles';
import AppStoreBadge from './App-Store-Button.svg';
import PlayStoreBadge from './google-play-badge.svg';
import ModalAlert from '../../components/ModalAlert';

export class MailOrder extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      linkUrl: '',
    };
  }

  onHide = () => {
    this.setState({ showModal: false });
  }

  getCurrentLocale = () => this.props.language.locale === 'en' ? 'en-us' : 'es-es'

  open = (url) => {
    this.setState({ showModal: true, linkUrl: url });
  }
  showLink = (url) => {
    this.onHide();
    window.open(url, '_blank');
  }
  render() {
    return (
      <div>
        <ModalAlert showModal={this.state.showModal} onHide={this.onHide} linkUrl={this.state.linkUrl} showLink={this.showLink} />
        <Helmet
          title="Mail Order | MagellanRx Management"
          meta={[
            { name: 'description', content: 'Description of MailOrder' },
          ]}
        />
        <MailOrderStyles>
          <div className="mag-mailorder-container">
            <h1><FormattedMessage {...messages.header} /></h1>
            <div className="mag-mailorder-con">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mobile-padding">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mag-mailorder-leftbox">
                    <p className="mag-mailorder-header"><FormattedMessage {...messages.refillProApp} /></p>
                    <div className="mag-mailorder-leftTxtbox">
                      <p className="mag-mailorder-faxus"><FormattedMessage {...messages.refillProAppRecommend} /></p>
                      <div className="mag-mailorder-app-badge"><a href="#link" onClick={() => this.open('https://itunes.apple.com/ai/app/refillpro/id955592259?mt=8')}><img src={AppStoreBadge} alt="Download the Refill Pro App on App Store" /></a></div>
                      <div className="mag-mailorder-app-badge"><a href="#link" onClick={() => this.open('https://play.google.com/store/apps/details?id=com.scriptpro.refillpro&hl=en')}> <img src={PlayStoreBadge} alt="Download the Refill Pro App on Google Play Store" /></a></div>
                      <p className="mag-mailorder-faxus"><FormattedMessage {...messages.refillProAppMsg1} />&nbsp;<a href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/RefillPro_App_Membership_Guide.pdf`} target="_blank"><FormattedMessage {...messages.refillProAppMsg2} /></a>&nbsp;<FormattedMessage {...messages.refillProAppMsg3} /></p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mag-mailorder-leftbox mag-mailorder-centerbox">
                    <p className="mag-mailorder-header"><FormattedMessage {...messages.customerservice} /></p>
                    <div className="mag-mailorder-leftTxtbox">
                      <p className="mag-mailorder-callus"><FormattedMessage {...messages.callusdaily} /></p>
                      <p x-ms-format-detection="none" className="mag-mailorder-number">800-424-5870</p>
                      <p className="mag-mailorder-faxus"><FormattedMessage {...messages.mailorderfax} /></p>
                      <p x-ms-format-detection="none" className="mag-mailorder-number">800-424-5872</p>
                      <p className="mag-mailorder-faxus"><FormattedMessage {...messages.writeus} /></p>
                      <p><FormattedMessage {...messages.medicareheader} /><br /><FormattedMessage {...messages.mailorderpobox} /><br /><FormattedMessage {...messages.mailorderaddress} /><br /><FormattedMessage {...messages.statecode} /></p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mag-mailorder-leftbox mag-mailorder-centerbox">
                    <p className="mag-mailorder-header"><FormattedMessage {...messages.mailorder} /></p>
                    <div className="mag-mailorder-leftTxtbox mag-mailorder-centerTxtbox">
                      <p className="mag-mailorder-callus"><FormattedMessage {...messages.mailordercall} /></p>
                      <p x-ms-format-detection="none" className="mag-mailorder-number">800-424-8272</p>
                      <p className="mag-mailorder-faxus"><FormattedMessage {...messages.mailorderfax} /></p>
                      <p x-ms-format-detection="none" className="mag-mailorder-number">888-282-1349</p>
                      <p className="mag-mailorder-faxus"><FormattedMessage {...messages.writeus} /></p>
                      <p><FormattedMessage {...messages.pharmacyname} /><br /><FormattedMessage {...messages.pharmacypobox} /><br /><FormattedMessage {...messages.pharmacystate} /><br /><FormattedMessage {...messages.pharmacystatecode} /></p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mag-mailorder-leftbox mag-mailorder-rightbox">
                    <p className="mag-mailorder-header"><FormattedMessage {...messages.pharmacy} /></p>
                    <div className="mag-mailorder-leftTxtbox mag-mailorder-rightTxtbox">
                      <p className="mag-mailorder-callus"><FormattedMessage {...messages.mailordercall} /></p>
                      <p x-ms-format-detection="none" className="mag-mailorder-number">800-424-8272</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MailOrderStyles>
      </div>
    );
  }
}
MailOrder.propTypes = {
  language: PropTypes.object.isRequired,
};

MailOrder.contextTypes = {
  intl: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  language: selectedLanguageState(),
});

export default connect(mapStateToProps, null)(MailOrder);
