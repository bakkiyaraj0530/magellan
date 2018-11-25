/*
 *
 * PharmacyLocator
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectPharmacyLocator from './selectors';
import messages from './messages';
import Map from '../../components/Map';
import PharmacyForm from '../../components/PharmacyLocatorForm';
import * as ActionCreators from './actions';
import ModalAlert from '../../components/ModalAlert';
import PharmacyResultsTable from '../../components/PharmacyResultsTable';
import MapPinIcon from '../../assets/icons/map-bubble.png';
import LoadingDots from '../../components/LoadingDots';
export class PharmacyLocator extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      linkUrl: '',
      markers: [],
      zoom: 3,
      center: { lat: 39.8283, lng: -98.5795 },
      results: [],
      searchAddress: {},
      isLoading: false,
      ogResults: [],
    };
    this.submit = this.submit.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const markers = [];
    let center = {};
    let count = 0;
    if (nextProps.PharmacyLocatorStore.pharmacySearchResponse) {
      if (nextProps.PharmacyLocatorStore.pharmacySearchResponse.isError === 'FALSE' && nextProps.PharmacyLocatorStore.pharmacySearchResponse.pharmacyList) {
        const results = nextProps.PharmacyLocatorStore.pharmacySearchResponse.pharmacyList.pharmacy;

        const centerLat = Number(results[0].lat);
        const centerLng = Number(results[0].lng);
        center = { lat: centerLat, lng: centerLng };
        _.forEach(results, (value) => {
          count += 1;
          markers.push({ position: {
            lat: Number(value.lat),
            lng: Number(value.lng),
          },
            label: { text: count.toString(), color: '#FFF' },
            key: value.npi,
            defaultAnimation: 2,
            icon: MapPinIcon,
          });
        });
        this.setState({ markers, center, zoom: 11, results, isLoading: false });
      }
      if (nextProps.PharmacyLocatorStore.showErrorMessage) {
        window.scrollTo(0, 0);
        this.setState({ isLoading: false, error: true });
      }
    }

    if (nextProps.PharmacyLocatorStore.pharmacySearchResponseCopy) {
      const ogResults = nextProps.PharmacyLocatorStore.pharmacySearchResponseCopy.pharmacyList.pharmacy;
      this.setState({ ogResults });
    }
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

  handleMarkerClick(targetMarker) {
    console.log(targetMarker);
  }

  submit(values) {
    this.setState({ isLoading: true });
    const requestData = {
      zipCode: values.get('zipCode'),
      distance: values.get('distance'),
      state: values.get('state'),
      city: values.get('city'),
      street: values.get('street'),
      streetNumber: values.get('streetNumber'),
    };
    this.setState({ searchAddress: requestData });
    this.props.actions.getPharmacy(requestData);
  }

  render() {
    return (
      <div>
        {(this.state.isLoading && !this.state.error) &&
          <div>
            <div className="loading-backdrop fade in"></div>
            <div className="pageSpinner"><LoadingDots /></div>
          </div>
          }
        <ModalAlert showModal={this.state.showModal} onHide={this.onHide} linkUrl={this.state.linkUrl} showLink={this.showLink} />
        <div className="container">
          <Helmet
            title="PharmacyLocator"
            meta={[
              { name: 'description', content: 'Description of PharmacyLocator' },
            ]}
          />
          <div className="text-center">
            <h1>
              <FormattedMessage {...messages.header} />
            </h1>
          </div>
          <div className="row">
            <div className="col-sm-10 col-sm-offset-2">
              <PharmacyForm onSubmit={this.submit} />
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-sm-6">
              <PharmacyResultsTable pharmacies={this.state.results} searchAddress={this.state.searchAddress} pharmacyResultsOG={this.state.ogResults} />
            </div>
            <div className="col-sm-6">
              <Map onMarkerClick={this.handleMarkerClick} markers={this.state.markers} zoom={this.state.zoom} center={this.state.center} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PharmacyLocator.propTypes = {
  actions: PropTypes.object.isRequired,
  PharmacyLocatorStore: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  PharmacyLocatorStore: makeSelectPharmacyLocator(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PharmacyLocator);
