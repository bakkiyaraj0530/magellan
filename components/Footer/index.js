/**
*
* Footer
*
*/

import React from 'react';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import FooterLogo from './footer_logo_mrx.png';
import TwitterIcon from './twitter-icon';
import LinkedinIcon from './linkedin-icon';
import YoutubeIcon from './youtube-icon';
import Logo from './logo';
import FooterContainer from './footer';

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="appFooter">
        <FooterContainer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <ul className="list-inline">
                  <li id="twitter">
                    <a href="https://twitter.com/magellan_rx" target="_blank" title="Twitter (opens new window)">
                      <TwitterIcon title="twitter-icon" titleText="MagellanRx Twtitter" fill="#fff" stroke="#C0C4C7" width="24" height="24" />
                    </a>
                  </li>
                  <li id="linkedin">
                    <a href="https://www.linkedin.com/company/magellan-rx-management" target="_blank" title="LinkedIn (opens new window)">
                      <LinkedinIcon title="linkedin-icon" titleText="MagellanRx Linkedin" fill="#fff" stroke="#C0C4C7" width="24" height="24" />
                    </a>
                  </li>
                  <li id="youtube">
                    <a href="https://www.youtube.com/channel/UCruVCts2sOwbCj1nG7frnjQ" target="_blank" title="Youtube (opens new window)">
                      <YoutubeIcon title="youtube-icon" titleText="MagellanRx youtube" fill="#fff" stroke="#C0C4C7" width="24" height="24" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <a href="http://magellanrx.com"><Logo src={FooterLogo} alt="MagellanRx Management Footer Logo" className="magellan-footer-logo" /></a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <ul className="list-inline">
                  <li><a href="https://www1.magellanrx.com/magellan-rx/mrx-privacy-policy.aspx" target="_blank">Privacy Policy</a></li>
                  <li className="separator">/</li>
                  <li><a href="https://www1.magellanrx.com/magellan-rx/mrx-terms-of-use.aspx" target="_blank">Terms of Use</a></li>
                  <li className="separator">/</li>
                  <li><a href="https://www1.magellanrx.com/magellan-rx/mrx-disclaimer.aspx" target="_blank">Disclaimer</a></li>
                  <li className="separator">/</li>
                  <li><a href="https://www1.magellanrx.com/magellan-rx/nondiscrimination-languages.aspx" target="_blank">Nondiscrimination</a></li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="magellan-footer-rights-reserved"> &#169;1999-2017
                  <a href="http://magellanhealth.com" target="_blank"> Magellan Health, Inc.</a>
                  <br className="visible-xs" />All Rights Reserved.
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <ul className="list-inline">
                  <li><a href="https://www1.magellanrx.com/magellan-rx/nondiscrimination-languages.aspx#Spanish" target="_blank" title="(opens new window)">Español</a></li>
                  <li><a href="https://www1.magellanrx.com/magellan-rx/nondiscrimination-languages.aspx#Chinese" target="_blank" title="(opens new window)">繁體中文</a></li>
                  <li><a href="https://www1.magellanrx.com/magellan-rx/nondiscrimination-languages.aspx#Vietnamese" target="_blank" title="(opens new window)">Tiếng Việt</a></li>
                  <li><a href="https://www1.magellanrx.com/magellan-rx/nondiscrimination-languages.aspx#Korean" target="_blank" title="(opens new window)">한국어</a></li>
                  <li><a href="https://www1.magellanrx.com/magellan-rx/nondiscrimination-languages.aspx#Russian" target="_blank" title="(opens new window)">Русский</a></li>
                  <li><a href="https://www1.magellanrx.com/magellan-rx/nondiscrimination-languages.aspx#Arabic" target="_blank" title="(opens new window)">العربية</a></li>
                  <li><a href="https://www1.magellanrx.com/magellan-rx/nondiscrimination-languages.aspx#French" target="_blank" title="(opens new window)">Français</a></li>
                  <li><a href="https://www1.magellanrx.com/magellan-rx/nondiscrimination-languages.aspx#Polish" target="_blank" title="(opens new window)">Polski</a></li>
                  <li><a href="https://www1.magellanrx.com/magellan-rx/nondiscrimination-languages.aspx#Filipino" target="_blank" title="(opens new window)">Tagalog</a></li>
                  <li><a href="https://www1.magellanrx.com/magellan-rx/nondiscrimination-languages.aspx#Italian" target="_blank" title="(opens new window)">Italiano</a></li>
                  <li><a href="https://www1.magellanrx.com/magellan-rx/nondiscrimination-languages.aspx#German" target="_blank" title="(opens new window)">Deutsch</a></li>
                  <li><a href="https://www1.magellanrx.com/magellan-rx/nondiscrimination-languages.aspx#FrenchCreole" target="_blank" title="(opens new window)">French Creole</a></li>
                  <li><a href="https://www1.magellanrx.com/magellan-rx/nondiscrimination-languages.aspx#Urdu" target="_blank" title="(opens new window)">ردُو</a></li>
                  <li><a href="https://www1.magellanrx.com/magellan-rx/nondiscrimination-languages.aspx#Bengali" target="_blank" title="(opens new window)">বাংলা</a></li>
                  <li><a href="https://www1.magellanrx.com/magellan-rx/nondiscrimination-languages.aspx#Yiddish" target="_blank" title="(opens new window)">אידיש</a></li>
                </ul>
              </div>
            </div>
          </div>
        </FooterContainer>
      </div>
    );
  }
}

Footer.propTypes = {

};

export default Footer;
