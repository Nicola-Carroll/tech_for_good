import React, { Component } from 'react';
import ListingFeed from '../components/listing-feed.component';
import { userContext } from '../App.js';

export default class ViewListings extends Component {
  render() {
    return (
      <>
        <div>Listing feed</div>
        <userContext.Consumer>
          {({ user, loginUser, logoutUser }) => {
            return <>{user && <h2>You're currently logged in as {user}</h2>}</>;
          }}
        </userContext.Consumer>
        <ListingFeed></ListingFeed>
      </>
    );
  }
}
