import React, { Component } from 'react';
import axios from 'axios';

import ListingMap from '../map/ListingMap';
import ListingsContainer from '../listings-feed/ListingsContainer.component';
import ListingModal from './ListingModal.component';

const { REACT_APP_ENDPOINT } = process.env;

export default class ListingFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      showModal: false,
      selectedListingId: null,
      listedByAccountCoords: [],
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  availableListings(data) {
    return data.filter((currentListing) => {
      return (
        !currentListing.claimedBy &&
        new Date(currentListing.timeAvailableUntil) > new Date()
      );
    });
  }

  async accountCoords(listing) {
    const listedById = listing.listedBy;
    const response = await axios.get(
      `${REACT_APP_ENDPOINT}accounts/${listedById}`,
    );
    return { lat: response.data.latitude, long: response.data.longitude };
  }

  async listedByAccountCoords(availableListings) {
    const promises = [];
    availableListings.forEach((listing) => {
      promises.push(this.accountCoords(listing));
    });
    const accountsCoords = await Promise.all(promises);
    this.setState({
      listedByAccountCoords: accountsCoords,
      listings: availableListings,
    });
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`${REACT_APP_ENDPOINT}listings`);
      const availableListings = this.availableListings(response.data);
      await this.listedByAccountCoords(availableListings);
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

  render() {
    return (
      <>
        <h2 className="text-center mt-5">All donations currently available</h2>
        <ListingsContainer
          className="w-75"
          listings={this.state.listings}
          handleOpenModal={this.handleOpenModal}
        />
        <ListingMap
          id="listing-map"
          listings={this.state.listings.reverse()}
          accountCoords={this.state.listedByAccountCoords.reverse()}
          handleOpenModal={this.handleOpenModal}
        />
        <ListingModal
          className="listing-modal"
          listingId={this.state.selectedListingId}
          handleClose={this.handleCloseModal}
        />
      </>
    );
  }
}
