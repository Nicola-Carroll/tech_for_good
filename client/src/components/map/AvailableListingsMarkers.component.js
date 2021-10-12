import React, { Component } from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';

import ListingModal from '../shared/ListingModal.component';
import ListingMarker from './ListingMarker.component';

const { REACT_APP_ENDPOINT } = process.env;
const { REACT_APP_MAP_API } = process.env;

export default class AvailableListingsMarkers extends Component {
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
      return !currentListing.claimedBy;
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

  handleOpenModal(id) {
    this.setState({ showModal: true, selectedListingId: id });
  }

  handleCloseModal() {
    this.setState({ selectedListingId: null });
    this.componentDidMount();
  }

  listingMarkers() {
    return this.state.listings.map((currentListing) => {
      return (
        <ListingMarker
          lat={51.355413}
          lng={-0.637844}
          // listing={currentListing}
          key={currentListing._id}
          handleClick={(key) => this.handleOpenModal(key)}
        ></ListingMarker>
      );
    });
  }

  render() {
    return (
      <>
        {this.listingMarkers()}
        <ListingModal
          listingId={this.state.selectedListingId}
          handleClose={this.handleCloseModal}
        />
      </>
    );
  }
}
