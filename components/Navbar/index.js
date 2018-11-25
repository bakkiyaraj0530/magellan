/**
*
* Navbar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router';
import classNames from 'classnames';

import LocaleToggle from 'containers/LocaleToggle';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Nav from './nav';
import BenefitInformationIcon from './benefit-information-icon';
import ClaimHistoryIcon from './claim-history-icon';
import PaymentsIcon from './payments-icon';
import ResourcesIcon from './tools-resources-icon';
import SearchIcon from './search-icon';
import MRxImg from '../Header/logo_mrx.png';
import MedicareImg from '../Header/logo_medicare.svg';
import FlexscriptsImg from '../Header/logo_flexscripts.png';
import MRxMailImg from '../Header/logo_mrx_mail.png';
import GatorcareImg from '../Header/logo_gatorcare.png';
import Logo from '../Header/logo';
import DropDown from '../DropDown';
import CaretIcon from './caret-icon';
import SideNav from './side-nav';
import HomeIcon from './home-icon';
import WelcomeMessage from '../WelcomeMessage';
import ModalAlert from '../NavModalAlert';
import { logoutAndDestroy } from '../../assets/js/oauth';
import { hasFeature } from '../../assets/js/feature_toggle';
import DrugPriceIcon from './price-a-drug-icon';
import FormularyIcon from './formulary-icon';
import FindAPharmacyIcon from './find-a-pharmacy-icon';
import PlanSelectionIcon from './plan-selection-icon';
import GlobalhealthImg from './logo_globalhealth.svg';
class Navbar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      logo: '',
      showModal: false,
      linkUrl: '',
    };

    this.toggleNav = this.toggleNav.bind(this);
    const contentArea = document.getElementById('app');
    contentArea.addEventListener('click', this.closeDropdowns);
  }

  componentDidMount() {
    this.getLogo();
  }

  onHide = () => {
    this.setState({ showModal: false });
  }

  getLogo() {
    if (this.props.businessLine === 'COMMERCIAL') {
      if (this.props.client === 'common' || this.props.client === 'houseacct') {
        this.setState({ logo: MRxImg });
      } else if (this.props.client === 'flexscripts') {
        this.setState({ logo: FlexscriptsImg });
        this.state.logoHeight = '70px';
      } else if (this.props.client === 'mailrx') {
        this.setState({ logo: MRxMailImg });
      } else if (this.props.client === 'gatorcare') {
        this.setState({ logo: GatorcareImg });
      }
    } else if (this.props.businessLine === 'MEDD') {
      if (this.props.client === 'medd_common') {
        this.setState({ logo: MedicareImg });
        this.state.logoHeight = '25px';
        this.state.mtop = '20px';
      }
    }
  }
  getCurrentLocale = () => this.props.language.locale === 'en' ? 'en-us' : 'es-es'
  open = (url) => {
    this.setState({ showModal: true, linkUrl: url });
  }

  showLink = (url) => {
    this.onHide();
    window.open(url, '_blank');
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
    this.closeNav();
  }

  toggleNav(e) {
    e.preventDefault();
    const navCollapse = document.getElementById('portalNav');
    if (navCollapse.className === 'collapse navbar-collapse in') {
      navCollapse.className = 'collapse navbar-collapse';
    } else {
      navCollapse.className = 'collapse navbar-collapse in';
    }
  }

  openDropdown(e) {
    e.preventDefault();
    const dropdownClass = `${e.target.id}-dropdown`;
    const dropdownCaret = `${e.target.id}-caret`;
    const dropdown = document.getElementById(dropdownClass);
    const dropdownCaretClass = document.getElementById(dropdownCaret);
    if (dropdown !== null) {
      if (dropdown.className.includes('isOpen')) {
        dropdown.className = 'dropdown';
        dropdownCaretClass.setAttribute('class', 'caret-icon');
      } else {
        dropdown.className = 'dropdown open isOpen';
        dropdownCaretClass.setAttribute('class', 'caret-icon-flipped');
      }
    }
  }

  closeDropdowns(e) {
    // console.log(e.target);
    if (e.target.id !== 'nav-resources-link') {
      const navResourcesDropdown = document.getElementById('nav-resources-link-dropdown');
      const navResourcesDropdownCaret = document.getElementById('nav-resources-link-caret');
      if (navResourcesDropdown !== null && navResourcesDropdown.className.includes('isOpen')) {
        navResourcesDropdown.className = 'dropdown';
        navResourcesDropdownCaret.setAttribute('class', 'caret-icon');
      }
    }
    if (e.target.id !== 'nav-benefits-link') {
      const navBenefitsDropdown = document.getElementById('nav-benefits-link-dropdown');
      const navBenefitsDropdownCaret = document.getElementById('nav-benefits-link-caret');
      if (navBenefitsDropdown !== null && navBenefitsDropdown.className.includes('isOpen')) {
        navBenefitsDropdown.className = 'dropdown';
        navBenefitsDropdownCaret.setAttribute('class', 'caret-icon');
      }
    }
    if (e.target.parentElement && e.target.parentElement.id !== 'header-lang-toggle-link') {
      const dropdown = document.getElementById('header-lang-toggle');
      if (dropdown && dropdown.className.includes('open')) {
        const tmpClass = dropdown.className.replace('open', '');
        dropdown.className = tmpClass;
      }
    }
  }

  openNav() {
    document.getElementById('mySidenav').style.borderRight = '1px solid #00A9E0';
    document.getElementById('mySidenav').style.width = '270px';
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById('mySidenav').style.borderRight = '1px solid #FFF';
    document.getElementById('mySidenav').style.width = '0';
  }

  closeOutNav(e) {
    e.preventDefault();
    document.getElementById('mySidenav').style.borderRight = '1px solid #FFF';
    document.getElementById('mySidenav').style.width = '0';
  }
  toggleViewIDModal(e) {
    e.preventDefault();
    const id = 'dashIDModal';
    const modal = document.getElementById(id);
    const modalBG = document.getElementById('modal-background');
    if (modal.className.includes('in')) {
      const tmpClass = modal.className.replace('in', '');
      modal.className = tmpClass;
      modal.style.display = 'none';
      modalBG.style.display = 'none';
    } else {
      modal.className += ' in';
      modal.style.display = 'block';
      modalBG.style.display = 'block';
    }
  }
  logout() {
    logoutAndDestroy();
    this.props.logoutLoading();
  }
  render() {
    const getActiveLinkClass = (path) => {
      const route = browserHistory.getCurrentLocation();
      // const pathOther = `${path}/`;
      const isPath = path.filter((e) => e === route.pathname);
      const stepClass = classNames({ 'dropdown-toggle': true, active: (isPath.length) });
      // const stepClass = classNames({ 'dropdown-toggle': true, active: path.includes(route.pathname) || pathOther.includes(route.pathname) });
      return stepClass;
    };
    const selectedLang = this.props.language && this.props.language.locale === 'es' ? 'mag-spanish-head' : '';
    const memberArrow = this.props.userInfo !== null ? ' ' : 'memberArrow';
    return (
      <div id="appNavbar">
        <ModalAlert showModal={this.state.showModal} onHide={this.onHide} linkUrl={this.state.linkUrl} showLink={this.showLink} />
        <Nav className="navbar navbar-default" selectedLang={selectedLang} >
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" onClick={this.openNav} aria-expanded="false">
                <span className="sr-only">Toggle Navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div id="navbar-mobile-logo" className="pull-right">
                <Logo src={GlobalhealthImg} width={this.state.width} height={this.state.height} alt="Magellan Logo" />
              </div>
            </div>
            <div className="collapse navbar-collapse" id="portalNav" >
              <ul className={`nav navbar-nav ${selectedLang}`}>
                {hasFeature('member_plan_selection') && <li><a href="/member/planselection" target="_parent"><PlanSelectionIcon title="plan-selection-icon" titleText="Plan Selection" fill="#0077C8" stroke="#0077C8" width="24" height="24" className="nav-plan-selection-link-icon" /><FormattedMessage {...messages.planSelection} /></a></li>}
                {(hasFeature('unsecure_find_a_pharmacy') && hasFeature('member_plan_selection')) && <li><Link to="/member/find-a-pharmacy"><FindAPharmacyIcon title="find-a-pharmacy-icon" titleText="Find A Pharmacy" fill="#0077C8" stroke="transparent" width="24" height="24" className="nav-find-a-pharmacy-link-icon" /><FormattedMessage {...messages.pharmacyLocator} /></Link></li>}
                {hasFeature('member_plan_selection') && <li><a href="" onClick={this.closeDropdowns} target="_parent" ><FormularyIcon title="formulary-icon" titleText="Formulary" fill="#0077c8" stroke="#0077c8" width="24" height="24" className="nav-formulary-link-icon" /><FormattedMessage {...messages.formulary} /></a></li>}

                {!hasFeature('member_plan_selection') &&
                <li>
                  <a id="nav-payments-link" href="/payments" className={getActiveLinkClass(['/payments'])} target="_self">
                    <PaymentsIcon title="payments-icon" titleText="Payments and Invoices" fill="#0077C8" stroke="#0077C8" width="16" height="16" />
                    {this.props.userInfo ? <FormattedMessage {...messages.viewPayBill} /> : <FormattedMessage {...messages.makePayment} />}
                  </a>
                </li>}
                {(this.props.userInfo !== null && hasFeature('claims_history')) && <li>
                  <Link id="nav-claims-link" to="/member/claims" className={getActiveLinkClass(['/member/claims', '/member/claims/'])} onClick={this.closeDropdowns}>
                    <ClaimHistoryIcon title="claims-history-icon" titleText="Claims History" fill="#0077C8" stroke="transparent" width="16" height="16" /><FormattedMessage {...messages.claimsHistory} />
                  </Link>
                </li>}
                {this.props.userInfo !== null && <li className="dropdown" id="nav-benefits-link-dropdown" >
                  <a className={getActiveLinkClass(['/member/benefits', '/member/benefits/'])} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="" onClick={this.openDropdown} >
                    <div id="nav-benefits-link">
                      <BenefitInformationIcon title="benefit-info-icon" titleText="Your Benefit Information" fill="#0077C8" stroke="#0077C8" width="16" height="16" />
                      <FormattedMessage {...messages.benefitInformation} /><CaretIcon id="nav-benefits-link-caret" title="tools-resources-caret-icon" titleText="Caret Icon" fill="#0077C8" stroke="transparent" width="18" height="10" className="caret-icon mag-caret" />
                    </div>
                  </a>
                  <DropDown className="dropdown-menu">
                    <div className="arrow  hidden-sm hidden-xs"></div>
                    {hasFeature('healthcare_balances') && <li><Link to="/member/benefits" ><FormattedMessage {...messages.benefitsPlan} /></Link></li>}
                    {hasFeature('healthcare_balances') && <li role="separator" className="divider"></li>}
                    {hasFeature('view_id_card') && <li><a href="" data-toggle="modal" onClick={this.toggleViewIDModal} ><FormattedMessage {...messages.viewID} /></a></li>}
                    {hasFeature('view_id_card') && <li role="separator" className="divider"></li>}
                    {hasFeature('account_settings') && <li><a href="/member/accountsettings" onClick={this.closeDropdowns} target="_parent" ><FormattedMessage {...messages.accountSettings} /></a></li>}
                  </DropDown>
                </li>}
                {!hasFeature('member_plan_selection') &&
                <li className="dropdown" id="nav-resources-link-dropdown" >
                  <a className={getActiveLinkClass(['/member/forms', '/member/mail-order', '/member/documents', '/member/links', '/member/helper-tools', '/member/forms/', '/member/mail-order/', '/member/documents/', '/member/links/', '/member/helper-tools/'])} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="" onClick={this.openDropdown}>
                    <div id="nav-resources-link">
                      <ResourcesIcon title="resources-icon" titleText="Tools and Resources" fill="#0077C8" stroke="transparent" width="16" height="16" /><FormattedMessage {...messages.toolsResources} />
                      <CaretIcon id="nav-resources-link-caret" title="tools-resources-caret-icon" titleText="Caret Icon" fill="#0077C8" stroke="transparent" width="18" height="10" className="caret-icon mag-caret" />
                    </div>
                  </a>
                  <DropDown className="dropdown-menu " >
                    <div className={`arrow  hidden-sm hidden-xs ${memberArrow}`}></div>
                    {(this.props.userInfo !== null && hasFeature('drug_lookup')) && <li><a href="/member/druglookuponly" target="_parent" ><FormattedMessage {...messages.drugLookup} /></a></li>}
                    {(this.props.userInfo !== null && hasFeature('drug_lookup')) && <li role="separator" className="divider"></li>}
                    {(this.props.userInfo !== null && hasFeature('find_a_pharmacy')) && <li><a href="/member/find-a-pharmacy" onClick={this.closeDropdowns} target="_parent" ><FormattedMessage {...messages.pharmacyLocator} /></a></li>}
                    {(this.props.userInfo === null && hasFeature('unsecure_find_a_pharmacy')) && <li><a href="/member/publicPharmacylocator" onClick={this.closeDropdowns} target="_parent" ><FormattedMessage {...messages.pharmacyLocator} /></a></li>}
                    <li role="separator" className="divider"></li>
                    {this.props.userInfo === null && <li><a href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_PDP_ComprehensiveFormulary.pdf`} onClick={this.closeDropdowns} target="_blank" ><FormattedMessage {...messages.formulary} /></a></li>}
                    {this.props.userInfo === null && <li role="separator" className="divider"></li>}
                    {(this.props.userInfo !== null && hasFeature('coverage_determination')) && <li><a href="/cvgdetermination/#!/member" target="_self"><FormattedMessage {...messages.covDetermination} /></a></li>}
                    {(this.props.userInfo !== null && hasFeature('coverage_determination')) && <li role="separator" className="divider"></li>}
                    {(this.props.userInfo !== null && hasFeature('mail_order_third_party')) && <li><Link to="/member/mail-order" ><FormattedMessage {...messages.mailOrder} /></Link></li>}
                    {(this.props.userInfo !== null && hasFeature('mail_order_third_party')) && <li role="separator" className="divider"></li>}
                    <li><Link to="/member/forms" ><FormattedMessage {...messages.formsAndInformation} /></Link></li>
                    <li role="separator" className="divider"></li>
                    <li><Link to="/member/documents" ><FormattedMessage {...messages.documents} /></Link></li>
                    <li role="separator" className="divider"></li>
                    <li><Link to="/member/links" ><FormattedMessage {...messages.links} /></Link></li>
                    <li role="separator" className="divider"></li>
                    <li><Link to="/member/helper-tools" ><FormattedMessage {...messages.helperTools} /></Link></li>
                    {!this.props.userInfo &&
                      <div className="mag-nav-rxcare">
                        <li role="separator" className="divider"></li>
                        <li>
                          <a onClick={() => this.open('https://magellanrx.com/cares')} href="#link"><FormattedMessage {...messages.mrxCares} /></a>
                        </li>
                      </div>
                    }
                  </DropDown>
                </li>}
              </ul>
              <ul className="nav navbar-nav pull-right hidden-sm hidden-xs">
                {(this.props.userInfo !== null && !hasFeature('drug_lookup')) &&
                <li>
                  <a id="nav-price-drug-link" href="/member/druglookup" onClick={this.closeDropdowns} target="_parent"><SearchIcon title="search-icon" titleText="Price a Drug" fill="#fff" stroke="transparent" width="19" height="19" className="nav-price-drug-link-icon" /><FormattedMessage {...messages.priceDrug} /></a>
                </li>}
                {hasFeature('price_a_drug') &&
                <li>
                  <a id="nav-price-drug-link" href="/member/drug-pricing" onClick={this.closeDropdowns} target="_parent"><DrugPriceIcon title="search-icon" titleText="Price a Drug" fill="#fff" stroke="transparent" width="24" height="24" className="nav-price-drug-link-icon" /><FormattedMessage {...messages.priceDrug} /></a>
                </li>}
                {(this.props.userInfo === null && !hasFeature('unsecure_portal')) &&
                <li>
                  <a id="nav-register-link" href="/member/registration" target="_self"><FormattedMessage {...messages.register} /></a>
                </li>}
                {(this.props.userInfo === null && !hasFeature('unsecure_portal')) &&
                <li>
                  <a id="nav-login-link" href="/login" target="_self"><FormattedMessage {...messages.login} /></a>
                </li>}
              </ul>
            </div>
          </div>
        </Nav>

        <SideNav id="mySidenav" className="sidenav">
          {this.props.userInfo !== null ? <WelcomeMessage userFirstName={this.props.userInfo.userFirstName} userLastName={this.props.userInfo.userLastName} /> : null}
          <a href="" className="closebtn" onClick={this.closeOutNav}>&times;</a>
          <ul className="nav">
            {this.props.userInfo !== null ?
              <li>
                <Link id="nav-mobile-home-link" to="/member/dashboard" onClick={this.closeNav}>
                  <HomeIcon title="home-icon" titleText="Go Back to Dashboard" fill="#0077C8" stroke="transparent" width="16" height="16" />&nbsp;
                  <FormattedMessage {...messages.homeNav} />
                </Link>
              </li>
              : <li>
                <Link id="nav-mobile-home-link" to="/member" onClick={this.closeNav}>
                  <HomeIcon title="home-icon" titleText="Go Back to Dashboard" fill="#0077C8" stroke="transparent" width="16" height="16" />&nbsp;
                  <FormattedMessage {...messages.homeNav} />
                </Link>
              </li> }
            <li>
              <a id="nav-mobile-payments-link" href="/payments" target="_self">
                <PaymentsIcon title="mobile-payments-icon" titleText="Payments and Invoices" fill="#0077C8" stroke="#0077C8" width="16" height="16" />
                {this.props.userInfo ? <FormattedMessage {...messages.viewPayBill} /> : <FormattedMessage {...messages.makePayment} />}
              </a>
            </li>
            {this.props.userInfo !== null && <li>
              <Link id="nav-mobile-claims-link" to="/member/claims" onClick={this.closeNav}>
                <ClaimHistoryIcon title="claims-history-icon" titleText="Claims History" fill="#0077C8" stroke="transparent" width="16" height="16" /><FormattedMessage {...messages.claimsHistory} />
              </Link>
            </li>}
            {this.props.userInfo !== null && <li className="dropdown" id="nav-benefits-link-mobile-dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="" onClick={this.openDropdown} >
                <div id="nav-benefits-link-mobile">
                  <BenefitInformationIcon title="benefit-info-icon" titleText="Your Benefit Information" fill="#0077C8" stroke="#0077C8" width="16" height="16" />
                  <FormattedMessage {...messages.benefitInformation} /><CaretIcon id="nav-benefits-link-mobile-caret" title="nav-benefits-link-mobile-caret-title" titleText="Caret Icon" fill="#0077C8" stroke="transparent" width="18" height="10" className="caret-icon" />
                </div>
              </a>
              <DropDown className="dropdown-menu">
                <div className="arrow  hidden-sm hidden-xs"></div>
                <li><Link to="/member/benefits" onClick={this.closeNav}><FormattedMessage {...messages.benefitsPlan} /></Link></li>
                {this.props.userInfo !== null && <li><a href="" data-toggle="modal" onClick={this.toggleViewIDModal} ><FormattedMessage {...messages.viewID} /></a></li>}
                <li><a href="/member/accountsettings" onClick={this.closeDropdowns} target="_parent" ><FormattedMessage {...messages.accountSettings} /></a></li>
              </DropDown>
            </li>}
            <li className="dropdown" id="nav-resources-link-mobile-dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="" onClick={this.openDropdown} >
                <div id="nav-resources-link-mobile">
                  <ResourcesIcon title="mobile-resources-icon" titleText="Tools and Resources" fill="#0077C8" stroke="transparent" width="16" height="16" /><FormattedMessage {...messages.toolsResources} />
                  <CaretIcon id="nav-resources-link-mobile-caret" title="nav-resources-link-mobile-caret-title" titleText="Caret Icon" fill="#0077C8" stroke="transparent" width="18" height="10" className="caret-icon" />
                </div>
              </a>
              <DropDown className="dropdown-menu ">
                <div className="arrow  hidden-sm hidden-xs"></div>
                {this.props.userInfo !== null && <li><a href="/member/druglookuponly" onClick={this.closeDropdowns} target="_parent" ><FormattedMessage {...messages.drugLookup} /></a></li>}
                {this.props.userInfo !== null && <li><a href="/member/find-a-pharmacy" onClick={this.closeDropdowns} target="_parent" ><FormattedMessage {...messages.pharmacyLocator} /></a></li>}
                {(this.props.userInfo === null && hasFeature('unsecure_find_a_pharmacy')) && <li><a href="/member/find-a-pharmacy" onClick={this.closeDropdowns} target="_parent" ><FormattedMessage {...messages.pharmacyLocator} /></a></li>}
                {this.props.userInfo !== null && <li><a href="/cvgdetermination/#!/member" target="_self"><FormattedMessage {...messages.covDetermination} /></a></li>}
                {this.props.userInfo !== null && <li><Link to="/member/mail-order" onClick={this.closeNav}><FormattedMessage {...messages.mailOrder} /></Link></li> }
                <li><Link to="/member/forms" onClick={this.closeNav} ><FormattedMessage {...messages.formsAndInformation} /></Link></li>
                <li><Link to="/member/documents" onClick={this.closeNav}><FormattedMessage {...messages.documents} /></Link></li>
                <li><Link to="/member/links" onClick={this.closeNav}><FormattedMessage {...messages.links} /></Link></li>
                <li><Link to="/member/helper-tools" onClick={this.closeNav}><FormattedMessage {...messages.helperTools} /></Link></li>
                {!this.props.userInfo &&
                  <li>
                    <a onClick={() => this.open('https://magellanrx.com/cares')} href="#link"><FormattedMessage {...messages.mrxCares} /></a>
                  </li>
                }
              </DropDown>
            </li>
            {this.props.userInfo !== null && <li>
              <a id="nav-price-drug-link-mobile" href="/member/druglookup" onClick={this.closeDropdowns} target="_self"><SearchIcon title="search-icon" titleText="Price a Drug" fill="#0077C8" stroke="transparent" width="16" height="16" /><FormattedMessage {...messages.priceDrug} /></a>
            </li>}
            <li role="separator" className="divider"></li>
            {this.props.userInfo === null &&
            <li>
              <a className="mag-slidebar-reg" id="nav-mobile-register-link" href="/member/registration" target="_self"><FormattedMessage {...messages.register} /></a>
            </li> }
            {!this.props.isUserLoggedIn ? <li><a className="mag-slidebar-reg" href="/login" target="_self" ><FormattedMessage {...messages.login} /></a></li> : ''}
            { !this.props.isUserLoggedIn ? <li role="separator" className="divider"></li> : ''}
            {this.props.userInfo === null && <li><Link to="/member/star-ratings" onClick={this.closeNav}><FormattedMessage {...messages.starRatings} /></Link></li> }
            <li className="font-size-changer-buttons" >
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
            <LocaleToggle id="mobile-lang-toggle" />
            <li>
              <Link id="nav-contact-link" to="/member/contact" onClick={this.closeNav}><FormattedMessage {...messages.contactUs} /></Link>
            </li>
            { this.props.isUserLoggedIn ? <li><a href="#logout" onClick={this.logout}><FormattedMessage {...messages.logout} /></a></li> : ''}
          </ul>
        </SideNav>
      </div>
    );
  }
}

Navbar.propTypes = {
  businessLine: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired,
  userInfo: PropTypes.object,
  logoutLoading: PropTypes.func.isRequired,
  language: PropTypes.object.isRequired,
};

Navbar.defaultProps = {
  businessLine: 'COMMERCIAL',
  client: 'common',
  userInfo: null,
};

export default Navbar;
