import React, { Component } from 'react';
import ListingFeed from '../components/listing-feed.component';

export default class ViewListings extends Component {
  render() {
    return (
      <>
        <div>Listing feed</div>
        <ListingFeed></ListingFeed>
      </>
    );
  }
}
