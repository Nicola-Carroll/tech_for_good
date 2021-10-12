import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import AvailableListingsMarkers from './AvailableListingsMarkers.component';

const { REACT_APP_MAP_API } = process.env;

class ListingMap extends Component {
  static defaultProps = {
    center: {
      lat: 51.50696956402362,
      lng: -0.12783497069894073,
    },
    zoom: 9,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '75%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: REACT_APP_MAP_API }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AvailableListingsMarkers />
        </GoogleMapReact>
      </div>
    );
  }
}

export default ListingMap;
