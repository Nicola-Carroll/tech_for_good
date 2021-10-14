import React, { Component } from 'react';
import MyClaim from './myClaim.component';
import axios from 'axios';
import { userContext } from '../../App.js';

const { REACT_APP_ENDPOINT } = process.env;

export default class MyClaimFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { listings: [] };
    MyClaimFeed.contextType = userContext;
  }

  availableListings(data) {
    return data.filter((currentListing) => {
      return new Date(currentListing.timeAvailableUntil) > new Date();
    });
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        `${REACT_APP_ENDPOINT}listings/claimed/${this.context.user._id}`,
      );
      this.setState({ listings: this.availableListings(response.data) });
    } catch (error) {
      console.log(error);
    }
  }

  claimFeed() {
    return this.state.listings.map((currentListing) => {
      return (
        <MyClaim listing={currentListing} key={currentListing._id}></MyClaim>
      );
    });
  }

  render() {
    return <>{this.claimFeed()}</>;
  }
}
