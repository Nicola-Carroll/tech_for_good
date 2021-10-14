import React, { Component, createRef } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { userContext } from '../../App.js';
import ModalContent from './ModalContent.component.js';

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
                  isOpen={!!this.props.listing}
                  contentLabel="Minimal Modal Example"
                  style={{
                    content: {
                      top: '10%',
                      left: '20%',
                      right: '20%',
                      bottom: '30%',
                      background: '#FFFFFF',
                    },
                  }}
                >
                  <div>
                    <ModalContent content={this.props.content} />
                  </div>
                  <button
                    className="btn btn-outline-success mr-3 mt-3"
                    onClick={() => this.claimListing(this.props.listing._id)}
                    id="claim-button"
                    ref={this.input}
                    value={user._id}
                  >
                    Confirm
                  </button>{' '}
                  <button
                    className="btn btn-outline-success ml-3 mt-3"
                    onClick={this.props.handleClose}
                    id="back-button"
                  >
                    Go back
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
