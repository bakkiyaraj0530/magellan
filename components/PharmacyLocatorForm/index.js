import React from 'react';
import _ from 'lodash';
import axios from 'axios';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import { reduxForm, Field, formValueSelector } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { geocodeByAddress } from 'react-places-autocomplete';
import PharmacySearchInput from '../PharmacySearchInput';
import FormStyles from './form-styles';
import TextFieldGroup from '../../components/TextFieldGroup';
import DistanceDropdown from './distance-dropdown';
import SearchIcon from './search-icon';
class PharmacyLocatorForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      formattedAddress: '',
      searchAddress: {},
      geocodeResults: null,
      loading: false,
      distance: '5',
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.onPositionUpdate = this.onPositionUpdate.bind(this);
    this.handleDistanceChange = this.handleDistanceChange.bind(this);
  }
  onPositionUpdate(position) {
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

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.onPositionUpdate);
    }
  }

  handleSelect(address) {
    const searchAddress = {
      streetNumber: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    };
    this.setState({
      formattedAddress: address,
      loading: true,
    });
    geocodeByAddress(address)
    .then((results) => {
      _.forEach(results[0].address_components, (value) => {
        if (value.types[0] === 'postal_code') {
          searchAddress.zip = value.long_name;
          this.props.change('zipCode', searchAddress.zip);
        } else if (value.types[0] === 'locality') {
          searchAddress.city = value.long_name;
          this.props.change('city', searchAddress.city);
        } else if (value.types[0] === 'administrative_area_level_1') {
          searchAddress.state = value.short_name;
          this.props.change('state', searchAddress.state);
        } else if (value.types[0] === 'route') {
          searchAddress.street = value.long_name;
          this.props.change('street', searchAddress.street);
        } else if (value.types[0] === 'street_number') {
          searchAddress.streetNumber = value.long_name;
          this.props.change('streetNumber', searchAddress.streetNumber);
        }
      });
    });
  }

  handleChange(address) {
    this.setState({
      formattedAddress: address,
    });
  }

  handleDistanceChange(val) {
    this.setState({ distance: val.value });
    this.props.change('distance', val.value);
  }

  render() {
    const { handleSubmit } = this.props;
    const options = [
      { value: '5', label: '5 miles' },
      { value: '10', label: '10 miles' },
      { value: '25', label: '25 miles' },
      { value: '50', label: '50 miles' },
    ];

    return (
      <FormStyles className="form-inline" onSubmit={handleSubmit} >
        <Field name="zipCode" type="hidden" label="" component={TextFieldGroup} id="zipCode" classname="form-control" placeholder="hidden field" />
        <Field name="city" type="hidden" label="" component={TextFieldGroup} id="city" classname="form-control" placeholder="hidden field" />
        <Field name="state" type="hidden" label="" component={TextFieldGroup} id="state" classname="form-control" placeholder="hidden field" />
        <Field name="street" type="hidden" label="" component={TextFieldGroup} id="street" classname="form-control" placeholder="hidden field" />
        <Field name="streetNumber" type="hidden" label="" component={TextFieldGroup} id="streetNumber" classname="form-control" placeholder="hidden field" />
        <Field name="distance" type="hidden" label="" component={TextFieldGroup} id="distance" classname="form-control" placeholder="hidden field" />

        <div className="form-group">
          <button type="button" className="btn btn-primary" onClick={this.getLocation}>Use My Location</button>
        </div>
        <div className="form-group">
          <span className="pharmacy-search-form-text">Or</span>
          <PharmacySearchInput handleChange={this.handleChange} handleSelect={this.handleSelect} address={this.state.formattedAddress} />
        </div>
        <div className="form-group">
          <span className="pharmacy-search-form-text">for</span>
        </div>
        <div className="form-group">
          <DistanceDropdown
            name="distanceOptions"
            id="distanceOptions"
            value={this.state.distance}
            options={options}
            handleChange={this.handleDistanceChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" id="submitSearchBtn" name="submitSearchBtn" className="btn btn-primary">
            <SearchIcon title="search-icon" titleText="Pharmacy Search" fill="#FFF" stroke="transparent" width="19" height="19" className="pharmacy-search-icon" />
            Search
          </button>
        </div>
      </FormStyles>
    );
  }
}
PharmacyLocatorForm.propTypes = {
  // intl: intlShape.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,

};
PharmacyLocatorForm.defaultProps = {

};
PharmacyLocatorForm.contextTypes = {
  intl: React.PropTypes.object.isRequired,
};

const selector = formValueSelector('pharmacyLocatorForm'); // <-- same as form name
const reduxformWrapper = reduxForm({ form: 'pharmacyLocatorForm' });
const connectWrapper = connect((state) => ({ zipCode: selector(state, 'zipCode') }));
export default injectIntl(compose(reduxformWrapper, connectWrapper)(PharmacyLocatorForm));
