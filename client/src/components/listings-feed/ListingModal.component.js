import React, { Component, createRef } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { userContext } from '../App.js';

const { REACT_APP_ENDPOINT } = process.env;

Modal.setAppElement('#root');

export default class ListingModal extends Component {
  constructor(props) {
    super(props);

    this.input = createRef();
  }

  async claimListing(id) {
    const claim = { claimedBy: this.input.current.value };
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
      <>
        <userContext.Consumer>
          {({ user }) => {
            return (
              <>
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
                    ref={this.input}
                    value={user._id}
                  >
                    Confirm
                  </button>
                </Modal>
              </>
            );
          }}
        </userContext.Consumer>
      </>
    );
  }
}
