/*
 *
 * LandingPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import { Link, browserHistory } from 'react-router';
import { injectIntl, intlShape } from 'react-intl';
import _ from 'lodash';
import { geocodeByAddress } from 'react-places-autocomplete';
import makeSelectLandingPage from './selectors';
import * as ActionCreators from './actions';
import messages from './messages';
import HeroImg from './MedD_Member_Portal_Hero.png';
import LandingPageContainer from './landing-page-styles';
import PharmacyCarousel from '../../components/LandingCarousel';
import PharmacySearchInput from '../../components/PharmacySearchInput';
import DrugSearchInput from '../../components/DrugSearchInput';
import CheckIcon from './check-icon';
import DollarIcon from './dollar-icon';
import PlanIcon from './plan-icon';
import FormIcon from './forms-icon';
import DrugIcon from './drug-icon';
import PharmacyIcon from './pharmacy-icon';
import LocationIcon from './location-icon';
import PenIcon from './pen-icon';
import LockIcon from './lock-icon';
import ModalAlert from '../../components/ModalAlert';
import { hasFeature } from '../../assets/js/feature_toggle';
import PlanSelectionContainer from './plan-selection-style';
import LoadingDots from '../../components/LoadingDots';
export class LandingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
      linkUrlVal: '',
      formattedAddress: '',
      drugListItem: [],
    };
  }
  componentDidMount() {
    this.props.actions.getDrugPricingList();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.drugList.drugListResponse) {
      this.setState({ drugListItem: nextProps.drugList.drugListResponse });
    }
  }
  onPositionUpdate = (position) => {
    const coords = position.coords;
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        latlng: `${coords.latitude},${coords.longitude}`,
        sensor: true,
      },
    })
      .then((response) => {
        this.handleSelect(response.data.results[0].formatted_address);
      })
      .catch((error) => error);
  }
  onHide = () => {
    this.setState({ isShowModal: false });
  }
  getLocation = () => {
    this.state.isLoading = true;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.onPositionUpdate);
    }
  }
  open = (url) => {
    this.setState({ isShowModal: true, linkUrlVal: url });
  }
  isShowLink = (url) => {
    this.onHide();
    window.open(url, '_blank');
  }

  findPharmacy = (e) => {
    e.preventDefault();
    const zipCode = document.getElementById('inputFindPharmByZip').value;
    window.localStorage.setItem('landingPharmacyZip', zipCode);
    window.open('/member/publicPharmacylocator', '_parent');
  }

  handleSelect = (address) => {
    this.props.actions.setSelectedPharmacyData(address);
    const searchAddress = {
      streetNumber: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    };
    this.setState({
      formattedAddress: address,
      isLoading: false,
    });
    geocodeByAddress(address)
    .then((results) => {
      _.forEach(results[0].address_components, (value) => {
        if (value.types[0] === 'postal_code') {
          searchAddress.zip = value.long_name;
        } else if (value.types[0] === 'locality') {
          searchAddress.city = value.long_name;
        } else if (value.types[0] === 'administrative_area_level_1') {
          searchAddress.state = value.short_name;
        } else if (value.types[0] === 'route') {
          searchAddress.street = value.long_name;
        } else if (value.types[0] === 'street_number') {
          searchAddress.streetNumber = value.long_name;
        }
      });
      browserHistory.push('/member/find-a-pharmacy');
    });
  }
  pharmacySubmit = () => {
    this.handleSelect(this.state.formattedAddress);
  }
  handleChange = (address) => {
    this.setState({
      formattedAddress: address,
    });
  }

  drugSubmit = () => {
    browserHistory.push('/member/drug-pricing');
  }

  render() {
    const isDrugInfo = false;
    return (
      <div>
        {(this.state.isLoading &&
        <div>
          <div className="loading-backdrop fade in"></div>
          <div className="pageSpinner"><LoadingDots /></div>
        </div>)
        }
        {!hasFeature('member_plan_selection') &&
        <LandingPageContainer>
          <ModalAlert showModal={this.state.isShowModal} onHide={this.onHide} linkUrl={this.state.linkUrlVal} showLink={this.isShowLink} />
          <Helmet
            title="Home | Magellan Rx Management"
            meta={[
              { name: 'description', content: 'Know Your Options. Calculate Drug Costs. Find A Pharmacy And Enroll In Our Medicare Prescription Drug Plan Online Today. Hassel Free Enrollment' },
            ]}
          />
          <div className="container">
            <div className="col-md-7 col-lg-6 hidden-sm hidden-xs">
              <img src={HeroImg} className="img-responsive" alt="Grandparents and grandchild" />
            </div>
            <div className="col-md-5 col-lg-6">
              <h1 className="hero-title">{this.props.intl.formatMessage(messages.lookingForPlan)}</h1>
              <div className="font-md">
                <p><strong>{this.props.intl.formatMessage(messages.lookingForPlan1)}</strong> {this.props.intl.formatMessage(messages.lookingForPlan2)}</p>
                <ul className="list-unstyled hero-actions">
                  <li >
                    <CheckIcon title="estimated-drug-cost-checkmark" titleText="Check Mark Icon for Estimated Drug Costs" fill="#FFF" stroke="#D04927" width="14" height="14" />&nbsp; <strong>{this.props.intl.formatMessage(messages.lookingForPlan3)}</strong> {this.props.intl.formatMessage(messages.lookingForPlan4)}
                  </li>
                  <li >
                    <CheckIcon title="view-covered-drugs-checkmark" titleText="Check Mark Icon for View Covered Drugs" fill="#FFF" stroke="#D04927" width="14" height="14" />&nbsp; <strong>{this.props.intl.formatMessage(messages.lookingForPlan5)}</strong> {this.props.intl.formatMessage(messages.lookingForPlan6)}
                  </li>
                  <li >
                    <CheckIcon title="enroll-in-pdp-checkmark" titleText="Check Mark Icon for Enroll in Magellan Rx Medicare Basic (PDP) Plan" fill="#FFF" stroke="#D04927" width="14" height="14" />&nbsp; <strong>{this.props.intl.formatMessage(messages.lookingForPlan7)}</strong> {this.props.intl.formatMessage(messages.lookingForPlan8)}
                  </li>
                </ul>
                <p className="font-md">
                  <a href="https://magellanrx.destinationrx.com/PlanCompare/Consumer/Type3/2017/Compare/Home" target="_blank" className="btn btn-xl shop-enroll-btn" role="button">
                    <strong >{this.props.intl.formatMessage(messages.shopEnroll)}</strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <br className="visible-sm-block" />
          <br className="visible-xs-block" />
          <div className="feature-bar">
            <div className="feature-bar-primary">
              <div className="container">
                <div className="col-sm-3">
                  <h2 className="feature-bar-title text-white">{this.props.intl.formatMessage(messages.alreadyEnrolled)}</h2>
                </div>
                <div className="col-sm-4 col-md-5 col-lg-5 right-border border-dark feature-bar-benefits">
                  <h4 className="text-white"><strong>{this.props.intl.formatMessage(messages.registeredMembers)}</strong></h4>
                  <div className="row font-md">
                    <div className="col-md-6 col-lg-5">
                      <ul className="no-margin-bottom">
                        <li>{this.props.intl.formatMessage(messages.registeredMembersPriceDrug)}</li>
                        <li>{this.props.intl.formatMessage(messages.registeredMembersCoveredDrugs)}</li>
                        <li>{this.props.intl.formatMessage(messages.registeredMembersClaims)}</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="no-margin-bottom">
                        <li>{this.props.intl.formatMessage(messages.registeredMembersBalances)}</li>
                        <li>{this.props.intl.formatMessage(messages.registeredMembersCard)}</li>
                        <li>{this.props.intl.formatMessage(messages.registeredMembersAddress)}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <br className="visible-xs-block" />
                <div className="col-sm-5 col-md-4 font-md feature-bar-buttons">
                  <p>
                    <a href="/login" className="text-white" target="_self" role="button" >
                      <LockIcon title="register-icon" titleText="Icon for the Register Link" fill="transparent" stroke="#FFF" className="landing-icon-small" />
                      &nbsp;<strong>{this.props.intl.formatMessage(messages.loginMsg1)}</strong> {this.props.intl.formatMessage(messages.loginMsg2)}
                    </a>
                  </p>
                  <p>
                    <a href="/member/registration" className="text-white" role="button" target="_self" >
                      <PenIcon title="login-icon" titleText="Icon for the Login Link" fill="transparent" stroke="#FFF" className="landing-icon-small" />
                      &nbsp;<strong>{this.props.intl.formatMessage(messages.registerMsg1)}</strong> {this.props.intl.formatMessage(messages.registerMsg2)}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="feature-bar-secondary">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-offset-1 col-sm-2 right-border border-dark">
                    <div className="text-center  ">
                      <a href="/login" className="text-white" role="button" aria-label="" target="_self" >
                        <DollarIcon title="price-drug-icon" titleText="Dollar Icon for Price a Drug" fill="transparent" stroke="#FFF" width="40" height="40" className="landing-icon" />
                        <h4 className="sl-white">{this.props.intl.formatMessage(messages.priceDrug)}</h4>
                      </a>

                    </div>
                  </div>
                  <div className="col-sm-2 right-border border-dark">
                    <div className="text-center  ">
                      <a href="/login" className="text-white" role="button" aria-label="Covered Drugs Search" target="_self">

                        <DrugIcon title="covered-drug-icon" titleText="Drug Icon for covered drugs" fill="transparent" stroke="#FFF" width="40" height="40" className="landing-icon" />

                        <h4 className="sl-white">{this.props.intl.formatMessage(messages.coveredDrugs)}</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-2 right-border border-dark">
                    <div className="text-center  ">
                      <a href="/member/publicPharmacylocator" className="text-white" role="button" aria-label="" target="_parent" >
                        <PharmacyIcon title="pharmacy-icon" titleText="Icon for Pharmacy Link" fill="transparent" stroke="#FFF" width="40" height="40" className="landing-icon" />
                        <h4 className="sl-white">{this.props.intl.formatMessage(messages.findPharmacy)}</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-2 right-border border-dark">
                    <div className="text-center  ">
                      <Link to="/member/documents" className="text-white" role="button" aria-label="Plan Documents" >
                        <PlanIcon title="plan-icon" titleText="Icon for Learn about Plan" fill="transparent" stroke="#FFF" width="40" height="40" className="landing-icon" />
                        <h4 className="sl-white">{this.props.intl.formatMessage(messages.learnPlan)}</h4>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="text-center  ">
                      <Link to="/member/forms" className="text-white" role="button" aria-label="Forms and Information" >
                        <FormIcon title="forms-icon" titleText="Icon for Forms and Information" fill="transparent" stroke="#FFF" width="40" height="40" className="landing-icon" />
                        <h4 className="sl-white">{this.props.intl.formatMessage(messages.forms)}</h4>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="featured-wrapper clearfix">
            <div className="container">
              <div className="col-sm-8 featured-wrapper__col-left">
                <h2>{this.props.intl.formatMessage(messages.preferredPharmacies)}</h2><br />
                <PharmacyCarousel />
              </div>
              <div className="col-sm-3 featured-wrapper__col-right">
                <form className="form-horizontal" name="frmFindPharmByZipForm" id="frmFindPharmByZipForm" onSubmit={this.findPharmacy}>
                  <h2>{this.props.intl.formatMessage(messages.lookingForPlan3)}</h2>
                  <p>
                    <label htmlFor="inputFindPharmByZip">{this.props.intl.formatMessage(messages.zipCodePlaceholder)}</label><br />
                    <input type="text" className="form-control" id="inputFindPharmByZip" name="inputFindPharmByZip" maxLength="5" placeholder={this.props.intl.formatMessage(messages.zipCodePlaceholder)} />
                  </p>
                  <p><input className="btn btn-primary" type="submit" value={this.props.intl.formatMessage(messages.search)} id="btnSearch" /></p>
                </form>
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="text-center">
              <p className="text-info">* {this.props.intl.formatMessage(messages.browserSupport1)}&nbsp;
                <a href="#link" onClick={() => this.open('https://magellanrx.destinationrx.com/PlanCompare/Consumer/Type3/2017/Compare/Home')} title="Opens External Window"><u>{this.props.intl.formatMessage(messages.browserSupport2)}</u></a> {this.props.intl.formatMessage(messages.browserSupport3)}&nbsp;
                <Link href="/member/helper-tools"><u>{this.props.intl.formatMessage(messages.browserSupport4)}</u></Link> {this.props.intl.formatMessage(messages.browserSupport5)}</p>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="text-center">
              <p className="text-warning">{this.props.intl.formatMessage(messages.medicareNote)}</p>
            </div>
          </div>
        </LandingPageContainer>}
        {(this.props.drugList.isLoading &&
        <div>
          <div className="loading-backdrop fade in"></div>
          <div className="pageSpinner"><LoadingDots /></div>
        </div>)
        }
        {hasFeature('member_plan_selection') &&
        <PlanSelectionContainer>
          <div className="container">
            <div className="price-drug-con">
              <h1>{this.props.intl.formatMessage(messages.priceADrug)}</h1>
              <div className="price-search-con">
                <DrugSearchInput drugList={this.state.drugListItem} isDrugInfo={isDrugInfo} actions={this.props.actions} />
                <p className="price-drug-fingtxt">{this.props.intl.formatMessage(messages.priceFind)}</p>
                <p className="price-drug-fingdis">{this.props.intl.formatMessage(messages.priceDrugDesc)}</p>
              </div>
              <hr />
            </div>
            <div className="price-drug-con find-pharmacy-con">
              <h1>{this.props.intl.formatMessage(messages.findPharmacy)}</h1>
              <div className="price-search-con">
                <div className="price-dashbtn-con">
                  <button type="button" className="btn btn-primary" onClick={this.getLocation}><LocationIcon title="location-icon" titleText="location icon" fill="#fff" stroke="#FFF" width="40" height="40" className="location-icon" />{this.props.intl.formatMessage(messages.mylocation)}</button>
                  <span className="pharmacy-search-form-text">{this.props.intl.formatMessage(messages.findPharmacyOR)}</span>
                  <div className="Pharmacy-input-con"><PharmacySearchInput handleChange={this.handleChange} handleSelect={this.handleSelect} address={this.state.formattedAddress} /></div>
                </div>
                <p className="price-drug-fingtxt">{this.props.intl.formatMessage(messages.priceFind)}</p>
                <p className="price-drug-fingdis">{this.props.intl.formatMessage(messages.findPharmacyDesc)}</p>
              </div>
            </div>
          </div>
        </PlanSelectionContainer>
        }
      </div>
    );
  }
}
LandingPage.defaultProps = {
  drugList: React.PropTypes.object,
  isLoading: false,
};
LandingPage.propTypes = {
  intl: intlShape.isRequired,
  actions: React.PropTypes.object.isRequired,
  drugList: React.PropTypes.object,
  isLoading: React.PropTypes.bool,
};
LandingPage.contextTypes = {
  intl: PropTypes.object.isRequired,
};
const mapStateToProps = createStructuredSelector({
  drugList: makeSelectLandingPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
  };
}
export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(LandingPage));
