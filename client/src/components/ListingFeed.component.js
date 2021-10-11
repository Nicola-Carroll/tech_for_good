import React, { Component } from 'react';
import Modal from 'react-modal';
import Listing from './listing.component';
import axios from 'axios';

const { REACT_APP_ENDPOINT } = process.env;

Modal.setAppElement('#root');

export default class ListingFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { listings: [], showModal: false, selectedListingId: null };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${REACT_APP_ENDPOINT}listings`)
      .then((response) => {
        this.setState({ listings: this.availableListings(response.data) });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  availableListings(data) {
    return data.filter((currentListing) => {
      return !currentListing.claimedBy;
    });
  }

  handleOpenModal(id) {
    this.setState({ showModal: true, selectedListingId: id });
  }

  handleCloseModal() {
    this.setState({ showModal: false, selectedListingId: null });
  }

  async claimListing(id) {
    // this will change to align with the session id of the account
    const claim = { claimedBy: 222 };
    try {
      const response = await axios.patch(
        `${REACT_APP_ENDPOINT}listings/update/${id}`,
        claim,
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    this.handleCloseModal();
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
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <button
            onClick={() => this.claimListing(this.state.selectedListingId)}
            id="claim-button"
          >
            Confirm
          </button>
          <button onClick={this.handleCloseModal} id="back-button">
            Go back
          </button>
        </Modal>
      </>
    );
  }
}
