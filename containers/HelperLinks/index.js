/*
 *
 * HelperLinks
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import HelperLinksStyles from './HelperLinksStyles';
import ModalAlert from '../../components/ModalAlert';
import AdobeIcon from './AdobeIcon';
import MicrosoftIcon from './MicrosoftIcon';
import ChromeIcon from './ChromeIcon';
import FirefoxIcon from './FirefoxIcon';
import IEIcon from './IEIcon';
import OperaIcon from './OperaIcon';

export class HelperLinks extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
          title="Helper Links | MagellanRx Management"
          meta={[
            { name: 'description', content: 'Description of HelperLinks' },
          ]}
        />
        <HelperLinksStyles>
          <div className="mag-helputil-container">
            <h1><FormattedMessage {...messages.header} /></h1>
            <div className="mag-helputil-con">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mag-helputil-leftbox">
                    <div className="mag-helputil-subTxt"><FormattedMessage {...messages.subtxt} /></div>
                    <div className="mag-helputil-iconArea">
                      <a href="#link" onClick={() => this.open('https://get.adobe.com/reader/')}><AdobeIcon /><span><FormattedMessage {...messages.adobe} /></span></a>
                      <a href="#link" onClick={() => this.open('http://www.microsoft.com/en-us/download/details.aspx?id=4')}><MicrosoftIcon /><span><FormattedMessage {...messages.wordviewer} /></span></a>
                      <a href="#link" onClick={() => this.open('https://www.microsoft.com/en-us/download/details.aspx?id=10')}><MicrosoftIcon /><span><FormattedMessage {...messages.excelviewer} /></span></a>
                      <a href="#link" onClick={() => this.open('https://www.microsoft.com/en-us/download/details.aspx?id=13')}><MicrosoftIcon /><span><FormattedMessage {...messages.powerviewer} /></span></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mag-helputil-rightbox">
                    <div className="mag-helputil-subTxt"><FormattedMessage {...messages.browsersubhead} /></div>
                    <div className="mag-helputil-iconArea">
                      <a href="#link" onClick={() => this.open('https://www.google.com/chrome/browser/desktop/index.html')}><ChromeIcon /><span><FormattedMessage {...messages.chrome} /></span></a>
                      <a href="#link" onClick={() => this.open('https://www.mozilla.org/en-US/firefox/new/')}><FirefoxIcon /><span><FormattedMessage {...messages.firefox} /></span></a>
                      <a href="#link" onClick={() => this.open('https://support.microsoft.com/en-us/help/17621/internet-explorer-downloads')}><IEIcon /><span><FormattedMessage {...messages.explorer} /></span></a>
                      <a href="#link" onClick={() => this.open('http://www.opera.com/')}><OperaIcon /><span><FormattedMessage {...messages.opera} /></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HelperLinksStyles>
      </div>
    );
  }
}

HelperLinks.propTypes = {
  dispatch: PropTypes.func.isRequired,
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

export default connect(null, mapDispatchToProps)(HelperLinks);
