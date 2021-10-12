import React, { Component } from 'react';
import axios from 'axios';

import ListingModal from '../shared/ListingModal.component';
import ListingMarker from './ListingMarker.component';

const { REACT_APP_ENDPOINT } = process.env;

export default class AvailableListingMarkers extends Component {
  constructor(props) {
    super(props);
    this.state = { listings: [], showModal: false, selectedListingId: null };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

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

  listingFeed() {
    return this.state.listings.map((currentListing) => {
      console.log(currentListing);
      return (
        <ListingMarker
          lat={50.955413}
          lng={-0.737844}
          listing={currentListing}
          key={currentListing._id}
          handleClick={(key) => this.handleOpenModal(key)}
        ></ListingMarker>
      );
    });
  }

  render() {
    return (
      <>
        {this.listingFeed()}

        <ListingModal
          listingId={this.state.selectedListingId}
          handleClose={this.handleCloseModal}
        />
      </>
    );
  }
}
