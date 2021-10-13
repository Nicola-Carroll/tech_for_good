import React, { Component } from 'react';

import Listing from './listing.component';

export default class ListingTable extends Component {
  listingFeed() {
    return this.props.listings.map((currentListing) => {
      return (
        <Listing
          listing={currentListing}
          key={currentListing._id}
          handleClick={() => this.props.handleOpenModal(currentListing)}
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
      </>
    );
  }
}
