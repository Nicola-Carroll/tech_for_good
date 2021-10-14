import React, { Component } from 'react';
import MyListingFeed from '../components/my-listings-feed/myListingFeed.component';

export default class ViewMyListings extends Component {
  render() {
    return (
      <>
        <h1 className="text-center mt-5">Donations you have listed</h1>
        <MyListingFeed></MyListingFeed>
      </>
    );
  }
}
