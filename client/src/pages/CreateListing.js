import React, { Component } from 'react';
import ListingForm from '../components/ListingForm';

export default class CreateListing extends Component {
  render() {
    return (
      <div>
        <p>Create listing</p>
        <ListingForm />
      </div>
    );
  }
}
