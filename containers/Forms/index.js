/*
 *
 * Forms
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Scroll from 'react-scroll';
import messages from './messages';
import FormsStyles from './FormsStyles';
import UpArrow from './images/top.png';
import { makeSelectAppState, selectedLanguageState } from '../App/selectors';
const Element = Scroll.Element;
const scroll = Scroll.animateScroll;
export class Forms extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    const mobBreakPoint = (window.innerWidth < 767);
    this.state = {
      activeObj: {
        appointment: mobBreakPoint ? '' : 'active',
      },
      mobBreakPoint,
    };
  }
  getCurrentLocale = () => this.props.language.locale === 'en' ? 'en-us' : 'es-es'
  linkClick = (active) => {
    scroll.scrollToTop();
    this.state.activeObj = {};
    this.state.activeObj[active] = 'active';
    if (this.state.mobBreakPoint) {
      document.getElementById('appHeader').style.overflow = 'hidden';
      document.getElementById('appNavbar').style.overflow = 'hidden';
      document.getElementById('tab-header').style.display = 'none';
      document.getElementById('appFooter').style.display = 'none';
    }
    this.setState({ activeObj: this.state.activeObj });
  }
  closeClick = () => {
    this.state.activeObj = {};
    document.getElementById('appHeader').style.overflow = 'auto';
    document.getElementById('appNavbar').style.overflow = 'auto';
    document.getElementById('tab-header').style.display = 'block';
    document.getElementById('appFooter').style.display = 'block';
    this.setState({ activeObj: this.state.activeObj });
  }
  backToTop = () => {
    scroll.scrollToTop();
  }
  render() {
    return (
      <div>
        <Helmet
          title="Forms | MagellanRx Management"
          meta={[
            { name: 'description', content: 'Description of Forms' },
          ]}
        />
        <FormsStyles><div>
          <div className="forms-appnt">
            <div id="tab-header"><h1><FormattedMessage {...messages.header} /></h1>
              <ul className="nav nav-tabs clearfix" role="tablist">
                <li className={`col-xs-12 col-sm-6 col-md-4 col-lg-4 ${this.state.activeObj.appointment}`}><a href="#tab" onClick={() => this.linkClick('appointment')} role="tab" data-toggle="tab"><FormattedMessage {...messages.appointmentheadlink} /></a></li>
                <li className={`col-xs-12 col-sm-6 col-md-4 col-lg-4 ${this.state.activeObj.howtomake}`}><a href="#tab" onClick={() => this.linkClick('howtomake')} role="tab" data-toggle="tab"><FormattedMessage {...messages.complaintheadlink} /></a></li>
                <li className={`col-xs-12 col-sm-6 col-md-4 col-lg-4 ${this.state.activeObj.premiumpay}`}><a href="#tab" onClick={() => this.linkClick('premiumpay')} role="tab" data-toggle="tab"><FormattedMessage {...messages.premiumheadlink} /></a></li>
                <li className={`col-xs-12 col-sm-6 col-md-4 col-lg-4 ${this.state.activeObj.coverage}`}><a href="#tab" onClick={() => this.linkClick('coverage')} role="tab" data-toggle="tab"><FormattedMessage {...messages.determinateheadlink} /></a></li>
                <li className={`col-xs-12 col-sm-6 col-md-4 col-lg-4 ${this.state.activeObj.mailorder}`}><a href="#tab" onClick={() => this.linkClick('mailorder')} role="tab" data-toggle="tab"><FormattedMessage {...messages.mailhead} /></a></li>
                <li className={`col-xs-12 col-sm-6 col-md-4 col-lg-4 ${this.state.activeObj.prescription}`}><a href="#tab" onClick={() => this.linkClick('prescription')} role="tab" data-toggle="tab"><FormattedMessage {...messages.drugheadlink} /></a></li>
                <li className={`col-xs-12 col-sm-6 col-md-4 col-lg-4 ${this.state.activeObj.enrollment}`}><a href="#tab" onClick={() => this.linkClick('enrollment')} role="tab" data-toggle="tab"><FormattedMessage {...messages.enrolmenthead} /></a></li>
                <li className={`col-xs-12 col-sm-6 col-md-4 col-lg-4 ${this.state.activeObj.outofnetwork}`}><a href="#tab" onClick={() => this.linkClick('outofnetwork')} role="tab" data-toggle="tab"><FormattedMessage {...messages.coverageheadtop} /></a></li>
                <li className={`col-xs-12 col-sm-6 col-md-4 col-lg-4 ${this.state.activeObj.quality}`}><a href="#tab" onClick={() => this.linkClick('quality')} role="tab" data-toggle="tab"><FormattedMessage {...messages.qualityhead} /></a></li>
              </ul></div>
            <Element className="tab-content">
              <div className={`tab-pane ${this.state.activeObj.appointment}`}>
                <span className="closeicon"><button onClick={() => this.closeClick()}><FormattedMessage {...messages.closebutton} /></button></span>
                <h2><FormattedMessage {...messages.appointmenthead} /></h2>
                <p><FormattedMessage {...messages.appointmentdescone} /></p>
                <p><FormattedMessage {...messages.appointmentdesctwo} /></p>
                <p><span className="mag-forms-bold"><FormattedMessage {...messages.appointmentdescthree} /></span><br />1-800-424-5870</p>
                <p><span className="mag-forms-bold"><FormattedMessage {...messages.medcontact} /></span><br /><FormattedMessage {...messages.medccphone} /></p>
                <p className="pad-top app-btn"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/Appointment_of_Representative.pdf`} title="Appointment of Representative Form"><FormattedMessage {...messages.appointmentdesclink} /></a></p>
              </div>
              <div className={`tab-pane ${this.state.activeObj.howtomake}`}>
                <span className="closeicon"><button onClick={() => this.closeClick()}><FormattedMessage {...messages.closebutton} /></button></span>
                <h2><FormattedMessage {...messages.complainthead} /></h2>
                <p><FormattedMessage {...messages.complaintdescone} /></p>
                <h3><FormattedMessage {...messages.complaintdesctwo} /></h3>
                <p><span className="mag-forms-bold"><FormattedMessage {...messages.complaintdescthree} /></span></p>
                <ul className="list-leftspace">
                  <li><FormattedMessage {...messages.complaintlinkone} /></li>
                  <li><FormattedMessage {...messages.complaintlinktwo} /></li>
                  <li><FormattedMessage {...messages.complaintlinkthree} /></li>
                  <li><FormattedMessage {...messages.complaintlinkfour} /></li>
                  <li><FormattedMessage {...messages.complaintlinkfive} /></li>
                  <li><FormattedMessage {...messages.complaintlinksix} /></li>
                </ul>
                <p className="pad-top"><span className="mag-forms-bold"><FormattedMessage {...messages.complaintmailboxhead} /></span></p>
                <p><FormattedMessage {...messages.complaintmedicarehead} /><br />
                  <FormattedMessage {...messages.complaintaddressone} /><br />
                  <FormattedMessage {...messages.pobox} /><br />
                  <FormattedMessage {...messages.address} />
                </p>
                <p><FormattedMessage {...messages.medfax} /><br />
                  <FormattedMessage {...messages.medfaxno} />
                </p>
                <p className="pad-top"><FormattedMessage {...messages.moreinfo} /></p>
                <p><FormattedMessage {...messages.detaileddesc} /></p>
                <p className="pad-top app-btn"><a target="_blank" href="https://www.medicare.gov/MedicareComplaintForm/home.aspx" title="CMS Complaint Form"><FormattedMessage {...messages.complaintlink} /></a></p>
                <div className="back-to-top">
                  <a href="#top" onClick={() => this.backToTop()}><img src={UpArrow} alt="up arrow" /><FormattedMessage {...messages.backtotop} /></a>
                </div>
              </div>
              <div className={`tab-pane ${this.state.activeObj.premiumpay}`}>
                <span className="closeicon"><button onClick={() => this.closeClick()}><FormattedMessage {...messages.closebutton} /></button></span>
                <h2><FormattedMessage {...messages.premiumhead} /></h2>
                <h3 className="mrg-top0"><FormattedMessage {...messages.premiumtitle} /></h3>
                <p><FormattedMessage {...messages.premiumdesc} /></p>
                <p><FormattedMessage {...messages.premiumdescsub} /></p>
                <h3><FormattedMessage {...messages.premiumtitleone} /></h3>
                <p><FormattedMessage {...messages.premiumdescone} /></p>
                <p><span className="mag-forms-bold"><FormattedMessage {...messages.premiumdesconesub} /></span></p>
                <p><FormattedMessage {...messages.premiumaddress} /><br />
                  <FormattedMessage {...messages.premiumpobox} /><br />
                  <FormattedMessage {...messages.premiumstate} />
                </p>
                <h3><FormattedMessage {...messages.premiumtitletwo} /></h3>
                <p><FormattedMessage {...messages.premiumdesctwo} /></p>
                <h3><FormattedMessage {...messages.premiumtitlethree} /></h3>
                <p><FormattedMessage {...messages.premiumdescthree} /></p>
                <h3><FormattedMessage {...messages.premiumtitlefour} /></h3>
                <p><FormattedMessage {...messages.premiumdescfour} /></p>
                <h3><FormattedMessage {...messages.premiumtitlefive} /></h3>
                <p><FormattedMessage {...messages.premiumdescfive} /><br />
                  <a href="http://medicare.magellanrx.com/payments/" target="_blank"><FormattedMessage {...messages.premiumlinkone} /></a>
                </p>
                <p><FormattedMessage {...messages.premiumlinkdesc} /><br />
                  <a href="http://medicare.magellanrx.com" target="_blank"><FormattedMessage {...messages.premiumlinktwo} /></a>
                </p>
                <p><FormattedMessage {...messages.premiumlastdesc} /><br />
                  <a href="/member/registration/" target="_blank"><FormattedMessage {...messages.premiumregister} /></a>
                </p>
                <p><a href="https://adfs.mma.magellanhealth.com/vissts/public/COMM/login.aspx?wa=wsignin1.0&wtrealm=http%3a%2f%2fadfs.mma.magellanhealth.com%2fadfs%2fservices%2ftrust&wauth=urn%3aoasis%3anames%3atc%3aSAML%3a1.0%3aam%3apassword&wct=2017-07-06T12%3a20%3a51Z&#en-us" target="_blank"><FormattedMessage {...messages.premiumlogin} /></a></p>
                <div className="back-to-top"><a href="#top" onClick={() => this.backToTop()}><img src={UpArrow} alt="up arrow" /> <FormattedMessage {...messages.backtotop} /></a></div>
              </div>
              <div className={`tab-pane ${this.state.activeObj.coverage}`}>
                <span className="closeicon"><button onClick={() => this.closeClick()}><FormattedMessage {...messages.closebutton} /></button></span>
                <h2><FormattedMessage {...messages.determinatehead} /></h2>
                <h3 className="mrg-top0"><FormattedMessage {...messages.determinatesubhead} /></h3>
                <p><FormattedMessage {...messages.determinatedesc} /></p>
                <p className="pad-top app-btn"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/Coverage_Determination_Request_Form.pdf`} title="Coverage Determination Form"><FormattedMessage {...messages.determinatelink} /></a></p>
                <p className="pad-top mrg-btm0"><FormattedMessage {...messages.determinateinfo} /><br />
                  {this.props.global.userInfo === null ?
                    <a href="/login" title="Access the online coverage determination process."><FormattedMessage {...messages.determinateaccesslink} /></a>
                    : <a href="/cvgdetermination/#!/member" title="Access the online coverage determination process."><FormattedMessage {...messages.determinateaccesslink} /></a>
                  }
                </p>
                <p className="pad-top mag-font-bold"><span><FormattedMessage {...messages.determinateintro} /></span></p>
                <p><FormattedMessage {...messages.complaintmedicarehead} /><br />
                  <FormattedMessage {...messages.complaintaddress} /><br />
                  <FormattedMessage {...messages.pobox} /><br />
                  <FormattedMessage {...messages.medaddress} />
                </p>
                <p><FormattedMessage {...messages.callus} /><br /> <FormattedMessage {...messages.medphone} /></p>
                <p className="mrg-btm0"><FormattedMessage {...messages.medfax} /><br /><FormattedMessage {...messages.medfaxno} /></p>
                <p className="pad-top"><FormattedMessage {...messages.someintro} /></p>
                <h3 className="mrg-top0"><FormattedMessage {...messages.someintrohead} /></h3>
                <p><FormattedMessage {...messages.someintrodesc} /></p>
                <h3><FormattedMessage {...messages.someintrosubhead} /></h3>
                <ul className="list-leftspace">
                  <li><FormattedMessage {...messages.pointone} /></li>
                  <li><FormattedMessage {...messages.pointtwo} /></li>
                  <li><FormattedMessage {...messages.pointthree} /></li>
                  <li><FormattedMessage {...messages.pointfour} /></li>
                  <li><FormattedMessage {...messages.pointfive} /></li>
                  <li><FormattedMessage {...messages.pointsix} /></li>
                </ul>
                <h3><FormattedMessage {...messages.headagree} /></h3>
                <p className="mrg-btm0"><FormattedMessage {...messages.headdesc} /></p>
                <h3 className="pad-top mrg-top0"><FormattedMessage {...messages.headappeal} /></h3>
                <h3><FormattedMessage {...messages.appeal} /></h3>
                <p><FormattedMessage {...messages.headpointone} /></p>
                <p className="pad-top app-btn"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/Model_Redetermination_Request_Form.docx`} title="Redetermination Request Form"><FormattedMessage {...messages.headpointlink} /></a></p>
                <p className="pad-top"><FormattedMessage {...messages.headpointlinkdesc} /></p>
                <p className="mag-font-bold"><span><FormattedMessage {...messages.headpointonedec} /></span></p>
                <p><FormattedMessage {...messages.complaintmedicarehead} /><br />
                  <FormattedMessage {...messages.departhead} /><br />
                  <FormattedMessage {...messages.pobox} /><br />
                  <FormattedMessage {...messages.address} />
                </p>
                <p><FormattedMessage {...messages.callus} /><br />
                  <FormattedMessage {...messages.medphone} /><br />
                </p>
                <p className="mag-font-bold"><span><FormattedMessage {...messages.checklisthead} /></span></p>
                <ul className="list-leftspace">
                  <li><FormattedMessage {...messages.checkpointone} /></li>
                  <li><FormattedMessage {...messages.checkpointtwo} /></li>
                  <li><FormattedMessage {...messages.checkpointthree} /></li>
                </ul>
                <h3><FormattedMessage {...messages.examplehead} /></h3>
                <p className="mag-font-bold"><span><FormattedMessage {...messages.examplepointone} /></span></p>
                <ul className="list-leftspace">
                  <li><FormattedMessage {...messages.listone} /></li>
                  <li><FormattedMessage {...messages.listtwo} /></li>
                  <li><FormattedMessage {...messages.listthree} /></li>
                </ul>
                <h3><FormattedMessage {...messages.soonhead} /></h3>
                <p className="mag-font-bold"><span><FormattedMessage {...messages.soondesc} /></span></p>
                <ul className="list-leftspace">
                  <li><FormattedMessage {...messages.questionlistone} /></li>
                  <li><FormattedMessage {...messages.questionlisttwo} /></li>
                  <li><FormattedMessage {...messages.questionlistthree} /></li>
                  <li><FormattedMessage {...messages.questionlistfour} /></li>
                  <li><FormattedMessage {...messages.questionlistfive} />
                    <ul className="second-level-list">
                      <li><FormattedMessage {...messages.questionlistsix} /></li>
                      <li><FormattedMessage {...messages.questionlistseven} /></li>
                    </ul>
                  </li>
                  <li><FormattedMessage {...messages.questionlisteight} /></li>
                </ul>
                <p className="mag-font-bold"><span><FormattedMessage {...messages.questioninfo} /></span></p>
                <p><FormattedMessage {...messages.medicarehead} /><br />
                  <FormattedMessage {...messages.pobox} /><br />
                  <FormattedMessage {...messages.address} />
                </p>
                <p><FormattedMessage {...messages.callus} /><br />
                  <FormattedMessage {...messages.medphone} />
                </p>
                <p><FormattedMessage {...messages.medfax} /><br />
                  <FormattedMessage {...messages.medfaxno} />
                </p>
                <p className="mag-font-bold"><span><FormattedMessage {...messages.determinatefooterdesc} /></span></p>
                <p><FormattedMessage {...messages.medicarehead} /><br />
                  <FormattedMessage {...messages.complaintaddressone} /><br />
                  <FormattedMessage {...messages.pobox} /><br />
                  <FormattedMessage {...messages.address} />
                </p>
                <div className="back-to-top"><a href="#top" onClick={() => this.backToTop()}><img src={UpArrow} alt="up arrow" /> <FormattedMessage {...messages.backtotop} /></a></div>
              </div>
              <div className={`tab-pane ${this.state.activeObj.mailorder}`}>
                <span className="closeicon"><button onClick={() => this.closeClick()}><FormattedMessage {...messages.closebutton} /></button></span>
                <h2><FormattedMessage {...messages.mailhead} /></h2>
                <p><FormattedMessage {...messages.maildesc} /></p>
                <p className="pad-top"><span className="mag-forms-bold"><FormattedMessage {...messages.mailinfo} /></span><br />
                  <a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_MRxMailOrderInfo.pdf`} title="Magellan Rx Home mail service pharmacy"><FormattedMessage {...messages.maillink} /></a>
                </p>
                <p className="pad-top app-btn"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_MRxMailOrderForm.pdf`} title="Mail Order Form"><FormattedMessage {...messages.mailorderlink} /></a></p>
              </div>
              <div className={`tab-pane ${this.state.activeObj.prescription}`}>
                <span className="closeicon"><button onClick={() => this.closeClick()}><FormattedMessage {...messages.closebutton} /></button></span>
                <h2><FormattedMessage {...messages.drughead} /></h2>
                <p><FormattedMessage {...messages.drugdescone} /></p>
                <p className="pad-top"><FormattedMessage {...messages.drugdesctwo} /> <span className="mag-forms-bold"><FormattedMessage {...messages.drugdesctwopart} /></span> <span><FormattedMessage {...messages.drugdesctwopartspan} /></span></p>
                <p><FormattedMessage {...messages.drugdescthree} /></p>
                <p><FormattedMessage {...messages.drugdescfour} /></p>
                <p className="pad-top"><FormattedMessage {...messages.drugdescfive} /></p>
                <p className="pad-top"><FormattedMessage {...messages.drugdescsix} /></p>
                <p className="pad-top app-btn"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_Prescription_Drug_Claim_Form.pdf`} title="Prescription Drug Claim Form"><FormattedMessage {...messages.druglink} /></a></p>
                <div className="back-to-top">
                  <a href="#top" onClick={() => this.backToTop()}><img src={UpArrow} alt="up arrow" /><FormattedMessage {...messages.backtotop} /></a>
                </div>
              </div>
              <div className={`tab-pane ${this.state.activeObj.enrollment}`}>
                <div className="frm-close"><span className="closeicon"><button onClick={() => this.closeClick()}><FormattedMessage {...messages.closebutton} /></button></span></div>
                <h2><FormattedMessage {...messages.enrolmenthead} />:</h2>
                <p><FormattedMessage {...messages.enrolmentdescone} /></p>
                <p><FormattedMessage {...messages.enrolmentdesctwo} /></p>
                <p className="pad-top app-btn"><a target="_blank" href="https://www.medicare.gov/" title="Online Enrollment"><FormattedMessage {...messages.linkone} /></a></p>
                <p className="pad-top app-btn"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/2017_PDP_Enrollment_Form.pdf`} title="2017 Enrollment Form"><FormattedMessage {...messages.linktwo} /></a></p>
                <p className="pad-top mag-font-bold"><span><FormattedMessage {...messages.linktag} /></span></p>
                <p><FormattedMessage {...messages.medicarehead} /><br />
                  <FormattedMessage {...messages.medpobox} /><br />
                  <FormattedMessage {...messages.medaddress} />
                </p>
                <p><FormattedMessage {...messages.callus} /><br />
                  <FormattedMessage {...messages.medphone} />
                </p>
                <p><FormattedMessage {...messages.medfax} /><br />
                  <FormattedMessage {...messages.medfaxno} />
                </p>
                <p className="pad-top"><a target="_blank" href="https://www.medicare.gov/" title="Click this link to enroll in Magellan Rx Medicare Basic (PDP) online at medicare.gov."><FormattedMessage {...messages.medlink} /></a></p>
                <p className="pad-top"><span className="mag-font-bold"><FormattedMessage {...messages.medtxt} /></span><br />
                  <FormattedMessage {...messages.medphoneone} />
                </p>
                <p><span className="mag-font-bold"><FormattedMessage {...messages.medcontact} /></span><br />
                  <FormattedMessage {...messages.medccphone} />
                </p>
                <div className="back-to-top"><a href="#top" onClick={() => this.backToTop()}><img src={UpArrow} alt="up arrow" /> <FormattedMessage {...messages.backtotop} /></a></div>
              </div>
              <div className={`tab-pane ${this.state.activeObj.outofnetwork}`}>
                <span className="closeicon"><button onClick={() => this.closeClick()}><FormattedMessage {...messages.closebutton} /></button></span>
                <h2><FormattedMessage {...messages.coveragehead} /></h2>
                <h3><FormattedMessage {...messages.coveragesubhead} /></h3>
                <p><span className="mag-font-bold"><FormattedMessage {...messages.coveragesubdesc} /></span></p>
                <ul className="list-leftspace">
                  <li><FormattedMessage {...messages.coveragelinkone} /></li>
                  <li><FormattedMessage {...messages.coveragelinktwo} /></li>
                  <li><FormattedMessage {...messages.coveragelinkthree} /></li>
                  <li><FormattedMessage {...messages.coveragelinkfour} /><br />
                    <span><FormattedMessage {...messages.coveragelinspan} /></span> <FormattedMessage {...messages.coveragelinspandesc} />
                  </li>
                  <li><FormattedMessage {...messages.coveragelinkfive} /></li>
                </ul>
                <p className="pad-top"><span className="mag-font-bold"><FormattedMessage {...messages.coveragedescone} /></span></p>
                <p className="pad-top"><span className="mag-font-bold"><FormattedMessage {...messages.coveragedesctwo} /></span><br />
                  <FormattedMessage {...messages.coveragedescphone} />
                </p>
                <p className="pad-top"><FormattedMessage {...messages.coveragedescthree} /></p>
                <p className="pad-top"><FormattedMessage {...messages.coveragedescfour} /></p>
                <div className="back-to-top"><a href="#top" onClick={() => this.backToTop()}><img src={UpArrow} alt="up arrow" /> <FormattedMessage {...messages.backtotop} /></a></div>
              </div>
              <div className={`tab-pane ${this.state.activeObj.quality}`}>
                <span className="closeicon"><button onClick={() => this.closeClick()}><FormattedMessage {...messages.closebutton} /></button></span>
                <h2><FormattedMessage {...messages.qualityhead} />:</h2>
                <p><FormattedMessage {...messages.qualitydescone} /></p>
                <h3 className="pad-top10"><FormattedMessage {...messages.qualityheadtwo} /></h3>
                <p><FormattedMessage {...messages.qualitydesctwo} /></p>
                <h3 className="pad-top10"><FormattedMessage {...messages.qualityheadthree} /></h3>
                <p><FormattedMessage {...messages.qualitydescthree} /></p>
                <p><span className="mag-forms-bold"><FormattedMessage {...messages.qualitydescthreesub} /></span></p>
                <ul className="list-leftspace">
                  <li><FormattedMessage {...messages.qualitylistone} /></li>
                  <li><FormattedMessage {...messages.qualitylisttwo} /></li>
                  <li><FormattedMessage {...messages.qualitylistthree} /></li>
                  <li><FormattedMessage {...messages.qualitylistfour} /></li>
                  <li><FormattedMessage {...messages.qualitylistfive} /></li>
                  <li><FormattedMessage {...messages.qualitylistsix} /></li>
                </ul>
                <p className="pad-top10"><FormattedMessage {...messages.qualitylistfooter} /></p>
                <div className="back-to-top"><a href="#top" onClick={() => this.backToTop()}><img src={UpArrow} alt="up arrow" /> <FormattedMessage {...messages.backtotop} /></a></div>
              </div>
            </Element>
          </div>
        </div></FormsStyles>
      </div>
    );
  }
}

Forms.propTypes = {
  global: React.PropTypes.object.isRequired,
  language: PropTypes.object.isRequired,
};
Forms.defaultProps = {
  dispatch: PropTypes.func,
  global: PropTypes.object,
};
const mapStateToProps = createStructuredSelector({
  global: makeSelectAppState(),
  language: selectedLanguageState(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
