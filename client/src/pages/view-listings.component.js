import React, { Component } from 'react';
import ListingFeed from '../components/ListingFeed.component';

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
