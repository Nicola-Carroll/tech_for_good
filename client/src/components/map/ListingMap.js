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

  renderListingMarker(lat, long, id) {
    return (
      <ListingMarker
        lat={lat}
        lng={long}
        key={id}
        handleClick={() => this.props.handleOpenModal(id)}
        className="listing-marker"
      ></ListingMarker>
    );
  }

  renderAllListingMarkers() {
    if (this.props.listings.length > 0) {
      return this.props.listings.map((currentListing, index) => {
        const lat = this.props.accountCoords[index].lat;
        const long = this.props.accountCoords[index].long;
        return this.renderListingMarker(lat, long, currentListing._id);
      });
    }
  }

  handleOpenModal(id) {
    this.setState({ showModal: true, selectedListingId: id });
  }

  handleCloseModal() {
    this.setState({ selectedListingId: null });
    this.componentDidMount();
  }

  render() {
    return (
      <>
        <div
          className="map-container mx-auto"
          style={{ height: '60vh', width: '75%' }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: REACT_APP_MAP_API }}
            defaultCenter={this.props.center}
            defaultZoom={11.25}
          >
            {this.renderAllListingMarkers()}
          </GoogleMapReact>
        </div>
      </>
    );
  }
}

export default ListingMap;
