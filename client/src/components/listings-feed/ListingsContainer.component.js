import React, { Component } from 'react';

import Listing from './listing.component';

export default class ListingsContainer extends Component {
  listingFeed() {
    return this.props.listings.map((currentListing) => {
      return (
        <Listing
          listing={currentListing}
          key={currentListing._id}
          handleClick={(id) => this.props.handleOpenModal(id)}
        ></Listing>
      );
    });
  }

  render() {
    return <>{this.listingFeed()}</>;
  }
}
