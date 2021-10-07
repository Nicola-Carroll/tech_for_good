import React, { Component } from 'react';
// import Listing from './components/listing.component';
import axios from 'axios';

function Listing(props) {
  return (
    <li key={props.key}>
      <div>{props.listing.numberOfMeals}</div>
      <div>{props.listing.description}</div>
      <div>{props.listing.listedBy}</div>
      <div>{props.listing.timeAvailableUntil}</div>
    </li>
  );
}

export default class ListingFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { listings: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/listings')
      .then((response) => {
        console.log(response);
        this.setState({ listings: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  listingFeed() {
    return this.state.listings.map((currentListing) => {
      return (
        <Listing listing={currentListing} key={currentListing._id}></Listing>
      );
    });
  }

  render() {
    return this.listingFeed();
  }
}
