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
      selectedListing: null,
      listedByAccountCoords: [],
      currentUserCoords: null,

      modalContent: {
        listedByAccount: null,
        listingNumberOfMeals: null,
        listingDescription: null,
        listingAvailableTill: null,
      },
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

  async accountCoords(id) {
    const response = await axios.get(`${REACT_APP_ENDPOINT}accounts/${id}`);
    return { lat: response.data.latitude, long: response.data.longitude };
  }

  async listedByAccountCoords(availableListings) {
    const promises = [];
    availableListings.forEach((listing) => {
      promises.push(this.accountCoords(listing.listedBy));
    });
    const accountsCoords = await Promise.all(promises);
    const currentUserCoords = await this.accountCoords(
      this.props.currentUserId,
    );
    this.setState({
      listedByAccountCoords: accountsCoords,
      listings: availableListings,
      currentUserCoords: currentUserCoords,
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

  async handleOpenModal(listing) {
    const listedById = listing.listedBy;
    const response = await axios.get(
      `${REACT_APP_ENDPOINT}accounts/${listedById}`,
    );

    this.setState({
      showModal: true,
      selectedListing: listing,
      modalContent: {
        listedByAccount: response.data,
        listingNumberOfMeals: listing.numberOfMeals,
        listingDescription: listing.description,
        listingAvailableTill: listing.timeAvailableUntil,
      },
    });
  }

  handleCloseModal() {
    this.setState({ selectedListing: null });
    this.componentDidMount();
  }

  render() {
    return (
      <>
        <h1 className="text-center mt-5 mb-4">Available Donations</h1>
        <ListingMap
          id="listing-map"
          listings={this.state.listings.reverse()}
          accountCoords={this.state.listedByAccountCoords.reverse()}
          handleOpenModal={this.handleOpenModal}
          userCoords={this.state.currentUserCoords}
        />
        <div className="p-2"></div>
        <ListingsContainer
          className="w-75"
          listings={this.state.listings}
          handleOpenModal={this.handleOpenModal}
        />
        <ListingModal
          className="listing-modal"
          listing={this.state.selectedListing}
          handleClose={this.handleCloseModal}
          content={this.state.modalContent}
        />
      </>
    );
  }
}
