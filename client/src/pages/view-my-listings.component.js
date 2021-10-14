import React, { Component } from 'react';
import MyListingFeed from '../components/my-listings-feed/myListingFeed.component';

export default class ViewMyListings extends Component {
  render() {
    return (
      <>
        <h2 className="text-center mt-5">Donations you have listed</h2>
        <MyListingFeed></MyListingFeed>
      </>
    );
  }
}
