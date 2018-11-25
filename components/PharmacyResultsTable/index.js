/**
*
* PharmacyResultsTable
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { forEach, sortBy, filter, reject } from 'lodash';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import makeSelectPharmacyLocator from '../../containers/PharmacyLocator/selectors';
import * as ActionCreators from '../../containers/PharmacyLocator/actions';
import PharmacyStyles from './tableStyles';
import DropDown from '../DropDown';
import CheckIcon from './check-icon';
class PharmacyResultsTable extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      pharmacies: [],
      pharmacySort: 'distance',
      filterOpts: [],
      noResults: false,
      ogPharmacies: [],
      showActiveFilters: false,
      pharmacyNameFilter: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      if (nextProps.pharmacies.length > 0) {
        this.setState({ pharmacies: nextProps.pharmacies, noResults: false, ogPharmacies: nextProps.pharmacyResultsOG });
      } else {
        this.setState({ noResults: true });
      }
    }
  }

  toggleFilter(val) {
    if (val) {
      document.getElementById('filterblock').style.display = 'block';
    } else {
      document.getElementById('filterblock').style.display = 'none';
    }
  }

  toggleOtherInfo(val) {
    const panel = document.getElementById(`otherInfoPanel${val}`);
    if (panel.style.display === 'none' || panel.style.display === '') {
      panel.style.display = 'block';
    } else {
      panel.style.display = 'none';
    }
  }

  openDropdown(e) {
    e.preventDefault();
    const dropdownClass = `${e.target.id}-dropdown`;
    const dropdown = document.getElementById(dropdownClass);
    if (dropdown !== null) {
      if (dropdown.className.includes('isOpen')) {
        dropdown.className = 'pharmacy-distance-nearest dropdown';
      } else {
        dropdown.className = 'pharmacy-distance-nearest dropdown open isOpen';
      }
    }
  }


  sortResults(sortOpt) {
    let sortedPharmacies = [];
    document.getElementById('sort-link').click();
    if (sortOpt === 'distance') {
      sortedPharmacies = sortBy(this.state.pharmacies, ['distance']);
    } else {
      sortedPharmacies = sortBy(this.state.pharmacies, ['name']);
    }
    const pharmacies = { isError: 'FALSE', pharmacyList: { pharmacy: sortedPharmacies } };
    this.props.actions.getPharmacySuccess(pharmacies);
    this.setState({ pharmacySort: sortOpt });
  }

  createFilter(e) {
    let filterOpts = this.state.filterOpts;
    const id = e.target.id;
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      filterOpts.push({ id, value });
    } else {
      filterOpts = reject(this.state.filterOpts, (el) => el.id === id);
    }
    this.setState({ filterOpts });
  }

  applyFilter(filterOpts) {
    const filterOptions = filterOpts === undefined ? this.state.filterOpts : filterOpts;
    const filters = {};
    let filteredPharmacies = [];
    const pharmacyName = document.getElementById('pname').value;
    const pharmacies = { isError: 'FALSE', pharmacyList: { pharmacy: filteredPharmacies } };
    if (filterOptions.length > 0 || pharmacyName.length > 0) {
      this.setState({ showActiveFilters: true });
      forEach(filterOptions, (item) => {
        filters[item.id] = 'Y';
      });
      if (pharmacyName.length > 0) {
        filterOptions.push({ id: 'pname', value: pharmacyName });
        filters.name = pharmacyName;
      }
      filteredPharmacies = filter(this.state.pharmacies, filters);
      if (filteredPharmacies.length > 0) {
        pharmacies.pharmacyList = { pharmacy: filteredPharmacies };
        this.props.actions.getPharmacySuccess(pharmacies);
      } else {
        this.setState({ noResults: true });
      }
    } else {
      pharmacies.pharmacyList = { pharmacy: this.state.ogPharmacies };
      this.props.actions.getPharmacySuccess(pharmacies);
    }
    this.toggleFilter(false);
  }

  clearFilter(id) {
    let filterOpts = this.state.filterOpts;
    filterOpts = reject(this.state.filterOpts, (el) => el.id === id);
    this.setState({ filterOpts });
    if (document.getElementById(id).type !== 'checkbox') {
      document.getElementById(id).checked = false;
    }

    if (document.getElementById(id).type !== 'text') {
      document.getElementById(id).value = '';
    }
    this.applyFilter(filterOpts);
    this.setState({ showActiveFilters: false });
  }

  render() {
    /* eslint-disable no-return-assign */
    let count = 0;
    const streetNumber = streetNumber !== undefined ? this.props.searchAddress.streetNumber : '';
    const street = this.props.searchAddress.street !== undefined ? this.props.searchAddress.street : '';
    const city = this.props.searchAddress.city !== undefined ? this.props.searchAddress.city : '';
    const state = this.props.searchAddress.state !== undefined ? this.props.searchAddress.state : '';
    const zip = this.props.searchAddress.zipCode !== undefined ? this.props.searchAddress.zipCode : '';
    const listItems = this.state.pharmacies.map((item) => (
      <li key={item.npi}>
        <div className="row">
          <div className="col-sm-12 list-col">
            <div className="pin">{count += 1}</div>
            <h5>{item.name}</h5>
          </div>
          <div className="col-sm-12 list-col">
            <p className="pharmacy-address">{item.line1}&nbsp;{item.line2 !== '' ? item.line2 : ''}<br />{item.city},{item.state}&nbsp;{item.zip}<br />{item.phone}</p>
            <p className="pharmacy-address">{item.distance} miles away <a href={`https://www.google.com/maps?saddr=${streetNumber} ${street} ${city} ${state} ${zip}&daddr=${item.line1} ${item.line2} ${item.city} ${item.state} ${item.zip}`} target="_blank">Directions</a>
              {(item.driveThru === 'Y' || item.delivery === 'Y' || item.open24hrs === 'Y' ||
            item.acceptsEprescriptionsInd === 'Y' || item.extendedDaySupplyInd === 'Y' || item.indianHealthServicesInd === 'Y' ||
            item.homeInfusionInd === 'Y' || item.longTermCareInd === 'Y' || item.mailOrderInd === 'Y' || item.retailInd === 'Y') &&
              <button className="pull-right btn other-info-btn" onClick={() => this.toggleOtherInfo(item.npi)}>
                <span className="pharmacy-other-info">Other Info</span><span className="accarrow down-arrow" aria-hidden="false"></span></button>}</p>
          </div>
          <div className="col-sm-12 other-info-panel" id={`otherInfoPanel${item.npi}`}>
            {(item.driveThru === 'Y' || item.delivery === 'Y' || item.open24hrs === 'Y') &&
            <div className="col-sm-4">
              {item.driveThru === 'Y' && <p><FormattedMessage {...messages.driveThru} /></p>}
              {item.delivery === 'Y' && <p><FormattedMessage {...messages.delivery} /></p>}
              {item.open24hrs === 'Y' && <p><FormattedMessage {...messages.hours24} /></p>}
            </div> }
            {(item.acceptsEprescriptionsInd === 'Y' || item.extendedDaySupplyInd === 'Y' || item.indianHealthServicesInd === 'Y') &&
            <div className="col-sm-4">
              {item.acceptsEprescriptionsInd === 'Y' && <p><FormattedMessage {...messages.eScript} /></p>}
              {item.extendedDaySupplyInd === 'Y' && <p><FormattedMessage {...messages.extendedDay} /></p>}
              {item.indianHealthServicesInd === 'Y' && <p><FormattedMessage {...messages.ihs} /></p>}
            </div>}
            {(item.homeInfusionInd === 'Y' || item.longTermCareInd === 'Y' || item.mailOrderInd === 'Y' || item.retailInd === 'Y') &&
            <div className="col-sm-4">
              {item.homeInfusionInd === 'Y' && <p><FormattedMessage {...messages.iv} /></p>}
              {item.longTermCareInd === 'Y' && <p><FormattedMessage {...messages.ltc} /></p>}
              {item.mailOrderInd === 'Y' && <p><FormattedMessage {...messages.mailOrder} /></p>}
              {item.retailInd === 'Y' && <p><FormattedMessage {...messages.retail} /></p>}
            </div>}
          </div>
        </div>
      </li>
      ));

    const filterItems = this.state.filterOpts.map((item) => (
      <li className="filter-items" key={item.id}><button className="btn clear-filter-item" onClick={() => this.clearFilter(item.id)}>&times;</button>{item.value}</li>
      ));
    return (
      <PharmacyStyles>
        {this.state.showActiveFilters &&
        <div className="active-filters row">
          <div className="col-sm-12 active-filters-col">
            <h5>Active Filters:</h5>
            <ul className="list-inline">
              {filterItems}
            </ul>
          </div>
        </div>}
        <div className="filter">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 bottom-line">
              <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                <span className="pharmacy-sort-txt">Sort by:</span>
                <span className="pharmacy-distance-nearest dropdown" id="sort-link-dropdown">
                  <button data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn btn-link btn-sort" onClick={this.openDropdown} disabled={this.state.pharmacies.length === 0}>
                    {this.state.pharmacySort === 'distance' ? <span id="sort-link">Distance: nearest</span> : <span id="sort-link">Alphabetical: A to Z</span>}
                  </button>
                  <span className="accarrow down-arrow" aria-hidden="false"></span>
                  <DropDown className="dropdown-menu" >
                    <div className="arrow  hidden-sm hidden-xs"></div>
                    <li>
                      <button className="btn-link" onClick={() => this.sortResults('distance')} >
                        {this.state.pharmacySort === 'distance' ? <CheckIcon title="distance-sort-checked" titleText="Check Mark Icon for Selected Sort" fill="#509E2F" stroke="#509E2F" width="7" height="7" className="check-icon" /> :
                        <CheckIcon title="distance-sort-unchecked" titleText="Check Mark Icon for Un-Selected Sort" fill="#D5D8DA" stroke="#D5D8DA" width="7" height="7" className="check-icon" />}
                        Distance: nearest
                      </button>
                    </li>
                    <li>
                      <button className="btn-link" onClick={() => this.sortResults('alpha')}>
                        {this.state.pharmacySort === 'alpha' ? <CheckIcon title="alpha-sort-checked" titleText="Check Mark Icon for Selected Sort" fill="#509E2F" stroke="#509E2F" width="7" height="7" className="check-icon" /> :
                        <CheckIcon title="alpha-sort-unchecked" titleText="Check Mark Icon for Un-Selected Sort" fill="#D5D8DA" stroke="#D5D8DA" width="7" height="7" className="check-icon" />}
                        Alphabetical: A to Z
                      </button></li>
                  </DropDown>
                </span>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <button id="filterBtn" className="btn pharmacy-btn-filter" onClick={() => this.toggleFilter(true)} disabled={this.state.pharmacies.length === 0}>Filter</button>
              </div>
            </div>
            <div id="filterblock" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pharmacy-filter">
              <div className="col-xs-7 col-sm-12 col-md-7 col-lg-7">
                <label htmlFor="pname">Pharmacy Name:</label>
                <input className="pharmacy-name" type="text" id="pname" placeholder="Enter pharmacy name" />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 other-info">
                <p>Other Info: <span className="pharmacy-question-img"></span></p>
                <div className="filter-checkbox-con">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="checkbox checkbox-primary">
                      <input id="open24hrs" type="checkbox" value="24 Hours" onClick={(e) => this.createFilter(e)} />
                      <label htmlFor="open24hrs">24 Hours</label>
                    </div>
                    <div className="checkbox checkbox-primary">
                      <input id="indianHealthServicesInd" type="checkbox" value="Indian Health Services" onClick={(e) => this.createFilter(e)} />
                      <label htmlFor="indianHealthServicesInd">Indian Health Services</label>
                    </div>
                    <div className="checkbox checkbox-primary">
                      <input id="delivery" type="checkbox" value="Delivery" onClick={(e) => this.createFilter(e)} />
                      <label htmlFor="delivery">Delivery</label>
                    </div>
                    <div className="checkbox checkbox-primary">
                      <input id="homeInfusionInd" type="checkbox" value="IV Infusion" onClick={(e) => this.createFilter(e)} />
                      <label htmlFor="homeInfusionInd">IV Infusion</label>
                    </div>
                    <div className="checkbox checkbox-primary">
                      <input id="driveThru" type="checkbox" value="Drive Thru" onClick={(e) => this.createFilter(e)} />
                      <label htmlFor="driveThru">Drive Thru</label>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="checkbox checkbox-primary">
                      <input id="longTermCareInd" type="checkbox" value="Long Term Care" onClick={(e) => this.createFilter(e)} />
                      <label htmlFor="longTermCareInd">Long Term Care</label>
                    </div>
                    <div className="checkbox checkbox-primary">
                      <input id="acceptsEprescriptionsInd" type="checkbox" value="Electronic Prescribing Enabled" onClick={(e) => this.createFilter(e)} />
                      <label htmlFor="acceptsEprescriptionsInd">Electronic Prescribing Enabled</label>
                    </div>
                    <div className="checkbox checkbox-primary">
                      <input id="mailOrderInd" type="checkbox" value="Mail Order" onClick={(e) => this.createFilter(e)} />
                      <label htmlFor="mailOrderInd">Mail Order</label>
                    </div>
                    <div className="checkbox checkbox-primary">
                      <input id="extendedDaySupplyInd" type="checkbox" value="Extended Day Supply" onClick={(e) => this.createFilter(e)} />
                      <label htmlFor="extendedDaySupplyInd">Extended Day Supply</label>
                    </div>
                    <div className="checkbox checkbox-primary">
                      <input id="retailInd" type="checkbox" value="Retail" onClick={(e) => this.createFilter(e)} />
                      <label htmlFor="retailInd">Retail</label>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-11">
                  <div className="filter-btns">
                    <button id="filterCancel" className="btn" onClick={() => this.toggleFilter(false)}>Cancel</button>
                    <button className="btn" onClick={() => this.applyFilter()}>Apply Filter</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.pharmacies.length > 0 && !this.state.noResults ? listItems : <h3>Please enter a city, state, zip or use your location</h3>}
        {this.state.noResults && <h4>No Results</h4>}

      </PharmacyStyles>
    );
  }
}

PharmacyResultsTable.propTypes = {
  pharmacies: PropTypes.array.isRequired,
  searchAddress: PropTypes.object.isRequired,
  // PharmacyLocatorStore: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  pharmacyResultsOG: PropTypes.array.isRequired,

};
const mapStateToProps = createStructuredSelector({
  PharmacyLocatorStore: makeSelectPharmacyLocator(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PharmacyResultsTable);
