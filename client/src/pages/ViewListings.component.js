import React, { Component } from 'react';
import { userContext } from '../App.js';

import ListingFeed from '../components/listings-feed/ListingFeed.component';
import ListingMap from '../components/map/ListingMap';

export default class ViewListings extends Component {
  render() {
    return (
      <>
        <userContext.Consumer>
          {({ user, loginUser, logoutUser }) => {
            return (
              <>
                {user && <h2>You're currently logged in as {user.username}</h2>}
              </>
            );
          }}
        </userContext.Consumer>
        <ListingFeed />
        <ListingMap />
      </>
    );
  }
}
