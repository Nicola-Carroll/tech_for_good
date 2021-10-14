import React, { Component } from 'react';
import { userContext } from '../App.js';

import ListingFeed from '../components/shared/ListingFeed.component';

export default class ViewListings extends Component {
  render() {
    return (
      <>
        <userContext.Consumer>
          {({ user, loginUser, logoutUser }) => {
            return (
              <>
                {user && (
                  <h2 className="m-3 pt-4 pb-4 text-center">
                    You're currently logged in as {user.username}
                  </h2>
                )}
                <ListingFeed />
              </>
            );
          }}
        </userContext.Consumer>
      </>
    );
  }
}
