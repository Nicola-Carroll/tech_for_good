import React, { Component } from 'react';
import MyClaim from './myClaim.component';
import axios from 'axios';
import { userContext } from '../../App.js';

const { REACT_APP_ENDPOINT } = process.env;

export default class MyClaimFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { listings: [], listedByAccountDetails: [] };
    MyClaimFeed.contextType = userContext;
  }

  availableListings(data) {
    return data.filter((currentListing) => {
      return new Date(currentListing.timeAvailableUntil) > new Date();
    });
  }

  async accountContactDetails(id) {
    const response = await axios.get(`${REACT_APP_ENDPOINT}accounts/${id}`);
    return response.data.contactNumber;
  }

  async listedByAccountDetails(claimedListings) {
    const promises = [];
    claimedListings.forEach((listing) => {
      promises.push(this.accountContactDetails(listing.listedBy));
    });
    const contactDetails = await Promise.all(promises);
    this.setState({
      listedByAccountDetails: contactDetails,
      listings: claimedListings,
    });
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        `${REACT_APP_ENDPOINT}listings/claimed/${this.context.user._id}`,
      );
      await this.listedByAccountDetails(this.availableListings(response.data));
    } catch (error) {
      console.log(error);
    }
  }

  claimFeed() {
    return this.state.listings.map((currentListing, index) => {
      return (
        <MyClaim
          listing={currentListing}
          contactNumber={this.state.listedByAccountDetails[index]}
          key={currentListing._id}
        ></MyClaim>
      );
    });
  }

  render() {
    return <>{this.claimFeed()}</>;
  }
}
