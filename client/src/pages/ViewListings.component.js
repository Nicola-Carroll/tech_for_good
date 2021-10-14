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
                <ListingFeed currentUserId={user._id} />
              </>
            );
          }}
        </userContext.Consumer>
      </>
    );
  }
}
