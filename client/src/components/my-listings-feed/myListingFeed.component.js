import React, { Component } from 'react';
import MyListing from './myListing.component';
import axios from 'axios';
import { userContext } from '../../App.js';

const { REACT_APP_ENDPOINT } = process.env;

export default class MyListingFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { listings: [] };
    MyListingFeed.contextType = userContext;
  }

  availableListings(data) {
    return data.filter((currentListing) => {
      return new Date(currentListing.timeAvailableUntil) > new Date();
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
    return this.state.listings.reverse().map((currentListing) => {
      return (
        <MyListing
          listing={currentListing}
          key={currentListing._id}
        ></MyListing>
      );
    });
  }

  render() {
    return <>{this.listingFeed()}</>;
  }
}
