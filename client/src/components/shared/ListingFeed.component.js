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
      selectedListingId: null,
      selectedListing: null,
      listedByAccountCoords: [],

      modalContent: {
        listedByName: null,
        listedByAddress1: null,
        listedByAddress2: null,
        listedByCity: null,
        listedByPostcode: null,
        listingNumberOfMeals: null,
        listingDetails: null,
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

  async handleOpenModal(id, listing) {
    console.log(listing);
    console.log('listed by id');
    const listedById = listing.listedBy;
    console.log(listedById);
    const response = await axios.get(
      `${REACT_APP_ENDPOINT}accounts/${listedById}`,
    );

    this.setState({
      showModal: true,
      selectedListingId: id,
      selectedListing: listing,
      modalContent: {
        listedByName: response.data.username,
        listedByAddress1: response.data.addressLine1,
        listedByAddress2: response.data.addressLine2,
        listedByCity: response.data.city,
        listedByPostcode: response.data.postCode,
        listingNumberOfMeals: listing.numberOfMeals,
        listingDetails: listing.description,
        listingAvailableTill: listing.timeAvailableUntil,
      },
    });
  }

  handleCloseModal() {
    this.setState({ selectedListingId: null });
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
          listingId={this.state.selectedListingId}
          listing={this.state.selectedListing}
          handleClose={this.handleCloseModal}
          content={this.state.modalContent}
        />
      </>
    );
  }
}
