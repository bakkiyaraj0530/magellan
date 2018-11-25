/**
*
* Map
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import styled from 'styled-components';

class Map extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render() {
    const MapStyles = styled.div`
      margin-top:60px;
    `;
    const GettingStartedGoogleMap = withGoogleMap((props) => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center}
        onClick={props.onMapClick}
      >
        {props.markers.map((marker, index) => (
          <Marker
            {...marker}
            onClick={() => props.onMarkerClick(index)}
          />
        ))}
      </GoogleMap>
    ));
    return (
      <MapStyles>
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: '400px' }} />
          }
          mapElement={
            <div style={{ height: '400px' }} />
          }
          markers={this.props.markers}
          onMarkerClick={this.props.onMarkerClick}
        />
      </MapStyles>
    );
  }
}

Map.propTypes = {
  markers: PropTypes.array.isRequired,
  onMarkerClick: PropTypes.func.isRequired,
  zoom: PropTypes.number.isRequired,
  center: PropTypes.object.isRequired,
};

Map.defaultProps = {
  markers: [],
};

export default Map;
