import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import ListingMarker from './ListingMarker.component';

const { REACT_APP_MAP_API } = process.env;

class ListingMap extends Component {
  static defaultProps = {
    center: {
      lat: 51.50696956402362,
      lng: -0.12783497069894073,
    },
  };

  renderListingMarker(lat, long, listing) {
    return (
      <ListingMarker
        lat={lat}
        lng={long}
        key={listing._id}
        handleClick={() => this.props.handleOpenModal(listing)}
        className="listing-marker"
      ></ListingMarker>
    );
  }

  renderAllListingMarkers() {
    if (this.props.listings.length > 0) {
      return this.props.listings.map((currentListing, index) => {
        const lat = this.props.accountCoords[index].lat;
        const long = this.props.accountCoords[index].long;
        return this.renderListingMarker(lat, long, currentListing);
      });
    }
  }

  youAreHereMarker() {
    if (this.props.userCoords)
      return (
        <ListingMarker
          lat={this.props.userCoords.lat}
          lng={this.props.userCoords.long}
          className="user-marker"
          type={'user'}
          text={'You are here'}
        ></ListingMarker>
      );
  }

  // Important! Always set the container height explicitly
  render() {
    return (
      <>
        <div
          className="map-container"
          style={{ height: '100vh', width: '75%' }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: REACT_APP_MAP_API }}
            defaultCenter={this.props.center}
            defaultZoom={11.25}
          >
            {this.renderAllListingMarkers()}
            {this.youAreHereMarker()}
          </GoogleMapReact>
        </div>
      </>
    );
  }
}

export default ListingMap;
