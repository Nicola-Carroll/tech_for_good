import React, { Component } from 'react';
import MyListing from './myListing.component';
import axios from 'axios';
import { userContext } from '../App.js';

const { REACT_APP_ENDPOINT } = process.env;

export default class MyListingFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { listings: [] };
    MyListingFeed.contextType = userContext;
  }

  availableListings(data) {
    return data.filter((currentListing) => {
      return (
        // !currentListing.claimedBy &&
        new Date(currentListing.timeAvailableUntil) > new Date()
      );
    });
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        `${REACT_APP_ENDPOINT}listings/account/${this.context.user._id}`,
      );
      this.setState({ listings: this.availableListings(response.data) });
    } catch (error) {
      console.log(error);
    }
  }

  listingFeed() {
    return this.state.listings.map((currentListing) => {
      return (
        <MyListing
          listing={currentListing}
          key={currentListing._id}
        ></MyListing>
      );
    });
  }

  render() {
    return (
      <>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Listed by</th>
              <th>Number of meals</th>
              <th>Description</th>
              <th>Available until</th>
              <th>Claim status</th>
            </tr>
          </thead>
          <tbody>{this.listingFeed()}</tbody>
        </table>
      </>
    );
  }
}
