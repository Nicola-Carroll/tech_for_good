import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const { REACT_APP_ENDPOINT } = process.env;

Modal.setAppElement('#root');

export default class ListingModal extends Component {
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
    this.props.handleClose();
  }

  render() {
    return (
      <Modal
        isOpen={!!this.props.listingId}
        contentLabel="Minimal Modal Example"
        style={{
          content: {
            top: '10%',
            left: '20%',
            right: '20%',
            bottom: '60%',
            background: '#39C0ED',
          },
        }}
      >
        <h3 className="m-3 mb-4">
          Are you sure you want to claim this listing?
        </h3>
        <button
          className="btn btn-secondary mx-3"
          onClick={this.props.handleClose}
          id="back-button"
        >
          Go back
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={() => this.claimListing(this.props.listingId)}
          id="claim-button"
        >
          Confirm
        </button>
      </Modal>
    );
  }
}
