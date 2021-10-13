import React, { Component } from 'react';
import axios from 'axios';

import ListingMap from '../map/ListingMap';
import ListingTable from '../listings-feed/ListingTable.component';
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
        <ListingTable
          listings={this.state.listings}
          handleOpenModal={this.handleOpenModal}
        />
        <ListingMap
          listings={this.state.listings.reverse()}
          accountCoords={this.state.listedByAccountCoords.reverse()}
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
