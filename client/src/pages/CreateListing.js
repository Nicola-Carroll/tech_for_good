import React, { Component } from 'react';
import ListingForm from '../components/new-listing/ListingForm';

export default class CreateListing extends Component {
  render() {
    return (
      <div className="m-4">
        <h1 className="text-center pt-4">Create listing</h1>
        <ListingForm />
      </div>
    );
  }
}
