import React, { Component } from 'react';
import ListingForm from '../components/ListingForm';
import { userContext } from '../App.js';

export default class CreateListing extends Component {
  render() {
    return (
      <div className="m-4">
        <userContext.Consumer>
          {({ user, loginUser, logoutUser }) => {
            return <>{user && <h2>You're currently logged in as {user}</h2>}</>;
          }}
        </userContext.Consumer>
        <h1 className="text-center">Create listing</h1>
        <ListingForm />
      </div>
    );
  }
}
