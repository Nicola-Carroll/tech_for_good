import React, { Component } from 'react';
import Listing from './listing.component';
import ListingModal from './ListingModal.component';
import axios from 'axios';

const { REACT_APP_ENDPOINT } = process.env;

export default class ListingFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { listings: [], showModal: false, selectedListingId: null };
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
      return (
        <Listing
          listing={currentListing}
          key={currentListing._id}
          handleClick={(key) => this.handleOpenModal(key)}
        ></Listing>
      );
    });
  }

  render() {
    return (
      <>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Listed by</th>
              <th>Number of meals</th>
              <th>Description</th>
              <th>Available until</th>
            </tr>
          </thead>
          <tbody>{this.listingFeed()}</tbody>
        </table>
        <ListingModal
          listingId={this.state.selectedListingId}
          handleClose={this.handleCloseModal}
        />
      </>
    );
  }
}
