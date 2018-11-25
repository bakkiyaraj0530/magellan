/*
 *
 * Links
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import LinksStyles from './LinksStyles';
import ModalAlert from '../../components/ModalAlert';

export class Links extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
          title="Links | MagellanRx Management"
          meta={[
            { name: 'description', content: 'Description of Links' },
          ]}
        />
        <LinksStyles>
          <div className="mag-links-container">
            <h1><FormattedMessage {...messages.header} /></h1>
            <div className="mag-links-con">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mag-links-leftbox">
                    <a href="#link" onClick={() => this.open('http://www.diabetes.org/')}><FormattedMessage {...messages.assoc} /></a>
                    <a href="#link" onClick={() => this.open('https://www.cdc.gov/')}><FormattedMessage {...messages.prevention} /></a>
                    <a href="#link" onClick={() => this.open('https://www.cdc.gov/heartdisease/')}><FormattedMessage {...messages.disease} /></a>
                    <a href="#link" onClick={() => this.open('https://www.cdc.gov/aging/aginginfo/alzheimers.htm')}><FormattedMessage {...messages.alzheimers} /></a>
                    <a href="#link" onClick={() => this.open('https://www.cms.gov/Medicare/Prescription-Drug-Coverage/PrescriptionDrugCovContra/index.html?redirect=/PrescriptionDrugCovContra/17_Best_Available_Evidence_Policy.asp')}><FormattedMessage {...messages.policy} /></a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mag-links-centerbox">
                    <div className="mag-links-subTxt"><FormattedMessage {...messages.subheaderone} /></div>
                    <a href="#link" onClick={() => this.open('http://widget.medsoncue.com/Video.aspx?t=FB83BC82-924D-4FA2-A956-7FA47285FC16&c=xuX558Fa7kkd&idtype=4&vid=70080')}><FormattedMessage {...messages.headertxt} /></a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mag-links-rightbox">
                    <div className="mag-links-subTxt"><FormattedMessage {...messages.subheadertwo} /></div>
                    <a href="#link" onClick={() => this.open('https://www.medicare.gov/')}><FormattedMessage {...messages.subheaderlink} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LinksStyles>
      </div>
    );
  }
}

Links.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  onHide: React.PropTypes.func.isRequired,
  showLink: React.PropTypes.func.isRequired,
  linkUrl: React.PropTypes.string.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Links);
