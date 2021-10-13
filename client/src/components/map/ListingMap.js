import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

import ListingModal from '../shared/ListingModal.component';
import ListingMarker from './ListingMarker.component';

const { REACT_APP_MAP_API } = process.env;
const { REACT_APP_ENDPOINT } = process.env;

class ListingMap extends Component {
  constructor(props) {
    super(props);
    this.state = { listings: [], showModal: false, selectedListingId: null };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  static defaultProps = {
    center: {
      lat: 51.50696956402362,
      lng: -0.12783497069894073,
    },
    zoom: 9,
  };

  availableListings(data) {
    return data.filter((currentListing) => {
      return (
        !currentListing.claimedBy &&
        new Date(currentListing.timeAvailableUntil) > new Date()
      );
    });
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`${REACT_APP_ENDPOINT}listings`);
      this.setState({ listings: this.availableListings(response.data) });
    } catch (error) {
      console.log(error);
    }
  }

  // get coords of listing is async
  // first we need the listing object, then we need to get the listed by id
  // then we need to make a get request to obtain lat & long from db
  // then we need to generate the marker for that lat & long

  renderListingMarker(lat, long, id) {
    return (
      <ListingMarker
        lat={lat}
        lng={long}
        key={id}
        handleClick={() => this.handleOpenModal(id)}
      ></ListingMarker>
    );
  }

  renderAllListingMarkers() {
    return this.state.listings.reverse().map((currentListing) => {
      const lat = 51.00696956402362;
      const long = -0.12783497069894073;
      return this.renderListingMarker(lat, long, currentListing._id);
    });
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
        <div style={{ height: '100vh', width: '75%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: REACT_APP_MAP_API }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {this.renderAllListingMarkers()}
          </GoogleMapReact>
        </div>
        <ListingModal
          listingId={this.state.selectedListingId}
          handleClose={this.handleCloseModal}
        />
      </>
    );
  }
}

export default ListingMap;
