import React, { Component } from 'react';
import MyListingFeed from '../components/myListingFeed.component';

export default class ViewMyListings extends Component {
  render() {
    return (
      <>
        <div>My listings</div>
        <MyListingFeed></MyListingFeed>
      </>
    );
  }
}
